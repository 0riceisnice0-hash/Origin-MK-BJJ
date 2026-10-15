import { ArrowDownRight, ArrowUpRight, CalendarDays, Clock3, Mail, ShieldCheck, Sparkles, Users } from 'lucide-react';
import CoachShowcase from './CoachShowcase';
import Timetable from './Timetable';
import LeadForm from './LeadForm';
import { mapsUrl } from '../lib/site';
import { coaches } from '../lib/coaches';
import { schedule } from '../lib/schedule';
import { pageMetadata } from '../lib/seo';
import pageCatalog from '../lib/page-catalog.json';
import PageSchema from './PageSchema';
import Photo from './Photo';
import SiteLinks from './SiteLinks';
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages -- Static GitHub Pages export uses optimized supplied assets and plain links. */

export const dynamic = 'force-static';
export const metadata = pageMetadata(pageCatalog.home);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;


const principles = [['Position before submission', 'Control creates opportunity.'], ['Technique before force', 'Efficiency beats unnecessary strength.'], ['Intelligence before chaos', 'Understand the problem before you solve it.'], ['Pressure creates reaction', 'Make them respond—then use the opening.']];

const trainingImages = [
  { src: '/training/origin-no-gi-roll.webp', alt: 'Alan and Ricki practising No-Gi grappling at Origin' },
  { src: '/training/no-gi-grappling.jpg', alt: 'Students training No-Gi grappling on the mats' },
  { src: '/training/gi-standup.jpg', alt: 'Gi students working on standing grips' },
  { src: '/training/gi-groundwork.jpg', alt: 'Gi students practising positional control' },
];

