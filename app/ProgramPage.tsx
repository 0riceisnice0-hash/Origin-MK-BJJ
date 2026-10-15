import { ArrowUpRight, CalendarDays, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { businessId, mapsUrl, programmes } from '../lib/site';
import { canonicalUrl, pageMetadata } from '../lib/seo';
import catalog from '../lib/page-catalog.json';
import { timesForProgramme } from '../lib/schedule';
import PageSchema from './PageSchema';
import Breadcrumbs from './Breadcrumbs';
import SiteLinks from './SiteLinks';
import Photo from './Photo';
import LeadForm from './LeadForm';
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages -- Static GitHub Pages export uses optimized supplied assets and plain links. */

type Programme = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lead: string;
  image: string;
  imageAlt: string;
  introduction: string[];
  benefits: { title: string; text: string }[];
  firstVisit: string;
  faqs: { question: string; answer: string }[];
};

export const programmeContent: Record<string, Programme> = {
  beginners: {
    slug: 'beginners', title: 'Beginner BJJ in Milton Keynes', metaTitle: 'Beginner BJJ Classes in Milton Keynes',
    description: 'Start Brazilian Jiu-Jitsu at Origin MK BJJ in Kiln Farm, Milton Keynes. Beginner sessions Tuesday and Friday. First class free; learn what to bring and what to expect.',
    eyebrow: 'Start here', lead: 'Your first step onto the mats can be simple. Join a beginner session, learn the basics with a coach and go at your own pace.',
    image: '/training/gi-partners.jpg', imageAlt: 'Origin training partners practising Brazilian Jiu-Jitsu in the Gi',
    introduction: [
      'You do not need previous martial arts experience or a particular level of fitness. We introduce positions, movement and safe training habits before asking you to put techniques together.',
      'Your first class is free. Send us an enquiry before you come so we can help you choose a session and tell you what to expect on the day.'
    ],
    benefits: [
      { title: 'Learn the essentials', text: 'Build a foundation in movement, control, escapes and simple submissions.' },
      { title: 'Train with guidance', text: 'Coaches explain the purpose behind each technique and adapt the pace to the group.' },
      { title: 'Find your people', text: 'Train with partners in a respectful, welcoming academy environment.' },
    ],
    firstVisit: 'Wear comfortable sports clothes without zips or jewellery. Bring water and flip-flops for walking off the mats. Arrive a little early and let a coach know it is your first class.',
    faqs: [
      { question: 'Do I need a Gi for my first class?', answer: 'No. Ask us which beginner session suits you. Comfortable sports clothing is enough for a No-Gi introduction.' },
      { question: 'Can I try a class before joining?', answer: 'Yes. Your first class at Origin MK BJJ is free.' },
      { question: 'Where is the academy?', answer: 'Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE.' },
    ],
  },
  'gi-jiu-jitsu': {
    slug: 'gi-jiu-jitsu', title: 'Gi Brazilian Jiu-Jitsu in Milton Keynes', metaTitle: 'Gi Brazilian Jiu-Jitsu Classes in Milton Keynes',
    description: 'Train Gi Brazilian Jiu-Jitsu at Origin MK BJJ in Milton Keynes. Learn grips, positional control, takedowns and submissions in a welcoming academy.',
    eyebrow: 'Train in the Gi', lead: 'Use grips, movement and timing to build control from standing exchanges through to submissions on the ground.',
    image: '/training/gi-groundwork.jpg', imageAlt: 'Origin students practising Gi Brazilian Jiu-Jitsu groundwork',
    introduction: [
      'Gi Jiu-Jitsu gives you a technical framework for controlling distance, creating angles and working with the jacket and trousers. Classes link standing skills to guard, passing, control and submissions.',
      'You can join whether you are new to grappling or already train elsewhere. Our coaches emphasise understanding and pressure testing so techniques hold up with a resisting partner.'
    ],
    benefits: [
      { title: 'Grips and balance', text: 'Learn to use grip fighting, posture and movement to shape the exchange.' },
      { title: 'Connected positions', text: 'Move from takedown and guard work to passing, control and submission.' },
      { title: 'Technical progress', text: 'Improve through deliberate practice with partners at different levels.' },
    ],
    firstVisit: 'If you already own a Gi, bring it. If you are trying BJJ for the first time, email us before coming and we will point you to the best session. Bring water and arrive early enough to get settled.',
    faqs: [
      { question: 'Is Gi BJJ suitable for beginners?', answer: 'Yes. We can help you choose a beginner-friendly class and explain the basic positions as you go.' },
      { question: 'How is Gi different from No-Gi?', answer: 'The Gi allows grips on the jacket and trousers, which changes control, pace and submission options. Many students enjoy training both.' },
    ],
  },
  'no-gi': {
    slug: 'no-gi', title: 'No-Gi Jiu-Jitsu in Milton Keynes', metaTitle: 'No-Gi Jiu-Jitsu Classes in Milton Keynes',
    description: 'Train No-Gi BJJ in Milton Keynes with Origin MK BJJ. Explore wrestling entries, guard passing, transitions and submissions. Beginner and experienced sessions.',
    eyebrow: 'No-Gi grappling', lead: 'A fast, technical game built on movement, positioning and clear decisions under pressure.',
    image: '/training/origin-no-gi-guard.webp', imageAlt: 'Alan and Ricki practising No-Gi guard at Origin MK BJJ',
    introduction: [
      'No-Gi training removes jacket and trouser grips. You learn to control with frames, underhooks, head position, pressure and timing. Sessions connect takedowns, guard work, passing, scrambles and submissions.',
      'Ricki’s Thursday class focuses on a modern, adaptable No-Gi game. Beginners can start with Tuesday fundamentals and build confidence before joining more open rounds.'
    ],
    benefits: [
      { title: 'Movement and entries', text: 'Understand distance, wrestling ties and how to enter a position safely.' },
      { title: 'Chain techniques', text: 'Connect one attack to the reaction it creates, then choose the next option.' },
      { title: 'Train across levels', text: 'Practise with partners who help you solve problems, not just collect moves.' },
    ],
    firstVisit: 'Wear a rash guard or close-fitting sports top with shorts or leggings that have no pockets or zips. Bring water and flip-flops for off the mats.',
    faqs: [
      { question: 'Do I need experience for No-Gi?', answer: 'No. Tuesday’s beginner session is a good place to start.' },
      { question: 'What should I wear?', answer: 'Comfortable sports clothing without zips or jewellery. A rash guard and grappling shorts are useful but not required for your first session.' },
    ],
  },
  jitzjudo: {
    slug: 'jitzjudo', title: 'JitzJudo in Milton Keynes', metaTitle: 'JitzJudo and Judo for BJJ in Milton Keynes',
    description: 'Explore JitzJudo at Origin MK BJJ in Milton Keynes. Alan connects Judo takedowns, Gi grips, Brazilian Jiu-Jitsu control and submissions.',
    eyebrow: 'Standing to ground', lead: 'Alan’s JitzJudo sessions connect Judo and Brazilian Jiu-Jitsu into one practical grappling system.',
    image: '/training/gi-standup.jpg', imageAlt: 'Gi training partners working on standing grips and takedown entries',
    introduction: [
      'JitzJudo develops the transition from standing grips and balance breaking to takedowns, positional control and submissions. It is taught as one connected sequence rather than separate standing and ground phases.',
      'Alan brings a Judo black belt, a BJJ black belt and decades of coaching experience to the programme. The goal is to understand where each movement leads and how to adapt when your partner reacts.'
    ],
    benefits: [
      { title: 'Stand with purpose', text: 'Learn gripping, posture, off-balancing and takedown mechanics.' },
      { title: 'Own the transition', text: 'Follow the throw or takedown into a stable, useful position.' },
      { title: 'Complete the sequence', text: 'Connect control to a submission or another positional advance.' },
    ],
    firstVisit: 'Bring a Gi if you have one. Email us before your first session if you need guidance on kit or which class best suits your experience.',
    faqs: [
      { question: 'Is JitzJudo a Judo class or a BJJ class?', answer: 'It connects Judo standing skills and Brazilian Jiu-Jitsu ground work, with an emphasis on the transition between them.' },
      { question: 'Can a beginner join?', answer: 'Contact us with your experience and we will help you choose a suitable starting session.' },
    ],
  },
};

