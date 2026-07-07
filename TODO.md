# Website To-Do List

A running list of things to work on. Add new items anywhere under the relevant section.

## Next up
- [x] DONE 2026-07-01: Ferndale location page shipped (creative/actor angle, two-way cross-link with Royal Oak)
- [ ] (PRIORITY) Executive Headshots / Executive Portraits page — Judy is minutes from a strong business area (Southfield–Troy–Birmingham, the northern Woodward Corridor); target executives and C-suite in that corridor
- [x] DISCUSSED 2026-07-02: Google Business Profile — keep it as a credibility/validation asset, not a primary premium-lead channel (AI is gutting the low/commodity headshot end, which was never Judy's ideal client). DECISION: do NOT change the legal name — naming is consistent enough (person = "Judy Babinski"; business = "Judy Babinski Photography LLC" across GBP/LinkedIn company badge/Instagram; the domain saying "Photos" is irrelevant to NAP). Optional cosmetic only: drop "LLC" for identical display everywhere.
- [ ] LinkedIn posting for executive reach — Judy posted frequently when in Dallas but hasn't since moving to Berkley; many of her LinkedIn connections are still Dallas-based. Restart posting (tie to the executive page) to reach the premium Detroit-metro audience, and grow/reconnect with Detroit-area connections.
- [ ] Birmingham location page (business portraits angle) — Judy's notes are at the bottom of /Volumes/Website.09.2025/website/Ferndale.docx
- [ ] Image-file rename pass for SEO/privacy (67 files, ~93 refs). Now safer with the auto-sitemap in place. Convention: lowercase-hyphens, descriptive, unique, no keyword-stuffing. Best done while little is indexed. (Royal Oak hero already renamed; homepage copy of it still named Andrea_IG.jpg until that person is removed from the home page.)
- [ ] Publish another blog post — Judy already has several posts' worth of content written up (same style as the Headshot Fear page); just needs laying out and publishing
- [ ] Redesign the top grid on the Home page (scope TBD — discuss what Judy wants it to look like)
- [ ] (later) Add a more fully developed experience section to the home page

## Code review — batches (full detail kept locally in CODE-REVIEW-PLAN-2026-07-05.md, NOT in this public repo)
- [x] DONE 2026-07-05: Batch 1 — Contact form hardening (per-IP rate limiting, input length caps, fast SMTP timeout + error handling so messages aren't silently lost, removed the weak math captcha, kept the honeypot)
- [ ] Batch 2 — Search & social integrity (encode sitemap image URLs, dedicated OG share image, structured-data/schema consistency, blog-post schema). Decision needed: honest review count to state in schema.
- [ ] Batch 3 — Correctness & polish (blog date timezone fix, home/about markdown parsing, responsive pricing margins, make /contact static, add desktop Reviews nav link, typo fixes, drop "Dallas" from the pricing meta description)
- [ ] Batch 4 — Accessibility (text contrast, contact-form labels + live status announcements, menu aria attributes, un-justify text)
- [ ] Batch 5 — Performance (add sizes to fill images, consolidate fonts into one module, remove unused deps). Decision needed: slim the font set?
- [ ] Batch 6 — Hygiene (remove unused/stray files from public/, delete dead config/deps, de-duplicate reviews data, correct stale facts in the design-system doc). Overlaps the image-rename pass above.
- [ ] Consider making this GitHub repo PRIVATE (currently public — no secrets leak since .env is gitignored, but there's no reason a business site's code needs to be world-readable). GitHub → Settings → Danger Zone → Change visibility.

## Location pages — more suburbs
- [x] DONE 2026-07-01: Ferndale (creative/actor angle)
- [ ] Birmingham (business portraits angle)
- [ ] Southfield
- [ ] Bloomfield Hills
- [x] DONE 2026-07-05: Footer now links the location pages site-wide (Ferndale + Royal Oak clickable in the "Serving…" line; other cities stay plain text until their pages exist). Gives every location page an inbound link from every page.

## Blog
- [ ] Publish 2-3 more posts over the coming weeks (middle-path cadence)
- [ ] Judy has several posts' worth of content already written (same style as Headshot Fear) — ready to lay out and publish
- [ ] Each new post = another internal-link target for the service/location pages (link to them where relevant)
- [ ] Future post ideas: the other "ingredients" of a great headshot (referenced at the end of "Overcoming Headshot Fear")

## Strengthen non-indexed / thin pages (help them get indexed)
Priority order: Reviews first (thinnest), then Contact, then Pricing.
- [ ] Reviews page
  - [ ] Add a short human intro paragraph at the top
  - [ ] Group reviews under small headings (e.g. camera-shy, corporate/team, LinkedIn)
  - [ ] Add review structured data (star ratings in search results)
  - [ ] Add a closing call-to-action (book / read the blog)
- [ ] Contact page
  - [ ] "What happens after you reach out" note (set expectations)
  - [ ] Studio location + practical details (Berkley area, parking, distance from nearby suburbs)
  - [ ] A line on who she works with (business pros, entrepreneurs, medical, teams)
  - [ ] Add a photo (Judy or the studio space) — maybe more pics
- [ ] Pricing page
  - [ ] Expand intro on pricing philosophy (why session fee and image fees are split)
  - [ ] Add a few pricing FAQ lines (reuse FAQ structured-data approach from Royal Oak)
  - [ ] Short "what's included / how to prepare" note

## Other pages / content
- [ ] Add more copy to the Branding page (flagged low word count)
- [ ] New service page (planned)

## Housekeeping
- [ ] Delete unused netlify.toml (untracked leftover — host is AWS Amplify via amplify.yml; netlify.toml is not used and can cause confusion)

## Security / dependencies
- [ ] Switch frontmatter reader off gray-matter ("soon", not urgent). gray-matter@4.0.3 (last released 2021) pins js-yaml ^3.x, which has an unpatched DoS advisory (GHSA-h67p-54hq-rp68; fix only exists in js-yaml 4.2.0). Not exploitable here — it only parses our own trusted .md frontmatter at build time — but the CVE monitor will keep flagging it. Replace with a maintained reader that uses js-yaml 4.x. Small change across the files that read content.
- [ ] (optional) Bump the eslintrc js-yaml override from ">=4.1.1" to ">=4.2.0" to clear the dev-only copy.
- [x] DONE 2026-06-27: nodemailer bumped to ^9.0.1 (GHSA-p6gq-j5cr-w38f)

## SEO / Search Console
- [x] DONE 2026-06-23: Requested indexing (URL Inspection) for the 7 pages — Home/Branding/Royal Oak already indexed; Contact, Pricing, Reviews, Headshot Fear added to priority crawl queue
- [x] DONE 2026-07-01: Auto-generating sitemap (scripts/generate-sitemap.mjs, runs on every build) — new pages self-add. Retired hand-maintained sitemap-images.xml (single source of truth = sitemap.xml).
- [x] DONE 2026-07-01: Blank /about page set to noindex and excluded from sitemap
- [x] DONE 2026-07-02: Ferndale and makeup post both indexed — submitted sitemap + requested indexing; both show "URL is on Google" (indexed within ~5-10 min, a good site-health sign)
- [ ] If sitemap-images.xml was ever submitted in Search Console, remove that submission (file no longer exists; sitemap.xml covers everything)
- [ ] Check back in Search Console to see which pages got indexed (Ferndale + makeup post are the newest)
