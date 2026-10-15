import type { Metadata } from 'next';
import { businessId, mapsUrl, siteUrl, websiteId } from './site';

export type PageDetails = { path: string; title: string; description: string; image: string };
// The installed exporter serializes an origin-only metadata URL without its slash.
// Match that root spelling across the sitemap, Open Graph and page graph.
export const canonicalUrl = (path: string) => `${siteUrl}${path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}/`}`;
export const socialImage = (path: string) => `${siteUrl}/social/${path.replace(/^\/+|\/+$/g, '') || 'home'}.jpg`;

export function pageMetadata(page: PageDetails): Metadata {
  const title = `${page.title} | Origin MK BJJ`;
  return {
    title: { absolute: title }, description: page.description,
    alternates: { canonical: canonicalUrl(page.path) },
    openGraph: { type: 'website', locale: 'en_GB', siteName: 'Origin MK BJJ', url: canonicalUrl(page.path), title, description: page.description, images: [{ url: socialImage(page.path), width: 1200, height: 630, alt: `${page.title} — Origin MK BJJ` }] },
    twitter: { card: 'summary_large_image', title, description: page.description, images: [socialImage(page.path)] },
  };
}

export const academyGraph = [
  {
    '@type': 'HealthClub', '@id': businessId,
    name: 'Origin MK BJJ', alternateName: ['Origin Brazilian Jiu-Jitsu Academy', 'Origin MK BJJ academy Milton Keynes'],
    url: `${siteUrl}/`, description: 'Brazilian Jiu-Jitsu academy in Kiln Farm, Milton Keynes, offering beginner BJJ, Gi, No-Gi and JitzJudo classes.',
    email: 'originmkbjj@gmail.com',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/brand/origin-logo.webp`, width: 1561, height: 1008 },
    image: [`${siteUrl}/training/origin-no-gi-guard.webp`, `${siteUrl}/training/origin-no-gi-roll.webp`],
    address: { '@type': 'PostalAddress', streetAddress: 'Unit 8, Potters Lane, Kiln Farm', addressLocality: 'Milton Keynes', addressRegion: 'Buckinghamshire', postalCode: 'MK11 3HE', addressCountry: 'GB' },
    areaServed: { '@type': 'City', name: 'Milton Keynes' }, hasMap: mapsUrl, sameAs: [mapsUrl],
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Brazilian Jiu-Jitsu classes', itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beginner BJJ', url: `${siteUrl}/beginners/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gi Brazilian Jiu-Jitsu', url: `${siteUrl}/gi-jiu-jitsu/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'No-Gi Jiu-Jitsu', url: `${siteUrl}/no-gi/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'JitzJudo', url: `${siteUrl}/jitzjudo/` } },
    ] },
  },
  { '@type': 'WebSite', '@id': websiteId, name: 'Origin MK BJJ', alternateName: 'Origin Brazilian Jiu-Jitsu Academy', url: `${siteUrl}/`, inLanguage: 'en-GB', publisher: { '@id': businessId } },
];

export function pageGraph(page: PageDetails, type = 'WebPage') {
  const url = canonicalUrl(page.path);
  return [
    { '@type': type, '@id': `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: 'en-GB', isPartOf: { '@id': websiteId }, about: { '@id': businessId }, publisher: { '@id': businessId }, primaryImageOfPage: { '@type': 'ImageObject', url: `${siteUrl}${page.image}` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` }, ...(page.path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: page.title, item: url }])] },
  ];
}