export function programmeMetadata(key: keyof typeof programmeContent) {
  return pageMetadata(catalog[key as keyof typeof catalog]);
}

const lessonGuidance: Record<string, { title: string; paragraphs: string[] }> = {
  beginners: { title: 'Build habits you can use in every class', paragraphs: [
    'Beginner BJJ starts with learning to recognise positions and move with a partner. You practise the foundations of control and escape, ask questions and repeat a small number of ideas until they make sense. The aim is to understand the task, not to rush through a catalogue of techniques.',
    'Tell the coach about your experience before joining rounds. They can explain the training format and help you work at an appropriate pace. Tuesday’s No-Gi fundamentals session is a clear starting point; ask us which Friday session and kit suit your first visit.'
  ] },
  'gi-jiu-jitsu': { title: 'Make your grips lead somewhere', paragraphs: [
    'In the Gi, a useful grip changes your partner’s posture or limits a movement. We connect that control to the next decision: breaking balance while standing, creating an angle from guard or removing a frame while passing. A grip has a purpose within the position.',
    'Coached practice gives you time to work through a sequence before testing it against resistance. Bring questions about positions you meet in training, and ask the coach how to connect your standing work, guard, passing and submissions. You can complement this with No-Gi or JitzJudo sessions.'
  ] },
  'no-gi': { title: 'Keep control through the transition', paragraphs: [
    'Without a jacket to hold, controlling the line of the hips and shoulders becomes central. No-Gi sessions explore how body position, hooks, frames and pressure let you maintain an advantage while your partner moves. Speed alone is not a substitute for understanding the position.',
    'Ricki links entries, passing, submissions and scrambles into a connected game. Beginners build the base for that work in fundamentals sessions. Tell us what you have trained before and we can suggest a route from introductory drills to more open practice.'
  ] },
  jitzjudo: { title: 'Follow the takedown into useful control', paragraphs: [
    'A standing exchange is the beginning of a sequence. JitzJudo asks what happens after balance is broken: where you land, which grips remain useful and how you establish a position before looking for a submission. This gives the standing work a clear purpose for BJJ.',
    'Alan combines his Judo and BJJ background to teach that connection. If you are new to standing practice, speak to the coach about the starting point and session format before joining. You can build familiarity with the Gi alongside positional work in the wider academy programme.'
  ] },
};

