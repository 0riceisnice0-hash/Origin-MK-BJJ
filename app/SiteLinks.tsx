import { programmes, resources, academyAddress, mapsUrl } from '../lib/site';
/* oxlint-disable next/no-html-link-for-pages -- Static export uses normal crawlable navigation. */

export default function SiteLinks() {
  return <section className="site-resources"><div className="shell"><div className="resource-heading"><p className="eyebrow"><span /> Train at Origin</p><h2>Plan your next step.</h2><p>Brazilian Jiu-Jitsu in Kiln Farm, Milton Keynes. Your first class is free.</p></div><nav aria-label="Classes and academy information" className="resource-grid">{[...programmes.map(item => ({ ...item, description: 'Explore classes and book your first visit.' })), ...resources].map(item => <a href={item.href} key={item.href}><strong>{item.label}</strong><span>{item.description}</span></a>)}</nav><div className="resource-contact"><address>Origin MK BJJ · {academyAddress}</address><a href={mapsUrl} target="_blank" rel="noreferrer">View our Google listing ↗</a><a href="mailto:originmkbjj@gmail.com">originmkbjj@gmail.com</a></div></div></section>;
}
