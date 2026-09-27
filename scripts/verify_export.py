"""Check the actual GitHub Pages payload, including clean landing-page URLs."""
from pathlib import Path
import re
import sys

root = Path(sys.argv[1])
pages = ["", "beginners", "gi-jiu-jitsu", "no-gi", "jitzjudo"]
titles = set()
for path in pages:
    document = root / path / "index.html" if path else root / "index.html"
    html = document.read_text(encoding="utf-8")
    title = re.search(r"<title>(.*?)</title>", html)
    assert title, f"Missing title: {document}"
    assert title.group(1) not in titles, f"Duplicate title: {title.group(1)}"
    titles.add(title.group(1))
    canonical = f'https://originmkbjj.co.uk/{path}/' if path else 'https://originmkbjj.co.uk'
    assert f'<link rel="canonical" href="{canonical}"' in html, f"Wrong canonical: {document}"
    assert '<meta name="description" content="' in html, f"Missing description: {document}"
    assert '<meta property="og:image" content="' in html, f"Missing social image: {document}"
    assert '<h1' in html, f"Missing heading: {document}"
    assert 'REPLACE_WITH_FORM_ID' not in html, f"Broken form: {document}"
    assert 'Peter Olsson' not in html, f"Old coach visible: {document}"
    assert '<form id="enquiry-form" class="contact-form" action="https://formspree.io/f/mnpnowpn" method="POST"' in html, f"Missing enquiry form: {document}"
    assert 'name="email"' in html and 'name="message"' in html, f"Missing form fields: {document}"

for asset in ["favicon.svg", "favicon-48.png", "apple-touch-icon.png", "site.webmanifest", "brand/origin-logo.webp", "training/origin-no-gi-guard.webp", "training/origin-no-gi-roll.webp", "training/origin-gi-grappling.webp", "robots.txt", "sitemap.xml"]:
    assert (root / asset).is_file(), f"Missing asset: {asset}"

sitemap = (root / "sitemap.xml").read_text(encoding="utf-8")
for path in pages:
    assert f'https://originmkbjj.co.uk/{path + "/" if path else ""}' in sitemap
print(f"Verified {len(pages)} pages and essential search assets")
