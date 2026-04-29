## Plan: Branding Page — Move Branding Sections Off Home Page

**STATUS: COMPLETE**

### Phase 1: Update Layout.tsx — Add noindex Support
- [x] Add `noindex?: boolean` to the `LayoutProps` interface in `src/components/Layout.tsx`
- [x] Pass `noindex={noindex}` to the `<NextSeo>` component in `src/components/Layout.tsx`

### Phase 2: Create Branding Page
- [x] Create `src/pages/branding.tsx` — import Layout and all 5 branding components; render them in order: BrandingHeaderSection, PersonalBrandingSection, BrandingForPerformersSection, BrandingForActorsSection, PersonalBranding2Section
- [x] Pass `noindex={true}` to Layout in branding.tsx
- [x] Set a sensible title and description in the Layout call (title: "Branding Photography | Judy Babinski Photography", description: "Personal branding, performer branding, and actor branding photography by Judy Babinski.")

### Phase 3: Clean Up Home Page
- [x] Remove all 5 branding component imports from `src/pages/index.tsx`: BrandingHeaderSection, PersonalBrandingSection, BrandingForPerformersSection, BrandingForActorsSection, PersonalBranding2Section
- [x] Remove the corresponding 5 JSX elements from the return statement in `src/pages/index.tsx`
- [x] Verify the home page closing sequence reads: ActorModelHeadshotsSection → OnLocationTeamHeadshotsSection → 25px white spacer div

### Phase 4: Build Verification
- [x] Run `pnpm run build` — completed with zero TypeScript errors and zero build failures

### Phase 5: Commit and Push
- [x] Committed and pushed — a784c19

### Phase 6 — Cleanup & Deferred Findings
- [x] Fixed index.tsx <a> → <Link> for /reviews (found during /grade-final)

## Addendum

**About page body content (user action required before /about should be indexed):**
`content/about.md` currently has placeholder body text: "Your content goes here." Thin/placeholder body content can cause Google to ignore or penalize the page. Until real content is added, the about page should not be indexed. The about page is not currently in the sitemap (correct decision for now).

**Open Graph image dimensions:**
`Judy_Babinski_Photos__.jpg` is used as the default OG image. Ideal OG image dimensions are 1200×630px. Judy should replace this with a properly-sized image when convenient.

**Heading order — remaining open issues (awaiting Judy's decisions):**
1. About page has no H1. Tackle together with the about page content task.
2. Contact page skips H2. Judy to decide if any section should be promoted to H2.

**Image alt tags — awaiting Judy's input:**
Better alt tags would include each subject's profession/context and session type. When Judy is ready to provide context for each image, revisit alt tags across all pages.

**New /branding page — no H1 (low priority):**
The branding page's first heading is an H2 ("Branding" from BrandingHeaderSection). Since the page is noindex, no SEO consequence. A future session could add a page-level H1 if desired for accessibility completeness.

**CTASection.tsx — two <a> tags instead of <Link> (pre-existing, file not touched this session):**
- **What:** `<a href="/pricing/">` and `<a href="/contact/">` in CTASection.tsx should be Next.js `<Link>` components for client-side navigation.
- **Where:** `src/components/CTASection.tsx` lines 29 and 38
- **Why deferred:** File was not touched in this session. Pre-existing issue.

**FAQSection.tsx — `'use client'` directive is a no-op in Pages Router:**
- **What:** Line 1 `'use client'` is meaningless in Next.js Pages Router (only applies to App Router). Harmless but unnecessary.
- **Where:** `src/components/FAQSection.tsx` line 1
- **Why deferred:** Pre-existing, causes no functional issue.