export default function Home() {
  return <main id="top">
    <PageSchema path="/" title="Brazilian Jiu-Jitsu in Milton Keynes" description="Beginner, Gi, No-Gi and JitzJudo classes at Origin MK BJJ in Kiln Farm." image="/training/origin-no-gi-guard.webp" />
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="launch-bar"><div className="shell launch-inner"><span><Sparkles size={14} /> Your first class is free.</span><a href="#location">Brazilian Jiu-Jitsu · Kiln Farm, MK</a></div></div>
    <header className="site-header"><div className="shell nav-wrap"><a className="brand" href="#top" aria-label="Origin MK BJJ home"><Photo className="brand-logo" sizes="156px" src={asset('/brand/origin-logo.webp')} alt="Origin Brazilian Jiu-Jitsu Academy MK" /></a><nav aria-label="Main navigation"><a href="/beginners/">Beginners</a><a href="/gi-jiu-jitsu/">Gi</a><a href="/no-gi/">No-Gi</a><a href="/jitzjudo/">JitzJudo</a><a href="/timetable/">Timetable</a><a href="/coaches/">Coaches</a><a href="/find-us/">Find us</a></nav><a className="nav-cta" href="#contact">Get in touch <ArrowDownRight size={17} /></a></div></header>

    <div id="content">
      <section className="hero">
        <div className="hero-lines" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Milton Keynes · Gi · No-Gi · JitzJudo</p>
            <h1 className="local-hero-title">Brazilian<br />Jiu-Jitsu in<br /><em>Milton Keynes.</em></h1>
            <p className="hero-lead">Train BJJ at Origin in Kiln Farm, Milton Keynes. Beginner, Gi, No-Gi and JitzJudo classes for new students, experienced grapplers and competitors. Learn. Improve. Evolve.</p>
            <div className="hero-actions"><a className="button button-gold" href="#timetable">Find your class <CalendarDays size={19} /></a><a className="text-link" href="#coaches">Meet the coaches <ArrowDownRight size={18} /></a></div>
            <div className="hero-proof" aria-label="Academy highlights"><div><strong>6 days</strong><span>of training</span></div><div><strong>4 coaches</strong><span>one complete programme</span></div><div><strong>All levels</strong><span>beginners welcome</span></div></div>
            <figure className="hero-mobile-photo"><Photo src={asset('/training/origin-no-gi-guard.webp')} alt="Alan and Ricki training No-Gi at Origin MK BJJ" loading="eager" fetchPriority="high" width="1800" height="1352" /></figure>
          </div>
          <div className="hero-visual">
            <figure><Photo src={asset('/training/origin-no-gi-guard.webp')} alt="Alan and Ricki training No-Gi guard at Origin MK BJJ" width="1800" height="1352" fetchPriority="high" /></figure>
            <div className="hero-card"><span>Train in Kiln Farm</span><strong>Unit 8, Potters Lane<br />Milton Keynes</strong><a href="#location">Get directions <ArrowUpRight size={15} /></a></div>
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
          </div>
        </div>
      </section>
      <div className="hero-ticker" aria-hidden="true"><div className="ticker-desktop">GI <span>✦</span> NO-GI <span>✦</span> JITZJUDO <span>✦</span> OPEN MAT <span>✦</span> BEGINNERS <span>✦</span> GI <span>✦</span> NO-GI</div><div className="ticker-mobile"><span>GI</span><span>NO-GI</span><span>JITZJUDO</span><span>OPEN MAT</span></div></div>

      <section className="training-section" id="training">
        <div className="shell training-layout">
          <div className="training-intro">
            <div>
              <p className="eyebrow"><span /> Come and train with us</p>
              <h2>Curious about<br /><em>Brazilian Jiu-Jitsu?</em></h2>
            </div>
            <div className="training-copy">
              <p>Come and experience Origin MK BJJ.</p><p className="google-proof-link"><a href={mapsUrl} target="_blank" rel="noreferrer">Read about the academy and see our Google reviews ↗</a></p>
              <p>Whether you’re a complete beginner or an experienced grappler, everyone is welcome. Great training, a friendly atmosphere and a strong community—right here in Milton Keynes.</p>
              <div className="training-offer"><strong>Your first class is free.</strong><span>No pressure. Just turn up ready to learn.</span></div>
              <div className="training-actions"><a className="button button-gold" href="#timetable">Choose a class <CalendarDays size={19} /></a><a className="text-link" href="#location">Find the academy <ArrowDownRight size={18} /></a></div>
            </div>
          </div>
          <div className="training-gallery">
            {trainingImages.map((image, index) => <figure className={`training-shot training-shot-${index + 1}`} key={image.src}><Photo src={asset(image.src)} alt={image.alt} loading="lazy" /></figure>)}
          </div>
        </div>
      </section>

      <section className="section schedule-section" id="timetable">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow dark"><span /> Weekly timetable</p><h2>More mat time.<br /><em>More ways to train.</em></h2></div>
            <div className="section-intro"><p>Morning person? Lunch-break grappler? Evening regular? Choose the sessions that fit your week. Gi and No-Gi alternate where shown.</p><span><Clock3 size={17} /> Check MAAT for the latest class updates</span></div>
          </div>
          <Timetable schedule={schedule} logoSrc={asset('/brand/origin-logo.webp')} />
          <p className="timetable-page-link"><a href="/timetable/">View the complete BJJ class timetable and session guide →</a></p><div className="maat-band"><div className="maat-explainer"><span className="maat-label">MAAT</span><div><p className="maat-kicker">The academy app</p><h3>Book classes. Get club updates. Track your training.</h3><p>MAAT is the app Origin uses for membership and day-to-day training. Open the link, join the Origin MK BJJ gym, then use it to manage your sessions in one place.</p><ul><li>Join the academy</li><li>Book classes</li><li>See announcements</li><li>Track attendance</li></ul></div></div><a className="maat-status" href="https://maat-app.link/Gxij8SlZe6b" target="_blank" rel="noreferrer">Open MAAT and join <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="coaches-section" id="coaches"><div className="shell"><div className="section-heading light"><div><p className="eyebrow"><span /> Four coaches · one team</p><h2>Different styles.<br /><em>One standard.</em></h2></div><p>Select a coach to explore the experience behind Origin’s Gi, No-Gi and JitzJudo programme.</p></div><figure className="team-photo"><Photo src={asset('/training/origin-no-gi-roll.webp')} alt="Alan and Ricki training together at Origin" loading="lazy" width="1790" height="1376" /><figcaption><span>On the mats at Origin</span><strong>Training together.<br />Teaching with purpose.</strong><p>Alan and Ricki working through No-Gi positions together.</p></figcaption></figure><CoachShowcase coaches={coaches} basePath={basePath} /><p className="coach-directory-link"><a href="/coaches/">Read about all four BJJ coaches and their backgrounds →</a></p></div></section>

      <section className="approach-section" id="approach"><div className="shell approach-stage"><div className="approach-visual"><Photo src={asset('/training/origin-gi-grappling.webp')} alt="Origin athletes practising a Gi grappling exchange" loading="lazy" /><div className="approach-copy"><p className="eyebrow"><span /> The Origin approach</p><h2>Problem-solving<br />under pressure.</h2><p className="approach-lead">We teach the decisions behind the technique—so it still works when someone is resisting.</p></div></div><div className="approach-detail"><p className="approach-statement">Position, movement, timing and pressure are taught as one connected system—not a collection of isolated moves.</p><div className="principles">{principles.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div><div className="association"><ShieldCheck size={26} /><div><span>Proudly under</span><strong>The Nick Brooks Association</strong><p>A respected lineage and technical foundation connecting Origin to the wider UK BJJ community.</p></div></div></div></div></section>

      <section className="beginner-section" id="first-class"><div className="shell beginner-grid"><div><p className="eyebrow"><span /> Your first class</p><h2><span>You don’t need to</span><span>be fit before</span><span>you begin.</span></h2></div><figure className="beginner-photo"><Photo src={asset('/training/gi-partners.jpg')} alt="Two training partners practising Gi Jiu-Jitsu" loading="lazy" /></figure><div><p>No previous experience. No need to already know the rules. Turn up willing to learn and our coaches will help you build confidence one session at a time.</p><ul><li><Users size={19} /> Beginner sessions Tuesday and Friday</li><li><ShieldCheck size={19} /> Controlled, respectful training</li><li><Sparkles size={19} /> Progress at your own pace</li></ul><a className="button button-gold" href="/beginners/">Plan your first visit <ArrowDownRight size={18} /></a></div></div></section>
      <section className="home-inclusion"><div className="shell"><ShieldCheck size={32} /><div><p className="eyebrow dark"><span /> Train with confidence</p><h2>A safe and inclusive academy</h2><p>Origin places a strong emphasis on a safe, inclusive and professional training environment. Coaches hold safeguarding and first-aid qualifications and bring adaptive and children’s coaching experience to help make training accessible to different abilities and needs. Tell us about any adjustments that would help before your visit.</p></div></div></section>
      <section className="programme-links"><div className="shell"><p className="eyebrow dark"><span /> Explore the programme</p><h2>Find your way onto the mat.</h2><div className="programme-grid"><a href="/beginners/"><strong>Beginners</strong><span>Your first class, what to bring and how to start →</span></a><a href="/gi-jiu-jitsu/"><strong>Gi Jiu-Jitsu</strong><span>Grips, positions and technical control →</span></a><a href="/no-gi/"><strong>No-Gi</strong><span>Movement, wrestling and submission chains →</span></a><a href="/jitzjudo/"><strong>JitzJudo</strong><span>Standing to ground, as one connected game →</span></a></div></div></section>

      <section className="location-section" id="location"><div className="shell location-grid"><div className="location-visual"><iframe title="Map showing Origin MK BJJ at Unit 8 Potters Lane, Kiln Farm" src="https://www.google.com/maps?q=Unit+8,+Potters+Lane,+Kiln+Farm,+Milton+Keynes+MK11+3HE&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-copy"><p className="eyebrow dark"><span /> Our new home</p><h2>Origin starts here.</h2><p className="address">Unit 8, Potters Lane<br />Kiln Farm<br />Milton Keynes MK11 3HE</p><p>Find Origin MK BJJ at Unit 8 on Potters Lane in Kiln Farm, Milton Keynes. Allow a little extra time on your first visit to find the unit and get settled before class.</p><a className="button button-dark" href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={18} /></a></div></div></section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-intro"><p className="eyebrow"><span /> Contact Origin</p><h2>Questions before<br />your first class?</h2></div>
          <div className="contact-copy">
            <p>Ask us about classes, getting started or visiting the new academy. We’ll get back to you as soon as we can.</p>
            <p className="contact-note">Tell us which class interests you and when you would like to visit. Your first class is free.</p>
            <LeadForm source="Homepage" />
            <a className="contact-email" href="mailto:originmkbjj@gmail.com"><Mail size={20} /><span><small>Or email us directly</small><strong>originmkbjj@gmail.com</strong></span><ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>
    </div>

    <SiteLinks /><footer><div className="shell footer-main"><a className="brand" href="#top"><Photo className="brand-logo" sizes="156px" src={asset('/brand/origin-logo.webp')} alt="Origin Brazilian Jiu-Jitsu Academy MK" loading="lazy" /></a><p>Strong fundamentals. Technical precision.<br />Progressive development. Pressure-tested Jiu-Jitsu.</p><div><a href="/beginners/">Beginners</a><a href="/gi-jiu-jitsu/">Gi</a><a href="/no-gi/">No-Gi</a><a href="/jitzjudo/">JitzJudo</a><a href="#timetable">Timetable</a><a href="#location">Find us</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 Origin MK BJJ</span><span>Proudly under The Nick Brooks Association</span><a href="#top">Back to top ↑</a></div></footer>
    <div className="mobile-bar"><a href="#timetable"><CalendarDays size={18} /> Classes</a><a href="https://maat-app.link/Gxij8SlZe6b" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> Join</a><a href="#contact"><Mail size={18} /> Contact</a></div>
  </main>;
}
