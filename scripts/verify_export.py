"""Audit rendered Pages HTML: crawl paths, metadata, structured data and assets."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from collections import Counter
import json
import re
import sys
import xml.etree.ElementTree as ET

root = Path(sys.argv[1]).resolve()
project = Path(__file__).resolve().parents[1]
site = 'https://originmkbjj.co.uk'
catalog = json.loads((project / 'lib/page-catalog.json').read_text(encoding='utf-8'))

class Document(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.title = ''; self.in_title = False; self.h1 = 0; self.canonicals = []
        self.meta = {}; self.images = []; self.links = []; self.ids = set(); self.schemas = []
        self.forms = []; self.fields = []; self.lang = None; self.buffer = None
        self.text = []; self.skip = 0; self.duplicates = []
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'html': self.lang = a.get('lang')
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.h1 += 1
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a.get('href'))
        if tag == 'meta': self.meta.setdefault(a.get('name') or a.get('property'), []).append(a.get('content', ''))
        if tag == 'img': self.images.append(a)
        if tag == 'a': self.links.append(a.get('href', ''))
        if tag == 'form': self.forms.append(a)
        if tag in ['input', 'select', 'textarea']: self.fields.append(a)
        if a.get('id'):
            if a['id'] in self.ids: self.duplicates.append(a['id'])
            self.ids.add(a['id'])
        if tag in ['script', 'style']: self.skip += 1
        if tag == 'script' and a.get('type') == 'application/ld+json': self.buffer = ''
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.buffer is not None:
            self.schemas.append(json.loads(self.buffer)); self.buffer = None
        if tag in ['script', 'style']: self.skip = max(0, self.skip - 1)
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.buffer is not None: self.buffer += data
        if not self.skip: self.text.append(data)

docs = {}; titles = set(); descriptions = set(); inbound = Counter(); links = 0
for key, page in catalog.items():
    path = page['path']
    file = root / path.strip('/') / 'index.html'
    assert file.is_file(), f'Missing clean route: {path}'
    doc = Document(file.read_text(encoding='utf-8')); docs[path] = doc
    assert doc.lang == 'en-GB' and doc.h1 == 1, f'Language or H1 failure: {path}'
    assert not doc.duplicates, f'Duplicate ids: {path}: {doc.duplicates}'
    canonical = site + (path if path != '/' else '')
    assert doc.canonicals == [canonical], f'Wrong/duplicate canonical: {path}: {doc.canonicals}'
    assert doc.title and doc.title not in titles, f'Missing/duplicate title: {path}'
    titles.add(doc.title)
    description = doc.meta.get('description', [])
    assert len(description) == 1 and description[0] not in descriptions, f'Missing/duplicate description: {path}'
    descriptions.add(description[0])
    assert not any('noindex' in value for value in doc.meta.get('robots', [])), f'Noindex page: {path}'
    assert doc.meta.get('og:url') == [canonical], f'Wrong OG URL: {path}'
    assert doc.meta.get('twitter:card') == ['summary_large_image'], f'Missing Twitter card: {path}'
    assert doc.meta.get('twitter:title') == doc.meta.get('og:title'), f'Inconsistent share title: {path}'
    assert doc.meta.get('og:image:width') == ['1200'] and doc.meta.get('og:image:height') == ['630'], f'Wrong social dimensions: {path}'
    for src in doc.meta.get('og:image', []) + doc.meta.get('twitter:image', []):
        assert src.startswith(site + '/social/') and (root / urlsplit(src).path.lstrip('/')).is_file(), f'Missing share image: {src}'
    nodes = [node for schema in doc.schemas for node in schema.get('@graph', [schema])]
    by_id = {node.get('@id'): node for node in nodes if node.get('@id')}
    assert site + '/#academy' in by_id and site + '/#website' in by_id, f'Business schema missing: {path}'
    assert by_id.get(canonical + '#webpage', {}).get('url') == canonical, f'Page schema URL wrong: {path}'
    assert any(node.get('@type') == 'BreadcrumbList' for node in nodes), f'Breadcrumb schema missing: {path}'
    if key in ['beginners', 'gi-jiu-jitsu', 'no-gi', 'jitzjudo']:
        services = [node for node in nodes if node.get('@type') == 'Service']
        assert len(services) == 1 and services[0]['provider']['@id'] == site + '/#academy', f'Class provider missing: {path}'
        assert services[0]['offers']['price'] == '0' and services[0]['offers']['priceCurrency'] == 'GBP', f'Incorrect trial offer: {path}'
    if key in ['first-bjj-class', 'gi-vs-no-gi']:
        assert any(node.get('@type') == 'Article' and node.get('mainEntityOfPage', {}).get('@id') == canonical + '#webpage' for node in nodes), f'Guide attribution schema missing: {path}'
    assert not any(node.get('@type') in ['Review', 'AggregateRating'] for node in nodes), f'Unsubstantiated review schema: {path}'
    assert any(f.get('action') == 'https://formspree.io/f/mnpnowpn' and f.get('method', '').lower() == 'post' for f in doc.forms), f'Missing enquiry path: {path}'
    fields = {field.get('name') for field in doc.fields}
    assert {'source_page','email','message','utm_source','referrer_origin'} <= fields, f'Missing enquiry fields: {path}'
    for image in doc.images:
        src = image.get('src', '')
        assert 'alt' in image and str(image.get('width', '')).isdigit() and str(image.get('height', '')).isdigit(), f'Alt or dimensions missing: {path}: {src}'
        assert src.startswith('/') and (root / src.lstrip('/')).is_file(), f'Broken image: {src}'
        for candidate in image.get('srcset', '').split(','):
            if candidate.strip(): assert (root / candidate.strip().split()[0].lstrip('/')).is_file(), f'Broken srcset: {candidate}'
    text = ' '.join(doc.text)
    assert len(re.findall(r'\w+', text)) >= 300, f'Unexpectedly empty page: {path}'
    assert 'Opening Monday 5 October' not in text and 'Doors open Monday 5 October' not in text, f'Stale launch text: {path}'
    if key == 'coaches': assert 'Peter Olsson' in text and len([n for n in nodes if n.get('@type') == 'Person']) == 4

for path, doc in docs.items():
    for href in doc.links:
        parsed = urlsplit(href)
        if parsed.scheme and not href.startswith(site + '/'): continue
        target = unquote(parsed.path) or path
        if not target.startswith('/'): continue
        links += 1
        assert target in docs, f'Broken internal link from {path}: {href}'
        if target != path: inbound[target] += 1
        if parsed.fragment: assert unquote(parsed.fragment) in docs[target].ids, f'Broken anchor from {path}: {href}'
for path in docs:
    assert path == '/' or inbound[path], f'Orphaned page: {path}'

ns = {'s':'http://www.sitemaps.org/schemas/sitemap/0.9','image':'http://www.google.com/schemas/sitemap-image/1.1'}
entries = ET.parse(root / 'sitemap.xml').findall('s:url', ns)
assert {u.findtext('s:loc', namespaces=ns) for u in entries} == {site + (path if path != '/' else '') for path in docs}, 'Sitemap/canonical mismatch'
for entry in entries:
    assert entry.findall('image:image', ns), 'Image sitemap entry missing'
    for image in entry.findall('image:image', ns):
        src = image.findtext('image:loc', namespaces=ns)
        assert src.startswith(site + '/') and (root / urlsplit(src).path.lstrip('/')).is_file(), f'Broken sitemap image: {src}'
assert f'Sitemap: {site}/sitemap.xml' in (root / 'robots.txt').read_text(), 'Robots sitemap declaration wrong'
error_page = Document((root / '404.html').read_text(encoding='utf-8'))
assert any('noindex' in value for value in error_page.meta.get('robots', [])) and not error_page.canonicals, '404 indexing configuration wrong'
print(f'PASS: {len(docs)} canonical pages; {links} internal links/anchors; metadata, JSON-LD, images, forms, sitemap and 404 verified.')
