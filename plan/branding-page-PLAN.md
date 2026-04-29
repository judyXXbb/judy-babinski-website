## Plan: Branding Page — Move Branding Sections Off Home Page

**STATUS: SAVED — awaiting ESLint fix completion before approval**

### Phase 1: Update Layout.tsx — Add noindex Support
- [ ] Add `noindex?: boolean` to the `LayoutProps` interface in `src/components/Layout.tsx`
- [ ] Pass `noindex={noindex}` to the `<NextSeo>` component in `src/components/Layout.tsx`

### Phase 2: Create Branding Page
- [ ] Create `src/pages/branding.tsx` — import Layout and all 5 branding components; render them in order: BrandingHeaderSection, PersonalBrandingSection, BrandingForPerformersSection, BrandingForActorsSection, PersonalBranding2Section
- [ ] Pass `noindex={true}` to Layout in branding.tsx
- [ ] Set a sensible title and description in the Layout call (title: "Branding Photography | Judy Babinski Photography", description: "Personal branding, performer branding, and actor branding photography by Judy Babinski.")

### Phase 3: Clean Up Home Page
- [ ] Remove all 5 branding component imports from `src/pages/index.tsx`: BrandingHeaderSection, PersonalBrandingSection, BrandingForPerformersSection, BrandingForActorsSection, PersonalBranding2Section
- [ ] Remove the corresponding 5 JSX elements from the return statement in `src/pages/index.tsx`
- [ ] Verify the home page closing sequence reads: ActorModelHeadshotsSection → OnLocationTeamHeadshotsSection → 25px white spacer div

### Phase 4: Build Verification
- [ ] Run `pnpm run build` — must complete with zero TypeScript errors and zero build failures

### Phase 5: Commit and Push
- [ ] Commit all changes with a descriptive message
- [ ] Push to origin

### Phase 6 — Cleanup & Deferred Findings
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum

**About page body content (user action required before /about should be indexed):**
`content/about.md` currently has placeholder body text: "Your content goes here." The about.tsx page renders this text verbatim. Thin/placeholder body content can cause Google to ignore or penalize the page. Until real content is added, the about page should not be indexed. The about page is not currently in the sitemap (correct decision for now).

**Open Graph image dimensions:**
`Judy_Babinski_Photos__.jpg` is used as the default OG image. Ideal OG image dimensions are 1200×630px. If this image has a different aspect ratio, social media previews may crop oddly. Judy should replace this with a properly-sized image when convenient.

**Heading order — remaining open issues (awaiting Judy's decisions):**
1. **About page has no H1.** Every page needs one. Tackle together with the about page content task.
2. **Contact page skips H2.** Goes H1 "CONTACT" → Footer (no H2 on the page). Judy to decide if any section should be promoted to H2.
NOTE: The "Personal Branding H2 used twice" issue is resolved — both sections move to the noindex /branding page in this plan.

**ESLint infrastructure broken — fix in separate plan (eslint-fix-PLAN.md):**
`pnpm run lint` has never worked in this project. Fix: downgrade ESLint from 10.1.0 to 9.x, create `eslint.config.js` with the Next.js flat config, update the `lint` script in `package.json`.

**Image alt tags — awaiting Judy's input:**
Better alt tags would include each subject's profession/context and session type. When Judy is ready to provide context for each image, revisit alt tags across all pages.

**New /branding page — no H1 (low priority):**
The branding page's first heading is an H2 ("Branding" from BrandingHeaderSection). Since the page is noindex, there is no SEO consequence. A future session could add a page-level H1 if desired for accessibility completeness.
