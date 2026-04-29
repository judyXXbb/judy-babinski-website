## Plan: ESLint Fix — Create Flat Config and Update Lint Script

### Phase 1: Create ESLint Flat Config
- [ ] Create `eslint.config.js` at the project root with content:
      module.exports = require('eslint-config-next')
      (This re-exports the flat config array that eslint-config-next 16.2.1 ships.)

### Phase 2: Update Lint Script
- [ ] In `package.json`, change `"lint": "next lint"` to `"lint": "eslint src"`
      (Replaces the deprecated next lint command with a direct ESLint CLI call targeting src/.)

### Phase 3: Verify Lint Passes
- [ ] Run `pnpm run lint` — must exit with code 0 (errors are failures; warnings are acceptable)
- [ ] Fix any lint errors (exit-code failures) reported on the first run — warnings do not need fixing

### Phase 4: Build Verification
- [ ] Run `pnpm run build` — must complete with zero TypeScript errors and zero build failures
      (Confirms the new eslint.config.js and package.json change did not affect the build)

### Phase 5: Commit and Push
- [ ] Commit eslint.config.js and package.json with a descriptive message
- [ ] Push to origin

### Phase 6 — Website Maintenance Cleanup & Deferred Findings
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum

**About page body content (user action required before /about should be indexed):**
`content/about.md` currently has placeholder body text: "Your content goes here." Thin/placeholder body content can cause Google to ignore or penalize the page. Until real content is added, the about page should not be indexed. The about page is not currently in the sitemap (correct decision for now).

**Open Graph image dimensions:**
`Judy_Babinski_Photos__.jpg` is used as the default OG image. Ideal OG image dimensions are 1200×630px. Judy should replace this with a properly-sized image when convenient.

**Heading order — remaining open issues (awaiting Judy's decisions):**
1. About page has no H1. Tackle together with the about page content task.
2. Contact page skips H2. Judy to decide if any section should be promoted to H2.

**Branding page — saved plan awaiting approval:**
`plan/branding-page-PLAN.md` is saved and ready for approval once this ESLint fix is complete.

**Image alt tags — awaiting Judy's input:**
Better alt tags would include each subject's profession/context and session type. Revisit when Judy is ready to provide context per image.

**New /branding page — no H1 (low priority):**
The branding page's first heading will be H2 ("Branding" from BrandingHeaderSection). Since the page is noindex, no SEO consequence. Can add an H1 later for accessibility completeness if desired.
