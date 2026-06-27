# Website To-Do List

A running list of things to work on. Add new items anywhere under the relevant section.

## Next up
- [ ] Start the Ferndale location page (lean into the actor/model angle)
- [ ] Birmingham location page (business portraits angle) — second location page enables the "Areas We Serve" cross-linking between locations
- [ ] Publish another blog post — Judy already has several posts' worth of content written up (same style as the Headshot Fear page); just needs laying out and publishing
- [ ] (later) Add a more fully developed experience section to the home page

## Location pages — more suburbs
- [ ] Ferndale (lean into the actor/model angle)
- [ ] Birmingham (business portraits angle)
- [ ] Southfield
- [ ] Bloomfield Hills
- [ ] Add an "Areas We Serve" links section in the footer once 2+ location pages exist (so they aren't orphan pages)

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

## Security / dependencies
- [ ] Switch frontmatter reader off gray-matter ("soon", not urgent). gray-matter@4.0.3 (last released 2021) pins js-yaml ^3.x, which has an unpatched DoS advisory (GHSA-h67p-54hq-rp68; fix only exists in js-yaml 4.2.0). Not exploitable here — it only parses our own trusted .md frontmatter at build time — but the CVE monitor will keep flagging it. Replace with a maintained reader that uses js-yaml 4.x. Small change across the files that read content.
- [ ] (optional) Bump the eslintrc js-yaml override from ">=4.1.1" to ">=4.2.0" to clear the dev-only copy.
- [x] DONE 2026-06-27: nodemailer bumped to ^9.0.1 (GHSA-p6gq-j5cr-w38f)

## SEO / Search Console
- [ ] DONE 2026-06-23: Requested indexing (URL Inspection) for the 7 pages — Home/Branding/Royal Oak already indexed; Contact, Pricing, Reviews, Headshot Fear added to priority crawl queue
- [ ] Check back in Search Console in ~1-2 weeks to see which of the 4 queued pages got indexed
- [ ] Submit the image sitemap (sitemap-images.xml) to Search Console
