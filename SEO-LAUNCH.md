# Origin MK BJJ: search and enquiry launch notes

## What is implemented

- Five indexable pages: the homepage plus distinct beginner, Gi, No-Gi and JitzJudo pages. Each has its own title, description, canonical URL, social image, visible copy and internal links.
- A sitemap, robots file, favicon, Apple icon and local business structured data.
- The custom domain is included in the GitHub Pages build output. The build checks the actual exported files before deployment.
- The broken placeholder form was removed. Enquiries currently go to `originmkbjj@gmail.com` through email links, with MAAT available for joining.

## Actions needed to support a goal of 20 leads per month

1. **Fix HTTPS.** On 27 September 2026, `https://originmkbjj.co.uk/` presented a certificate that did not match the domain. Check GitHub Pages custom domain and DNS settings, wait for a valid certificate, then enable **Enforce HTTPS**. After that, change `siteUrl` in `lib/site.ts` and URLs in `public/sitemap.xml` and `public/robots.txt` to `https://`, and redeploy. Until then, the canonical URLs use the reachable HTTP domain.
2. **Connect a reliable enquiry form or booking endpoint.** Add the real form endpoint only after testing a submission and receipt. Email links work only for visitors with a configured mail app, so a hosted form or booking flow is important for conversion.
3. **Claim and complete the Google Business Profile.** Use the same academy name, address, category, website and current opening details as the site. Add real photos of the academy and classes, and keep hours accurate.
4. **Verify the site in Google Search Console.** Submit `sitemap.xml`, inspect all five URLs and monitor indexing and search queries.
5. **Measure leads.** Record every first-class enquiry, booked visit and attended visit by source. A simple monthly sheet is enough to start. Review which pages and queries bring enquiries, then improve the pages and calls to action based on actual results.
6. **Collect authentic proof.** After opening, add real academy photos, coach information, current class details and reviews with permission. Keep the timetable and coach roster current.

The 20-lead target is a business goal; rankings and lead volume cannot be guaranteed by metadata or extra pages alone.
