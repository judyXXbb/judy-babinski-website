## Plan: SEO Optimization for judybabinskiphotos.com

### Phase 1: Content File Meta Tags
- [x] Fix `content/about.md` — replace placeholder title ("About Us - Your Site Title") and description with keyword-rich versions for Judy's about page
- [x] Fix `content/pricing.md` — replace placeholder title ("Pricing - Your Site Title") and description with keyword-rich versions
- [x] Fix `content/contact.md` — replace placeholder title ("Contact Us - Your Site Title") and description with keyword-rich versions

### Phase 2: Page-Level SEO — Pricing and Contact
- [x] Update `src/pages/pricing.tsx` — replace hardcoded `title="Pricing"` and generic description in Layout call with brand name + location keywords
- [x] Update `src/pages/contact.tsx` — replace hardcoded `title="Contact"` and minimal description in Layout call with brand name + location keywords

### Phase 3: Technical SEO — Layout.tsx
- [x] Add `useRouter` to `src/components/Layout.tsx` and construct dynamic canonical URL using `router.pathname`; pass to NextSeo `canonical` prop
- [x] Add `url` field to the `openGraph` config in Layout.tsx (set to canonical URL)
- [x] Add Open Graph `images` array to the `openGraph` config in Layout.tsx using `Judy_Babinski_Photos__.jpg` as default (Judy can replace with a preferred 1200×630 image)
- [x] Remove duplicate `additionalMetaTags` (google-site-verification) from Layout.tsx NextSeo call — verification tag is already present in `_app.tsx` and needs to appear only once
- [x] Add JSON-LD LocalBusiness schema to Layout.tsx via `<Head><script type="application/ld+json">` — Detroit Metro only, no Dallas

### Phase 4: Sitemap Fix
- [x] Update `public/sitemap.xml` — change all 3 `<loc>` entries from `https://judybabinskiphotos.com/...` to `https://www.judybabinskiphotos.com/...` (www is canonical; all Amplify traffic redirects to www)

### Phase 4b: H1 Heading — Pricing Page
- [x] Update the H1 in `src/pages/pricing.tsx` from "PRICING" to "HEADSHOT SESSION PRICING"

### Phase 5: Image Alt Tags
- [x] Update 4 image alt tags in `src/pages/pricing.tsx` — updated each to include subject's first name and Detroit location keyword
- [x] Update `imageAlt` in the `TwoColumnSection` call in `src/pages/index.tsx` — updated to include subject name and location keyword

### Phase 6: Build Verification
- [x] Run `pnpm run build` — passed clean, zero TypeScript errors

### Phase 7: Commit
- [x] Committed and pushed: de5299b (SEO), 3e9a581 (footer fix), 5647aca (canonical fix)

### Phase 8 — Cleanup & Deferred Findings
[Left intentionally blank. Populated by /grade as out-of-scope findings are discovered during execution.]

## Addendum

**About page body content (user action required before /about should be indexed):**
`content/about.md` currently has placeholder body text: "Your content goes here." The about.tsx page renders this text verbatim. Thin/placeholder body content can cause Google to ignore or penalize the page. This plan fixes the meta title/description in about.md, but the body content requires Judy to write real copy about herself. Until real content is added, consider adding `<meta name="robots" content="noindex">` to the about page, or excluding /about from the sitemap. The about page is not currently in the sitemap (correct decision for now).

**Open Graph image dimensions:**
`Judy_Babinski_Photos__.jpg` is used as the default OG image. Ideal OG image dimensions are 1200×630px. If this image has a different aspect ratio, social media previews may crop oddly. Judy should replace this with a properly-sized image when convenient.

**Heading order — three remaining issues (awaiting Judy's decisions):**
Footer H3 "CONTACT US" has been fixed (changed to a `<p>` tag — visually identical). Three issues remain:

1. **About page has no H1.** Every page needs one. Needs an H1 added — something like "About Judy Babinski" — but the about page also has placeholder body content that needs real copy before this page should be indexed. Tackle together with the about page content task below.

2. **Contact page skips H2.** Goes H1 "CONTACT" → Footer (no H2 on the page). Consider whether any of the contact page sections (the intro text, the form section) should be promoted to H2. Judy to decide.

3. **"Personal Branding" is used as H2 twice** on the home page (PersonalBrandingSection and PersonalBranding2Section both use identical text). One of them should be renamed to something more specific — Judy to decide what the second one should say.

**ESLint infrastructure broken — fix at start of next session:**
`pnpm run lint` has never worked in this project. Two compounding issues: (1) no ESLint config file was ever created; (2) `next lint` is deprecated and uses removed options incompatible with ESLint 10.1.0. Fix: downgrade ESLint from 10.1.0 to 9.x (which `eslint-config-next` 16.2.1 was designed for), create `eslint.config.js` with the Next.js flat config, and update the `lint` script in `package.json`. Estimated 15 minutes. Should be done before any other coding work begins in the next session.

**Image alt tags — awaiting Judy's input:**
The current alt tags use a generic pattern ("Professional headshot of [Name] by Detroit headshot photographer Judy Babinski"). Better alt tags would include each subject's profession/context and session type (corporate, actor, personal branding) and specific Detroit-area locations (Ferndale, Royal Oak, Birmingham, etc.). Most site images are of Dallas-era clients and will eventually be replaced with Detroit clients. When Judy is ready to provide context for each image (or replace images with Detroit clients), revisit alt tags across all pages: pricing.tsx (4 images), index.tsx (gallery, TwoColumnSection, HappyClientsSection, etc.), and any other components with client photos.
