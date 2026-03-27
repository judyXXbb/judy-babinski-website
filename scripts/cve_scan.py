import json, re, urllib.request, sys, os, traceback
from datetime import date

WEBHOOK = os.environ.get("DISCORD_WEBHOOK", "")
REPO = "judy-babinski-website"

if not WEBHOOK:
    print("ERROR: DISCORD_WEBHOOK environment variable is not set")
    sys.exit(1)

def send_discord(msg):
    print(f"Sending Discord message ({len(msg)} chars)...")
    body = json.dumps({"content": msg[:2000]}).encode()
    req = urllib.request.Request(WEBHOOK, data=body, headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req)

# Read and parse pnpm-lock.yaml
try:
    with open("pnpm-lock.yaml") as f:
        content = f.read()
except FileNotFoundError:
    send_discord(f"CVE Monitor error: pnpm-lock.yaml not found in {REPO}.")
    sys.exit(0)

pkg_regex = re.compile(r"^  '?(@?[a-zA-Z0-9][a-zA-Z0-9\-_.@/]*)'?@([^\s:]+):", re.MULTILINE)
seen = set()
packages = []
for m in pkg_regex.finditer(content):
    name = m.group(1)
    version = re.sub(r"[^0-9.]", "", m.group(2))
    key = f"{name}@{version}"
    if key not in seen and version:
        seen.add(key)
        packages.append({"name": name, "version": version})

print(f"Scanning {len(packages)} packages...")

# Query OSV.dev
queries = [{"package": {"name": p["name"], "ecosystem": "npm"}, "version": p["version"]} for p in packages]
body = json.dumps({"queries": queries}).encode()
req = urllib.request.Request(
    "https://api.osv.dev/v1/querybatch", data=body,
    headers={"Content-Type": "application/json"}
)
try:
    with urllib.request.urlopen(req, timeout=60) as resp:
        result = json.loads(resp.read())
except Exception as e:
    send_discord(f"CVE Monitor error querying OSV.dev for {REPO}: {e}")
    sys.exit(0)

# Collect vulnerabilities
vulns = []
for i, r in enumerate(result.get("results", [])):
    for v in r.get("vulns", []):
        vulns.append({"package": packages[i]["name"], "version": packages[i]["version"],
                      "id": v["id"], "summary": v.get("summary", "")})

if not vulns:
    print("CLEAN - no vulnerabilities found")
    sys.exit(0)

# Deduplicate
seen_keys = set()
deduped = []
for v in vulns:
    k = v["id"] + v["package"]
    if k not in seen_keys:
        seen_keys.add(k)
        deduped.append(v)

today = date.today().isoformat()
msg = f"**CVE Scan - {REPO} - {today}**\n{len(deduped)} vulnerabilities found:\n\n"
for v in deduped:
    msg += f"**{v['package']} {v['version']}**\n{v['summary']}\nhttps://osv.dev/vulnerability/{v['id']}\n\n"
msg += "*This scan runs independently of deployments and reflects the current state of the lock file on main.*"

try:
    send_discord(msg)
    print(f"Discord alert sent: {len(deduped)} vulnerabilities found")
except Exception as e:
    print(f"ERROR sending Discord alert: {e}")
    traceback.print_exc()
    sys.exit(1)