export default function ProgramPage({ programme }: { programme: Programme }) {
  const otherProgrammes = programmes.filter(item => item.href !== `/${programme.slug}/`);
  const page = catalog[programme.slug as keyof typeof catalog];
  const serviceSchema = {
    '@type': 'Service', '@id': `${canonicalUrl(page.path)}#class`,
    name: programme.title, description: programme.description, serviceType: programme.title,
    url: canonicalUrl(page.path), provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: 'Milton Keynes' },
    offers: { '@type': 'Offer', name: 'Free first class', price: '0', priceCurrency: 'GBP', description: 'Your first class at Origin MK BJJ is free. Enquire to arrange a suitable session.', url: `${canonicalUrl(page.path)}#enquiry-form` },
  };
  const guidance = lessonGuidance[programme.slug];
  return <main className="programme-page">
    <PageSchema {...page} extra={[serviceSchema]} />
    <a className="skip-link" href="#programme-content">Skip to content</a>
    <header className="programme-header"><div className="shell programme-nav"><a href="/" aria-label="Origin MK BJJ home"><Photo src="/brand/origin-logo.webp" alt="Origin Brazilian Jiu-Jitsu Academy" sizes="155px" /></a><nav aria-label="Main navigation"><a href="/">Home</a>{programmes.map(item => <a key={item.href} href={item.href} aria-current={item.href === `/${programme.slug}/` ? 'page' : undefined}>{item.label}</a>)}<a href="/timetable/">Timetable</a></nav><a className="button button-gold" href="#enquiry-form">Try a class <ArrowUpRight size={17} /></a></div></header>
    <div id="programme-content"><Breadcrumbs title={programme.title} />
      <section className="programme-hero"><div className="shell programme-hero-grid"><div><p className="eyebrow"><span /> {programme.eyebrow} · Origin MK BJJ</p><h1>{programme.title}</h1><p className="programme-lead">{programme.lead}</p><div className="programme-actions"><a className="button button-gold" href="#enquiry-form">Ask about a free first class <ArrowUpRight size={18} /></a><a href="/timetable/">See full timetable <CalendarDays size={17} /></a></div></div><figure><Photo src={programme.image} alt={programme.imageAlt} fetchPriority="high" sizes="(max-width: 620px) 100vw, 50vw" /></figure></div></section>
      <section className="programme-body"><div className="shell programme-body-grid"><div><p className="eyebrow dark"><span /> On the mats</p><h2>What you will learn</h2>{programme.introduction.map(text => <p key={text}>{text}</p>)}</div><div className="programme-benefits">{programme.benefits.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
      <section className="programme-depth"><div className="shell"><h2>{guidance.title}</h2>{guidance.paragraphs.map(text => <p key={text}>{text}</p>)}<p>Get to know the <a href="/coaches/">Origin coaching team</a>, compare <a href="/gi-vs-no-gi/">Gi and No-Gi training</a> or prepare with our <a href="/first-bjj-class/">first BJJ class guide</a>.</p></div></section><section className="programme-practical"><div className="shell programme-practical-grid"><div><p className="eyebrow"><span /> Plan your visit</p><h2>Classes and first steps</h2><h3>Relevant sessions</h3><ul>{timesForProgramme(programme.slug).map(time => <li key={time}><CalendarDays size={18} />{time}</li>)}</ul><p>Training takes place at our <a href="/find-us/">Kiln Farm academy in Milton Keynes</a>. Class times may change. Check the <a href="/timetable/">current timetable</a> or email before travelling.</p></div><div className="programme-visit"><MapPin size={26} /><h3>Find us in Kiln Farm</h3><p>Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE.</p><p>{programme.firstVisit}</p><a href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div></div></section>
      <section className="programme-faq"><div className="shell"><p className="eyebrow dark"><span /> Good to know</p><h2>Common questions</h2><div>{programme.faqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
      <section className="programme-inclusion"><div className="shell"><ShieldCheck size={30} /><div><h2>A welcoming place to train</h2><p>Origin places a strong emphasis on a safe, inclusive and professional training environment. Coaches hold safeguarding and first-aid qualifications and bring adaptive and children’s coaching experience to help make training accessible to different abilities and needs. Tell us about any adjustments that would help before your visit.</p></div></div></section>
      <section className="programme-next"><div className="shell"><p className="eyebrow"><span /> Keep exploring</p><h2>More ways to train</h2><div>{otherProgrammes.map(item => <a key={item.href} href={item.href}>{item.label} <ArrowUpRight size={18} /></a>)}</div></div></section>
      <section className="programme-contact"><div className="shell"><div><p className="eyebrow"><span /> Your first class is free</p><h2>Ready to step on the mat?</h2><p>Tell us which session interests you and we will help you get started.</p><p className="programme-contact-email"><Mail size={17} /> Prefer email? <a href="mailto:originmkbjj@gmail.com">originmkbjj@gmail.com</a></p></div><LeadForm source={`/${programme.slug}/`} interest={programme.slug === 'beginners' ? 'Beginners' : programme.slug === 'gi-jiu-jitsu' ? 'Gi Jiu-Jitsu' : programme.slug === 'no-gi' ? 'No-Gi Jiu-Jitsu' : 'JitzJudo'} /></div></section>
    </div>
    <SiteLinks /><footer className="programme-footer"><div className="shell"><a href="/">Origin MK BJJ</a><span>Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE</span><a href="mailto:originmkbjj@gmail.com">originmkbjj@gmail.com</a></div></footer>
  </main>;
}
