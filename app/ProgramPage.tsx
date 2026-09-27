import type { Metadata } from 'next';
import { ArrowUpRight, CalendarDays, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { programmes, siteUrl } from '../lib/site';
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
  times: string[];
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
      'Your first class is free. Send us a quick email before you come so we can help you choose a session and tell you what to expect on the day.'
    ],
    benefits: [
      { title: 'Learn the essentials', text: 'Build a foundation in movement, control, escapes and simple submissions.' },
      { title: 'Train with guidance', text: 'Coaches explain the purpose behind each technique and adapt the pace to the group.' },
      { title: 'Find your people', text: 'Train with partners in a respectful, welcoming academy environment.' },
    ],
    times: ['Tuesday 5:30–6:30pm · No-Gi fundamentals', 'Friday 5:30–6:30pm · beginners'],
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
    times: ['Monday, Wednesday and Friday 12:00–1:30pm · Gi / No-Gi lunchtime', 'Tuesday 6:30–8:00pm · alternating Gi / No-Gi', 'Wednesday 6:00–8:00pm and Saturday 9:30–11:30am · JitzJudo (Gi)'],
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
    times: ['Tuesday 5:30–6:30pm · beginner No-Gi fundamentals', 'Thursday 6:30–8:00pm · No-Gi with Ricki', 'Monday, Wednesday and Friday 12:00–1:30pm · Gi / No-Gi lunchtime'],
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
    times: ['Wednesday 6:00–8:00pm · JitzJudo (Gi) with Alan', 'Saturday 9:30–11:30am · JitzJudo with Alan'],
    firstVisit: 'Bring a Gi if you have one. Email us before your first session if you need guidance on kit or which class best suits your experience.',
    faqs: [
      { question: 'Is JitzJudo a Judo class or a BJJ class?', answer: 'It connects Judo standing skills and Brazilian Jiu-Jitsu ground work, with an emphasis on the transition between them.' },
      { question: 'Can a beginner join?', answer: 'Contact us with your experience and we will help you choose a suitable starting session.' },
    ],
  },
};

export function programmeMetadata(key: keyof typeof programmeContent): Metadata {
  const data = programmeContent[key];
  return {
    title: data.metaTitle,
    description: data.description,
    alternates: { canonical: `/${data.slug}/` },
    openGraph: { title: data.metaTitle, description: data.description, url: `/${data.slug}/`, images: [{ url: data.image, alt: data.imageAlt }] },
  };
}

export default function ProgramPage({ programme }: { programme: Programme }) {
  const otherProgrammes = programmes.filter(item => item.href !== `/${programme.slug}/`);
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'WebPage',
    name: programme.metaTitle, description: programme.description,
    url: `${siteUrl}/${programme.slug}/`,
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: programme.title, item: `${siteUrl}/${programme.slug}/` },
    ] },
  };
  return <main className="programme-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <a className="skip-link" href="#programme-content">Skip to content</a>
    <header className="programme-header"><div className="shell programme-nav"><a href="/" aria-label="Origin MK BJJ home"><img src="/brand/origin-logo.webp" alt="Origin Brazilian Jiu-Jitsu Academy" width="1561" height="1008" /></a><nav aria-label="Main navigation"><a href="/">Home</a>{programmes.map(item => <a key={item.href} href={item.href} aria-current={item.href === `/${programme.slug}/` ? 'page' : undefined}>{item.label}</a>)}<a href="/#timetable">Timetable</a></nav><a className="button button-gold" href="mailto:originmkbjj@gmail.com?subject=My%20first%20Origin%20MK%20BJJ%20class">Try a class <ArrowUpRight size={17} /></a></div></header>
    <div id="programme-content">
      <section className="programme-hero"><div className="shell programme-hero-grid"><div><p className="eyebrow"><span /> {programme.eyebrow} · Origin MK BJJ</p><h1>{programme.title}</h1><p className="programme-lead">{programme.lead}</p><div className="programme-actions"><a className="button button-gold" href="mailto:originmkbjj@gmail.com?subject=My%20first%20Origin%20MK%20BJJ%20class">Ask about a free first class <ArrowUpRight size={18} /></a><a href="/#timetable">See full timetable <CalendarDays size={17} /></a></div></div><figure><img src={programme.image} alt={programme.imageAlt} fetchPriority="high" /></figure></div></section>
      <section className="programme-body"><div className="shell programme-body-grid"><div><p className="eyebrow dark"><span /> On the mats</p><h2>What you will learn</h2>{programme.introduction.map(text => <p key={text}>{text}</p>)}</div><div className="programme-benefits">{programme.benefits.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
      <section className="programme-practical"><div className="shell programme-practical-grid"><div><p className="eyebrow"><span /> Plan your visit</p><h2>Classes and first steps</h2><h3>Relevant sessions</h3><ul>{programme.times.map(time => <li key={time}><CalendarDays size={18} />{time}</li>)}</ul><p>Class times may change. Check the <a href="/#timetable">current timetable</a> or email before travelling.</p></div><div className="programme-visit"><MapPin size={26} /><h3>Find us in Kiln Farm</h3><p>Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE.</p><p>{programme.firstVisit}</p><a href="https://www.google.com/maps/search/?api=1&query=Unit+8+Potters+Lane+Kiln+Farm+Milton+Keynes+MK11+3HE" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div></div></section>
      <section className="programme-faq"><div className="shell"><p className="eyebrow dark"><span /> Good to know</p><h2>Common questions</h2><div>{programme.faqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
      <section className="programme-inclusion"><div className="shell"><ShieldCheck size={30} /><div><h2>A welcoming place to train</h2><p>Origin places a strong emphasis on a safe, inclusive and professional training environment. Coaches hold safeguarding and first-aid qualifications and bring adaptive and children’s coaching experience to help make training accessible to different abilities and needs. Tell us about any adjustments that would help before your visit.</p></div></div></section>
      <section className="programme-next"><div className="shell"><p className="eyebrow"><span /> Keep exploring</p><h2>More ways to train</h2><div>{otherProgrammes.map(item => <a key={item.href} href={item.href}>{item.label} <ArrowUpRight size={18} /></a>)}</div></div></section>
      <section className="programme-contact"><div className="shell"><div><p className="eyebrow"><span /> Your first class is free</p><h2>Ready to step on the mat?</h2><p>Tell us which session interests you and we will help you get started.</p></div><a className="button button-gold" href="mailto:originmkbjj@gmail.com?subject=My%20first%20Origin%20MK%20BJJ%20class"><Mail size={18} /> Email Origin MK BJJ</a></div></section>
    </div>
    <footer className="programme-footer"><div className="shell"><a href="/">Origin MK BJJ</a><span>Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE</span><a href="mailto:originmkbjj@gmail.com">originmkbjj@gmail.com</a></div></footer>
  </main>;
}
