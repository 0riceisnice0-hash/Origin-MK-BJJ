"""Prepare clean static URLs and a sitemap from the actual exported HTML."""
from pathlib import Path
from html.parser import HTMLParser
from datetime import datetime, timezone
import json
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET

PROJECT = Path(__file__).resolve().parents[1]
root = Path(sys.argv[1]).resolve()
catalog = json.loads((PROJECT / 'lib/page-catalog.json').read_text(encoding='utf-8'))
SITE = 'https://originmkbjj.co.uk'
NS = 'http://www.sitemaps.org/schemas/sitemap/0.9'
IMAGES = 'http://www.google.com/schemas/sitemap-image/1.1'
ET.register_namespace('', NS)
ET.register_namespace('image', IMAGES)
sitemap = ET.Element(f'{{{NS}}}urlset')

class Images(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'img' and attrs.get('alt') and attrs.get('src', '').startswith('/images/') and '/brand/' not in attrs['src']:
            self.images.append(attrs['src'])

for key, page in catalog.items():
    slug = page['path'].strip('/')
    if slug:
        source = root / f'{slug}.html'
        destination = root / slug / 'index.html'
        if source.is_file():
            destination.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, destination)
        assert destination.is_file(), f'Missing exported route: {destination}'
    else:
        destination = root / 'index.html'
    url = ET.SubElement(sitemap, f'{{{NS}}}url')
    ET.SubElement(url, f'{{{NS}}}loc').text = SITE + (page['path'] if slug else '')
    dependencies = ['app/layout.tsx', 'app/SiteLinks.tsx', 'app/LeadForm.tsx', 'lib/seo.ts', 'lib/site.ts', 'lib/page-catalog.json', 'lib/image-assets.json', 'app/Photo.tsx']
    dependencies += ['app/page.tsx', 'lib/coaches.ts', 'lib/schedule.ts'] if not slug else [f'app/{slug}/page.tsx']
    dependencies += ['app/ProgramPage.tsx', 'lib/schedule.ts'] if key in ['beginners', 'gi-jiu-jitsu', 'no-gi', 'jitzjudo'] else ['app/InfoPage.tsx']
    if key == 'coaches': dependencies.append('lib/coaches.ts')
    if key == 'timetable': dependencies.append('lib/schedule.ts')
    try:
        changed = subprocess.check_output(['git', 'status', '--porcelain', '--', *dependencies], cwd=PROJECT, text=True).strip()
        lastmod = datetime.now(timezone.utc).date().isoformat() if changed else subprocess.check_output(['git', 'log', '-1', '--format=%cs', '--', *dependencies], cwd=PROJECT, text=True).strip()
        if lastmod: ET.SubElement(url, f'{{{NS}}}lastmod').text = lastmod
    except (OSError, subprocess.CalledProcessError):
        pass  # Omit a modification date when source history cannot substantiate it.
    parser = Images()
    parser.feed(destination.read_text(encoding='utf-8'))
    for image in list(dict.fromkeys(parser.images))[:8]:
        entry = ET.SubElement(url, f'{{{IMAGES}}}image')
        ET.SubElement(entry, f'{{{IMAGES}}}loc').text = SITE + image

ET.indent(sitemap)
ET.ElementTree(sitemap).write(root / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
(root / 'robots.txt').write_text(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n', encoding='utf-8')
print(f'Prepared {len(catalog)} canonical routes and an image-enriched sitemap.')
