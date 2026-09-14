import { ArrowDownRight, ArrowUpRight, CalendarDays, Clock3, Mail, ShieldCheck, Sparkles, Users } from 'lucide-react';
import CoachShowcase from './CoachShowcase';
import Timetable from './Timetable';
/* oxlint-disable next/no-img-element -- GitHub Pages uses static, supplied coach images; next/image triggers a vinext hydration issue. */

export const dynamic = 'force-static';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const asset = (path: string) => `${basePath}${path}`;

const schedule: { day: string; sessions: [string, string, string][] }[] = [
  { day: 'Monday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['6:30–8:00pm', 'Open mat', 'Gi & No-Gi']] },
  { day: 'Tuesday', sessions: [['5:30–6:30pm', 'Beginners', 'No-Gi · Pete'], ['6:30–8:00pm', 'Main class', 'Alternating Gi / No-Gi · Pete']] },
  { day: 'Wednesday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['6:00–8:00pm', 'JitzJudo', 'Gi · Alan']] },
  { day: 'Thursday', sessions: [['6:30–8:00pm', 'No-Gi', 'Ricki']] },
  { day: 'Friday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['5:30–6:30pm', 'Beginners', 'Pete'], ['6:30–8:00pm', 'Main class', 'Pete']] },
  { day: 'Saturday', sessions: [['9:30–11:30am', 'JitzJudo', 'Alan']] },
];

const coaches = [
  {
    name: 'Alan Mineards', role: 'Head coach', grade: 'BJJ Black Belt · Judo 2nd Dan · Former British Judo Champion', image: '/coaches/alan.jpg', focus: 'JitzJudo · Gi · complete grappling',
    bio: 'Alan brings decades of experience in Judo and Brazilian Jiu-Jitsu to the development of a complete, modern grappling programme.',
    profile: [
      "Alan began his martial arts journey at Northampton Judo Club under Sensei Clive Douglas. His Judo background built an exceptional understanding of balance, movement, timing, throwing mechanics, gripping, positional control and pressure.",
      "Driven to expand his skills, Alan cross-trained in Brazilian Jiu-Jitsu and developed a fluid, submission-focused style. He achieved his BJJ Black Belt under Peter Olsson and Ed Ingamells, continuing his development within a respected UK lineage.",
      "His classes unite Judo-based takedowns, BJJ positional systems, submission grappling and pressure-based control. Alan’s goal is to help every student understand not only what to do, but why they are doing it."
    ],
  },
  {
    name: 'Ricki Shortland', role: 'No-Gi coach', grade: 'BJJ Black Belt · 10th Planet Brown Belt · No-Gi Specialist', image: '/coaches/ricki.png', focus: 'No-Gi · transitions · submission chains',
    bio: 'Ricki brings a highly technical, modern and dynamic approach to No-Gi Brazilian Jiu-Jitsu.',
    profile: [
      "Rather than relying on strength or athleticism, Ricki teaches students to use angles, timing, frames, leverage, movement and pressure to create opportunities and systematically break down opponents.",
      "His coaching connects takedowns and entries, wrestling, guard passing, leg entanglements, back attacks, front headlocks, submission chains and scrambles into one adaptable system.",
      "Ricki teaches students to understand how one attack creates another, how pressure creates reactions and how those reactions build the next attack. His sessions encourage experimentation, problem-solving and a modern submission-grappling skillset."
    ],
  },
  {
    name: 'Steve Freezer', role: 'BJJ & Judo coach', grade: 'Judo Black Belt · BJJ Brown Belt · British Masters Champion', image: '/coaches/steve.png', focus: 'Gi · takedowns · lapel systems',
    bio: 'Steve combines extensive experience in Judo, Brazilian Jiu-Jitsu and competitive grappling with a coaching approach built around technical efficiency.',
    profile: [
      "A British Masters National BJJ Champion and British Masters Judo bronze medallist, Steve understands how to apply technique against genuine resistance.",
      "He specialises in connecting every phase of grappling: takedown, transition, control and submission. His teaching covers Judo gripping, BJJ positional fundamentals, Gi and lapel control, top pressure and intelligent problem-solving.",
      "Steve’s students learn to control and submit through timing, leverage, positioning and pressure rather than physical strength. Techniques are pressure-tested so students can recognise situations, make decisions and execute when an opponent is trying to stop them."
    ],
  },
  {
    name: 'Peter Olsson', role: 'Coach & mentor', grade: '2nd Degree BJJ Black Belt · Founder of Viking BJJ', image: '/coaches/peter.png', focus: 'Fundamentals · practical technique · development',
    bio: 'Peter is an experienced coach, mentor and lifelong student of Jiu-Jitsu who combines strong fundamentals with an enjoyable learning environment.',
    profile: [
      "Peter founded Viking Brazilian Jiu-Jitsu in 2016 and has built a reputation for understanding what students need, whether they are taking their first class or developing an advanced game.",
      "His training includes work with 7th Degree Coral Belt Mauricio Gomes and 3rd Degree Black Belt Nick Brooks. He teaches practical technique, pressure testing and genuine understanding rather than simple memorisation.",
      "Peter recognises that every student learns differently and trains for different reasons. His classes balance technical detail and high standards with humour, curiosity and an atmosphere where people can progress at their own pace."
    ],
  },
];

const principles = [['Position before submission', 'Control creates opportunity.'], ['Technique before force', 'Efficiency beats unnecessary strength.'], ['Intelligence before chaos', 'Understand the problem before you solve it.'], ['Pressure creates reaction', 'Make them respond—then use the opening.']];

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
      <div className="hero-ticker" aria-hidden="true"><div className="ticker-desktop">GI <span>✦</span> NO-GI <span>✦</span> JITZJUDO <span>✦</span> OPEN MAT <span>✦</span> BEGINNERS <span>✦</span> GI <span>✦</span> NO-GI</div><div className="ticker-mobile"><span>GI</span><span>NO-GI</span><span>JITZJUDO</span><span>OPEN MAT</span></div></div>

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
          <Timetable schedule={schedule} logoSrc={asset('/brand/origin-logo.jpg')} />
          <div className="maat-band"><div className="maat-explainer"><span className="maat-label">MAAT</span><div><p className="maat-kicker">The academy app</p><h3>Book classes. Get club updates. Track your training.</h3><p>MAAT is the app Origin uses for membership and day-to-day training. Open the link, join the Origin MK BJJ gym, then use it to manage your sessions in one place.</p><ul><li>Join the academy</li><li>Book classes</li><li>See announcements</li><li>Track attendance</li></ul></div></div><a className="maat-status" href="https://maat-app.link/Gxij8SlZe6b" target="_blank" rel="noreferrer">Open MAAT and join <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="coaches-section" id="coaches"><div className="shell"><div className="section-heading light"><div><p className="eyebrow"><span /> Four coaches · one team</p><h2>Different styles.<br /><em>One standard.</em></h2></div><p>Select a coach to explore the experience behind Origin’s Gi, No-Gi and JitzJudo programme.</p></div><CoachShowcase coaches={coaches} basePath={basePath} /></div></section>

      <section className="approach-section" id="approach"><div className="shell approach-stage"><div className="approach-visual"><img src={asset('/training/no-gi-open-guard.jpg')} alt="No-Gi students solving an open guard position" loading="lazy" /><div className="approach-copy"><p className="eyebrow"><span /> The Origin approach</p><h2>Problem-solving<br />under pressure.</h2><p className="approach-lead">We teach the decisions behind the technique—so it still works when someone is resisting.</p></div></div><div className="approach-detail"><p className="approach-statement">Position, movement, timing and pressure are taught as one connected system—not a collection of isolated moves.</p><div className="principles">{principles.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div><div className="association"><ShieldCheck size={26} /><div><span>Proudly under</span><strong>The Nick Brooks Association</strong><p>A respected lineage and technical foundation connecting Origin to the wider UK BJJ community.</p></div></div></div></div></section>

      <section className="beginner-section" id="first-class"><div className="shell beginner-grid"><div><p className="eyebrow"><span /> Your first class</p><h2><span>You don’t need to</span><span>be fit before</span><span>you begin.</span></h2></div><figure className="beginner-photo"><img src={asset('/training/gi-partners.jpg')} alt="Two training partners practising Gi Jiu-Jitsu" loading="lazy" /></figure><div><p>No previous experience. No need to already know the rules. Turn up willing to learn and our coaches will help you build confidence one session at a time.</p><ul><li><Users size={19} /> Beginner sessions Tuesday and Friday</li><li><ShieldCheck size={19} /> Controlled, respectful training</li><li><Sparkles size={19} /> Progress at your own pace</li></ul><a className="button button-gold" href="#location">Plan your first visit <ArrowDownRight size={18} /></a></div></div></section>

      <section className="location-section" id="location"><div className="shell location-grid"><div className="location-visual"><iframe title="Map showing Origin MK BJJ at Unit 8 Potters Lane, Kiln Farm" src="https://www.google.com/maps?q=Unit+8,+Potters+Lane,+Kiln+Farm,+Milton+Keynes+MK11+3HE&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-copy"><p className="eyebrow dark"><span /> Our new home</p><h2>Origin starts here.</h2><p className="address">Unit 8, Potters Lane<br />Kiln Farm<br />Milton Keynes MK11 3HE</p><p>Doors open Monday 5 October 2026. Allow a little extra time on your first visit to find the unit and get settled before class.</p><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Unit+8+Potters+Lane+Kiln+Farm+Milton+Keynes+MK11+3HE" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={18} /></a></div></div></section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-intro"><p className="eyebrow"><span /> Contact Origin</p><h2>Questions before<br />your first class?</h2></div>
          <div className="contact-copy">
            <p>Ask us about classes, getting started or visiting the new academy. We’ll get back to you as soon as we can.</p>
            {/* Replace REPLACE_WITH_FORM_ID with the live Formspree form ID when the account is ready. */}
            <form className="contact-form" action="https://formspree.io/f/REPLACE_WITH_FORM_ID" method="POST">
              <input type="hidden" name="_subject" value="New Origin MK BJJ website enquiry" />
              <div className="form-row">
                <label><span>Name</span><input type="text" name="name" autoComplete="name" required /></label>
                <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
              </div>
              <div className="form-row">
                <label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" /></label>
                <label><span>Enquiry about</span><select name="enquiry" defaultValue=""><option value="" disabled>Choose one</option><option>First class</option><option>Timetable</option><option>Membership</option><option>Kids classes</option><option>Something else</option></select></label>
              </div>
              <label><span>How can we help?</span><textarea name="message" rows={4} required /></label>
              <button type="submit">Send enquiry <ArrowUpRight size={18} /></button>
            </form>
            <a className="contact-email" href="mailto:originmkbjj@gmail.com"><Mail size={20} /><span><small>Or email us directly</small><strong>originmkbjj@gmail.com</strong></span><ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>
    </div>

    <footer><div className="shell footer-main"><a className="brand" href="#top"><img className="brand-logo" src={asset('/brand/origin-logo.jpg')} alt="Origin Brazilian Jiu-Jitsu Academy MK" loading="lazy" /></a><p>Strong fundamentals. Technical precision.<br />Progressive development. Pressure-tested Jiu-Jitsu.</p><div><a href="#timetable">Timetable</a><a href="#coaches">Coaches</a><a href="#location">Find us</a><a href="#contact">Contact</a></div></div><div className="shell footer-bottom"><span>© 2026 Origin MK BJJ</span><span>Proudly under The Nick Brooks Association</span><a href="#top">Back to top ↑</a></div></footer>
    <div className="mobile-bar"><a href="#timetable"><CalendarDays size={18} /> Classes</a><a href="https://maat-app.link/Gxij8SlZe6b" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> Join</a><a href="#contact"><Mail size={18} /> Contact</a></div>
  </main>;
}
