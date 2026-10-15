import type { ReactNode } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { programmes } from '../lib/site';
import type { PageDetails } from '../lib/seo';
import Photo from './Photo';
import PageSchema from './PageSchema';
import Breadcrumbs from './Breadcrumbs';
import SiteLinks from './SiteLinks';
import LeadForm from './LeadForm';
/* oxlint-disable next/no-html-link-for-pages -- Normal anchors for the static deployment. */

export default function InfoPage({ page, label, lead, children, type, extra, guide = false }: { page: PageDetails; label: string; lead: string; children: ReactNode; type?: string; extra?: Record<string, unknown>[]; guide?: boolean }) {
  return <main className="information-page">
    <PageSchema {...page} type={type} extra={extra} />
    <a className="skip-link" href="#page-content">Skip to content</a>
    <header className="programme-header"><div className="shell programme-nav"><a href="/" aria-label="Origin MK BJJ home"><Photo src="/brand/origin-logo.webp" alt="Origin Brazilian Jiu-Jitsu Academy" sizes="155px" /></a><nav aria-label="Main navigation"><a href="/">Home</a>{programmes.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="/timetable/">Timetable</a></nav><a className="button button-gold" href="#enquiry-form">Try a class <ArrowUpRight size={17} /></a></div></header>
    <div id="page-content"><Breadcrumbs title={label} />
      <section className="information-hero"><div className="shell"><div><p className="eyebrow"><span /> {label} · Origin MK BJJ</p><h1>{page.title.split(' | ')[0]}</h1><p>{lead}</p>{guide && <p className="guide-byline">By Origin MK BJJ · Updated <time dateTime="2026-10-15">15 October 2026</time></p>}<a className="button button-gold" href="#enquiry-form">Ask about your free first class <ArrowUpRight size={18} /></a></div><figure><Photo src={page.image} alt={`${label} at Origin MK BJJ in Milton Keynes`} fetchPriority="high" sizes="(max-width: 760px) 100vw, 45vw" /></figure></div></section>
      <div className="information-content shell">{children}</div>
      <section className="programme-contact"><div className="shell"><div><p className="eyebrow"><span /> Your first class is free</p><h2>Let’s get you started.</h2><p>Tell us what you would like to train and which day suits you. We can help you choose a first session.</p><p className="programme-contact-email"><Mail size={17} /><a href="mailto:originmkbjj@gmail.com">originmkbjj@gmail.com</a></p></div><LeadForm source={page.path} /></div></section>
    </div><SiteLinks /><footer className="information-footer"><div className="shell"><a href="/">Origin MK BJJ</a><span>© 2026 Origin MK BJJ</span><a href="/#contact">Contact the academy</a></div></footer>
  </main>;
}
