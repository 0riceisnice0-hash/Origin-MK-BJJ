import { ArrowDownRight, ArrowUpRight, CalendarDays, Clock3, Mail, MapPin, ShieldCheck, Sparkles, Users } from 'lucide-react';
/* oxlint-disable next/no-img-element -- GitHub Pages uses static, supplied coach images; next/image triggers a vinext hydration issue. */

export const dynamic = 'force-static';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

const schedule = [
  { day: 'Monday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['6:30–8:00pm', 'Open mat', 'Gi & No-Gi']] },
  { day: 'Tuesday', sessions: [['5:30–6:30pm', 'Beginners', 'No-Gi · Pete'], ['6:30–8:00pm', 'Main class', 'Alternating Gi / No-Gi · Pete']] },
  { day: 'Wednesday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['6:00–8:00pm', 'JitzJudo', 'Gi · Alan']] },
  { day: 'Thursday', sessions: [['6:30–8:00pm', 'No-Gi', 'Ricki']] },
  { day: 'Friday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['5:30–6:30pm', 'Beginners', 'Pete'], ['6:30–8:00pm', 'Main class', 'Pete']] },
  { day: 'Saturday', sessions: [['9:30–11:30am', 'JitzJudo', 'Alan']] },
];

const coaches = [
  { name: 'Alan Mineards', role: 'Head coach', grade: 'BJJ Black Belt · Judo 2nd Dan', image: '/coaches/alan.jpg', focus: 'JitzJudo · Gi · complete grappling', bio: 'Former British Judo Champion. Alan connects elite stand-up fundamentals with pressure, positional control and submission-focused Jiu-Jitsu.' },
  { name: 'Ricki Shortland', role: 'No-Gi coach', grade: 'BJJ Black Belt · 10th Planet Brown Belt', image: '/coaches/ricki.png', focus: 'No-Gi · transitions · submission chains', bio: 'A modern, movement-led approach built around angles, leverage and connected attacks—not strength for strength’s sake.' },
  { name: 'Steve Freezer', role: 'BJJ & Judo coach', grade: 'BJJ Brown Belt · Judo Black Belt', image: '/coaches/steve.png', focus: 'Gi · takedowns · lapel systems', bio: 'British Masters National BJJ Champion and British Masters Judo medallist, specialising in the path from takedown to control to submission.' },
  { name: 'Peter Olsson', role: 'Coach & mentor', grade: '2nd Degree BJJ Black Belt', image: '/coaches/peter.png', focus: 'Fundamentals · practical technique · development', bio: 'Founder of Viking BJJ and an experienced coach known for high standards, clear teaching and making the learning process enjoyable.' },
];

const principles = [['01', 'Position before submission', 'Control creates opportunity.'], ['02', 'Technique before force', 'Efficiency beats unnecessary strength.'], ['03', 'Intelligence before chaos', 'Understand the problem before you solve it.'], ['04', 'Pressure creates reaction', 'Make them respond—then use the opening.']];

const trainingImages = [
  { src: '/training/no-gi-throw.jpg', alt: 'No-Gi students practising a takedown' },
  { src: '/training/no-gi-grappling.jpg', alt: 'Students training No-Gi grappling on the mats' },
  { src: '/training/gi-standup.jpg', alt: 'Gi students working on standing grips' },
  { src: '/training/gi-groundwork.jpg', alt: 'Gi students practising positional control' },
];

export default function Home() {
  return <main id="top">
    <a className="skip-link" href="#content">Skip to content</a>
    <div className="launch-bar"><div className="shell launch-inner"><span><Sparkles size={14} /> New academy. New home. Same team.</span><a href="#location">Opening Monday 5 October · Kiln Farm, MK</a></div></div>
    <header className="site-header"><div className="shell nav-wrap"><a className="brand" href="#top" aria-label="Origin MK BJJ home"><img className="brand-logo" src={asset('/brand/origin-logo.jpg')} alt="Origin Brazilian Jiu-Jitsu Academy MK" /></a><nav aria-label="Main navigation"><a href="#training">Training</a><a href="#timetable">Timetable</a><a href="#coaches">Coaches</a><a href="#approach">Our approach</a><a href="#location">Find us</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#timetable">View classes <ArrowDownRight size={17} /></a></div></header>

    <div id="content">
      <section className="hero">
        <div className="hero-lines" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Milton Keynes · Gi · No-Gi · JitzJudo</p>
            <h1>Learn.<br />Improve.<br /><em>Evolve.</em></h1>
            <p className="hero-lead">Brazilian Jiu-Jitsu for complete beginners, experienced grapplers and competitors—built on strong fundamentals, technical precision and training with purpose.</p>
            <div className="hero-actions"><a className="button button-gold" href="#timetable">Find your class <CalendarDays size={19} /></a><a className="text-link" href="#coaches">Meet the coaches <ArrowDownRight size={18} /></a></div>
            <div className="hero-proof" aria-label="Academy highlights"><div><strong>6 days</strong><span>of training</span></div><div><strong>4 coaches</strong><span>one complete programme</span></div><div><strong>All levels</strong><span>beginners welcome</span></div></div>
          </div>
          <div className="hero-visual">
            <figure><img src={asset('/training/hero-no-gi-clinch.jpg')} alt="Two No-Gi students training together" /></figure>
            <div className="hero-card"><span>Opening 05.10.26</span><strong>Unit 8, Potters Lane<br />Milton Keynes</strong><a href="#location">Get directions <ArrowUpRight size={15} /></a></div>
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
          </div>
        </div>
      </section>
      <div className="hero-ticker" aria-hidden="true"><div>GI <span>✦</span> NO-GI <span>✦</span> JITZJUDO <span>✦</span> OPEN MAT <span>✦</span> BEGINNERS <span>✦</span> GI <span>✦</span> NO-GI</div></div>

      <section className="training-section" id="training">
        <div className="shell training-layout">
          <div className="training-intro">
            <div>
              <p className="eyebrow"><span /> Come and train with us</p>
              <h2>Curious about<br /><em>Brazilian Jiu-Jitsu?</em></h2>
            </div>
            <div className="training-copy">
              <p>Come and experience Origin MK BJJ.</p>
              <p>Whether you’re a complete beginner or an experienced grappler, everyone is welcome. Great training, a friendly atmosphere and a strong community—right here in Milton Keynes.</p>
              <div className="training-offer"><strong>Your first class is free.</strong><span>No pressure. Just turn up ready to learn.</span></div>
              <div className="training-actions"><a className="button button-gold" href="#timetable">Choose a class <CalendarDays size={19} /></a><a className="text-link" href="#location">Find the academy <ArrowDownRight size={18} /></a></div>
            </div>
          </div>
          <div className="training-gallery">
            {trainingImages.map((image, index) => <figure className={`training-shot training-shot-${index + 1}`} key={image.src}><img src={asset(image.src)} alt={image.alt} loading="lazy" /></figure>)}
          </div>
        </div>
      </section>

      <section className="section schedule-section" id="timetable">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow dark"><span /> Weekly timetable</p><h2>More mat time.<br /><em>More ways to train.</em></h2></div>
            <div className="section-intro"><p>Morning person? Lunch-break grappler? Evening regular? Choose the sessions that fit your week. Gi and No-Gi alternate where shown.</p><span><Clock3 size={17} /> Timetable starts Monday 5 October 2026</span></div>
          </div>
          <div className="timetable-board">
            <div className="timetable-masthead">
              <div><span>Origin MK BJJ</span><h3>Weekly timetable</h3><p>Gi · No-Gi · JitzJudo · Open Mat</p></div>
              <img src={asset('/brand/origin-logo.jpg')} alt="" aria-hidden="true" />
            </div>
            <div className="schedule-days">
              {schedule.map(({ day, sessions }, dayIndex) => <article className="day-card" key={day}>
                <header><span>0{dayIndex + 1}</span><h3>{day}</h3></header>
                <div className="day-sessions">{sessions.map(([time, title, detail]) => <div className="session-card" key={`${day}-${time}`}><time>{time}</time><strong>{title}</strong><span>{detail}</span></div>)}</div>
              </article>)}
              <article className="day-card day-card-closed"><header><span>07</span><h3>Sunday</h3></header><p>Closed—for now.</p></article>
            </div>
            <div className="timetable-footer"><span>Unit 8 · Potters Lane · Kiln Farm</span><strong>Milton Keynes · MK11 3HE</strong></div>
          </div>
          <div className="maat-band"><div><span className="maat-label">MAAT</span><div><h3>Your training, all in one place.</h3><p>Class bookings, membership, club announcements, attendance and belt progress will be managed through the MAAT app.</p></div></div><span className="maat-status">Member setup coming soon</span></div>
          <div className="schedule-photos"><figure><img src={asset('/training/no-gi-wrestling.jpg')} alt="Students drilling No-Gi wrestling" loading="lazy" /></figure><figure><img src={asset('/training/coach-observing.jpg')} alt="A coach watching students train" loading="lazy" /></figure><p><strong>Drill. Test. Refine.</strong><span>Every class combines clear coaching with time to put the work into practice.</span></p></div>
        </div>
      </section>

      <section className="coaches-section" id="coaches"><div className="shell"><div className="section-heading light"><div><p className="eyebrow"><span /> Coaching team</p><h2>Different styles.<br /><em>One standard.</em></h2></div><p>Deep experience across BJJ, Judo and modern No-Gi grappling gives every student a rounded, pressure-tested education.</p></div><div className="coach-grid">{coaches.map((coach, index) => <article className="coach-card" key={coach.name}><figure><img src={asset(coach.image)} alt={`${coach.name}, ${coach.grade}`} loading={index < 2 ? 'eager' : 'lazy'} /></figure><div className="coach-number">0{index + 1}</div><div className="coach-copy"><p>{coach.role}</p><h3>{coach.name}</h3><strong>{coach.grade}</strong><span>{coach.focus}</span><p className="coach-bio">{coach.bio}</p></div></article>)}</div><figure className="coaches-action"><img src={asset('/training/no-gi-open-guard.jpg')} alt="No-Gi students working through an open guard position" loading="lazy" /><figcaption>Coaching that holds up when the pace rises.</figcaption></figure></div></section>

      <section className="section approach-section" id="approach"><div className="shell approach-grid"><div className="approach-copy"><p className="eyebrow dark"><span /> The Origin approach</p><h2>Problem-solving<br />under pressure.</h2><p className="approach-lead">We do not train to collect techniques. We train to understand position, movement, timing and decision-making—and to apply them when someone is trying to stop us.</p><div className="association"><ShieldCheck size={26} /><div><span>Proudly under</span><strong>The Nick Brooks Association</strong><p>A respected lineage, coaching network and technical foundation connecting Origin to the wider UK BJJ community.</p></div></div></div><div className="principles">{principles.map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="beginner-section" id="first-class"><div className="shell beginner-grid"><div><p className="eyebrow"><span /> Your first class</p><h2><span>You don’t need to</span><span>be fit before</span><span>you begin.</span></h2></div><figure className="beginner-photo"><img src={asset('/training/gi-partners.jpg')} alt="Two training partners practising Gi Jiu-Jitsu" loading="lazy" /></figure><div><p>No previous experience. No need to already know the rules. Turn up willing to learn and our coaches will help you build confidence one session at a time.</p><ul><li><Users size={19} /> Beginner sessions Tuesday and Friday</li><li><ShieldCheck size={19} /> Controlled, respectful training</li><li><Sparkles size={19} /> Progress at your own pace</li></ul><a className="button button-gold" href="#location">Plan your first visit <ArrowDownRight size={18} /></a></div></div></section>

      <section className="location-section" id="location"><div className="shell location-grid"><div className="location-visual"><iframe title="Map showing Origin MK BJJ at Unit 8 Potters Lane, Kiln Farm" src="https://www.google.com/maps?q=Unit+8,+Potters+Lane,+Kiln+Farm,+Milton+Keynes+MK11+3HE&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-copy"><p className="eyebrow dark"><span /> Our new home</p><h2>Origin starts here.</h2><p className="address">Unit 8, Potters Lane<br />Kiln Farm<br />Milton Keynes MK11 3HE</p><p>Doors open Monday 5 October 2026. Allow a little extra time on your first visit to find the unit and get settled before class.</p><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Unit+8+Potters+Lane+Kiln+Farm+Milton+Keynes+MK11+3HE" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={18} /></a></div></div></section>

      <section className="contact-section" id="contact"><div className="shell contact-grid"><div><p className="eyebrow"><span /> Get in touch</p><h2>Questions before<br />your first class?</h2></div><div className="contact-copy"><p>Ask us about classes, getting started or visiting the new academy. We’ll point you in the right direction.</p><a className="contact-email" href="mailto:originmkbjj@gmail.com"><Mail size={22} /><span><small>Email Origin MK BJJ</small><strong>originmkbjj@gmail.com</strong></span><ArrowUpRight size={21} /></a></div></div></section>
    </div>

    <footer><div className="shell footer-main"><a className="brand" href="#top"><img className="brand-logo" src={asset('/brand/origin-logo.jpg')} alt="Origin Brazilian Jiu-Jitsu Academy MK" loading="lazy" /></a><p>Strong fundamentals. Technical precision.<br />Progressive development. Pressure-tested Jiu-Jitsu.</p><div><a href="#timetable">Timetable</a><a href="#coaches">Coaches</a><a href="#location">Find us</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 Origin MK BJJ</span><span>Proudly under The Nick Brooks Association</span><a href="#top">Back to top ↑</a></div></footer>
    <div className="mobile-bar"><a href="#timetable"><CalendarDays size={18} /> Timetable</a><a href="#location"><MapPin size={18} /> Find us</a></div>
  </main>;
}
