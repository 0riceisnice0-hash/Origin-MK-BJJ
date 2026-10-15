import { pageGraph, type PageDetails } from '../lib/seo';

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export default function PageSchema({ type = 'WebPage', extra = [], ...page }: PageDetails & { type?: string; extra?: Record<string, unknown>[] }) {
  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': [...pageGraph(page, type), ...extra] }} />;
}
