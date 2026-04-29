## Plan: ESLint Fix — Create Flat Config and Update Lint Script

### Phase 1: Create ESLint Flat Config
- [x] Create `eslint.config.js` at the project root with content:
      module.exports = require('eslint-config-next')
      (This re-exports the flat config array that eslint-config-next 16.2.1 ships.)

### Phase 2: Update Lint Script
- [x] In `package.json`, change `"lint": "next lint"` to `"lint": "eslint src"`
      (Replaces the deprecated next lint command with a direct ESLint CLI call targeting src/.)

### Phase 3: Verify Lint Passes
- [x] Run `pnpm run lint` — must exit with code 0 (errors are failures; warnings are acceptable)
- [x] Fix any lint errors (exit-code failures) reported on the first run — fixed 3 unescaped entity errors in TestimonialsSection, TheProcessSection, pricing.tsx

### Phase 4: Build Verification
- [x] Run `pnpm run build` — completed with zero errors

### Phase 5: Commit and Push
- [x] Committed and pushed — e43d403

### Phase 6 — Website Maintenance Cleanup & Deferred Findings
- [x] Fixed index.tsx <a> → <Link> for /reviews (found during /grade-final — file was touched this session)

## Addendum

**About page body content (user action required before /about should be indexed):**
`content/about.md` currently has placeholder body text: "Your content goes here." Thin/placeholder body content can cause Google to ignore or penalize the page. Until real content is added, the about page should not be indexed. The about page is not currently in the sitemap (correct decision for now).

**Open Graph image dimensions:**
`Judy_Babinski_Photos__.jpg` is used as the default OG image. Ideal OG image dimensions are 1200×630px. Judy should replace this with a properly-sized image when convenient.

**Heading order — remaining open issues (awaiting Judy's decisions):**
1. About page has no H1. Tackle together with the about page content task.
2. Contact page skips H2. Judy to decide if any section should be promoted to H2.

**Image alt tags — awaiting Judy's input:**
Better alt tags would include each subject's profession/context and session type. Revisit when Judy is ready to provide context per image.

**New /branding page — no H1 (low priority):**
The branding page's first heading is an H2 ("Branding" from BrandingHeaderSection). Since the page is noindex, no SEO consequence. Can add an H1 later for accessibility completeness if desired.

**CTASection.tsx — two <a> tags instead of <Link> (pre-existing, file not touched this session):**
- **What:** `<a href="/pricing/">` and `<a href="/contact/">` in CTASection.tsx should be Next.js `<Link>` components for client-side navigation.
- **Where:** `src/components/CTASection.tsx` lines 29 and 38
- **Why deferred:** File was not touched in this session. Pre-existing issue.

**FAQSection.tsx — `'use client'` directive is a no-op in Pages Router:**
- **What:** Line 1 `'use client'` is meaningless in Next.js Pages Router (only applies to App Router). Harmless but unnecessary.
- **Where:** `src/components/FAQSection.tsx` line 1
- **Why deferred:** Pre-existing, causes no functional issue.
