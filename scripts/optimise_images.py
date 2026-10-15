"""Regenerate responsive assets and share cards from the supplied photography.

Run locally with Python + Pillow when changing images or page-catalog.json.
Generated files are committed; the deployment does not need Pillow.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont
import json
import textwrap

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
assets = {}
original_bytes = optimized_bytes = 0
for folder in ['training', 'coaches', 'brand']:
    for source in sorted((PUBLIC / folder).iterdir()):
        if source.suffix.lower() not in ['.jpg', '.jpeg', '.png', '.webp']:
            continue
        with Image.open(source) as opened:
            photo = ImageOps.exif_transpose(opened).convert('RGB')
            width, height = photo.size
            paths = []
            widths = sorted(set(min(width, size) for size in ([240, 480] if folder == 'brand' else [480, 900, 1400])))
            for size in widths:
                target = PUBLIC / 'images' / folder / f'{source.stem}-{size}.webp'
                target.parent.mkdir(parents=True, exist_ok=True)
                resized = photo.resize((size, round(height * size / width)), Image.Resampling.LANCZOS)
                resized.save(target, 'WEBP', quality=80, method=6)
                paths.append((size, '/' + target.relative_to(PUBLIC).as_posix()))
            # JPEG and WebP copies of the same logo map to one optimised file.
            assets['/' + source.relative_to(PUBLIC).as_posix()] = {
                'src': paths[-1][1], 'width': width, 'height': height,
                'srcSet': ', '.join(f'{path} {size}w' for size, path in paths),
            }
            original_bytes += source.stat().st_size
            optimized_bytes += (PUBLIC / paths[-1][1].lstrip('/')).stat().st_size

(ROOT / 'lib' / 'image-assets.json').write_text(json.dumps(assets, indent=2) + '\n', encoding='utf-8')

def font(size, bold=False):
    candidates = [Path('C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/georgia.ttf'), Path('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default(size=size)

catalog = json.loads((ROOT / 'lib' / 'page-catalog.json').read_text(encoding='utf-8'))
for key, page in catalog.items():
    with Image.open(PUBLIC / page['image'].lstrip('/')) as opened:
        card = ImageOps.fit(opened.convert('RGB'), (1200, 630)).convert('RGBA')
    shade = Image.new('RGBA', card.size)
    pixels = shade.load()
    for x in range(1200):
        alpha = int(242 - (max(0, x - 500) / 700) * 155)
        for y in range(630):
            pixels[x, y] = (8, 8, 8, alpha)
    card = Image.alpha_composite(card, shade).convert('RGB')
    draw = ImageDraw.Draw(card)
    draw.text((58, 55), 'ORIGIN MK BJJ', font=font(28, True), fill='#d9b85c')
    draw.line((58, 111, 138, 111), fill='#d9b85c', width=4)
    title = page['title'].split(' | ')[0]
    lines = textwrap.wrap(title, width=27)
    draw.multiline_text((58, 150), '\n'.join(lines), font=font(54), fill='white', spacing=12)
    draw.text((58, 515), 'BRAZILIAN JIU-JITSU · KILN FARM', font=font(22, True), fill='#d9b85c')
    draw.text((58, 558), 'originmkbjj.co.uk', font=font(22, True), fill='white')
    target = PUBLIC / 'social' / f'{key}.jpg'
    target.parent.mkdir(parents=True, exist_ok=True)
    card.save(target, 'JPEG', quality=88, optimize=True)
print(f'{len(assets)} responsive images: {original_bytes:,} source bytes -> {optimized_bytes:,} largest-variant bytes. {len(catalog)} share cards.')
