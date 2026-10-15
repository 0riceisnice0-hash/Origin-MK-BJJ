# Origin MK BJJ: search implementation and maintenance

Updated 15 October 2026.

## Implemented

The site has eleven static, crawlable pages: home, beginners, Gi, No-Gi, JitzJudo, timetable, find-us, coaches, first-bjj-class, gi-vs-no-gi and bjj-faq. Each page has a unique search title, description, canonical, full social metadata and a 1200 × 630 sharing image. All eleven include an enquiry form and links to the rest of the academy information.

A sitewide JSON-LD graph identifies the academy and website. Individual pages have page and breadcrumb nodes; class pages describe the service and free first-class offer. The coach directory exposes complete biographies in the initial HTML with Person nodes. The two training guides have visible attribution, publication/update dates and Article nodes.

The academy's supplied Google listing is linked from the business schema, contact details, directions and review links. Academy details are shared in `lib/site.ts`. The class timetable is shared in `lib/schedule.ts`; class-page session lists are derived from it. The owner confirmed that the website timetable remains authoritative: Wednesday 6pm JitzJudo and Friday 5:30pm beginners are retained even though the Google listing differs.

Twenty supplied source images have responsive WebP versions. Original source files stay available for regeneration. Run `python scripts/optimise_images.py` with Pillow when changing photography or `lib/page-catalog.json`; commit its generated image assets and manifest. Do not claim that image byte savings establish a Core Web Vitals pass.

`npm run build` exports the site and prepares clean route directories plus the XML image sitemap. Sitemap modification dates use relevant source history; they are omitted when history is unavailable. Root metadata uses the exporter's origin-only canonical spelling, and all other pages use their directory URLs. `npm run verify:seo` audits the rendered payload. The deployment runs lint, TypeScript, the build and this audit. A custom 404 is served with noindex and useful navigation.

Enquiries post to the supplied Formspree endpoint. Alongside page and class interest, the form captures whitelisted campaign parameters present on the submitting page and the referrer's origin. It does not store a marketing session or transmit a full referrer URL. This is form attribution, not an analytics dashboard or proof of email delivery.

## Owner actions

1. From the correct Search Console property, submit `https://originmkbjj.co.uk/sitemap.xml` and inspect the new pages. On 15 October, the connected browser could not access the domain property, so no submission or indexing request was made.
2. Reconcile Google Business Profile hours with the confirmed class timetable. Add the public academy phone number if one should be displayed; none was supplied.
3. Confirm one real enquiry reaches the intended Formspree notification inbox. Website markup and form navigation were verified without sending a message.
4. Track enquiries, attended trials and memberships by source. Compare Search Console page/query data over comparable 28-day periods. The search export is a baseline, not a forecast.
5. Keep membership pricing, hours, class formats, photos and coach information accurate as the academy changes. Ask students for honest reviews without incentives or prescribed ratings.

Google decides indexing and rankings. The goal of twenty monthly leads requires qualified local traffic and an effective response to enquiries as well as the site implementation.

## References

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/local-business
