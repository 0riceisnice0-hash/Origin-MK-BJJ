# Origin MK BJJ: search and enquiry launch notes

## What is implemented

- Five indexable pages: the homepage plus distinct beginner, Gi, No-Gi and JitzJudo pages. Each has its own title, description, canonical URL, social image, visible copy and internal links.
- A sitemap, robots file, favicon, Apple icon and local business structured data.
- Canonical and sitemap URLs use the live custom domain. The build checks the actual exported files before deployment. GitHub Pages manages the domain in repository settings; a `CNAME` file is ignored by this Actions deployment.
- The contact form now posts to the owner-provided Formspree endpoint. Each page records its source and class interest. Email links remain as a fallback, with MAAT available for joining.

## Actions needed to support a goal of 20 leads per month

1. **Confirm HTTPS stays healthy.** On 27 September 2026, `https://originmkbjj.co.uk/` returned 200 with a valid certificate; HTTP and `www` redirected to it. Canonical and sitemap URLs now use HTTPS. Recheck after DNS or GitHub Pages setting changes.
2. **Test form delivery with the owner's inbox.** Submit one clearly marked test enquiry from the live site and confirm it appears in Formspree and the intended notification inbox. Configure Formspree's domain restriction for `originmkbjj.co.uk` if desired.
3. **Claim and complete the Google Business Profile.** Use the same academy name, address, category, website and current opening details as the site. Add real photos of the academy and classes, and keep hours accurate.
4. **Verify the site in Google Search Console.** Submit `sitemap.xml`, inspect all five URLs and monitor indexing and search queries.
5. **Measure leads.** Record every first-class enquiry, booked visit and attended visit by source. A simple monthly sheet is enough to start. Review which pages and queries bring enquiries, then improve the pages and calls to action based on actual results.
6. **Collect authentic proof.** After opening, add real academy photos, coach information, current class details and reviews with permission. Keep the timetable and coach roster current.

The 20-lead target is a business goal; rankings and lead volume cannot be guaranteed by metadata or extra pages alone.
