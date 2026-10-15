import InfoPage from '../InfoPage';
import { pageMetadata } from '../../lib/seo';
import catalog from '../../lib/page-catalog.json';
/* oxlint-disable next/no-html-link-for-pages -- Static export. */
export const dynamic = 'force-static';
export const metadata = pageMetadata(catalog['bjj-faq']);
export default function Page() {
  return <InfoPage page={catalog['bjj-faq']} label="BJJ questions" lead="Find practical answers about starting Brazilian Jiu-Jitsu at Origin MK BJJ in Milton Keynes. If your question is not covered, use the enquiry form and tell us what you would like to know.">
    <section className="answer-list"><h2>Starting BJJ at Origin</h2>
      <article><h3>What is Brazilian Jiu-Jitsu?</h3><p>BJJ is a grappling martial art built around controlling position, escaping bad positions and working towards submissions. Practice includes technique, partner drills and opportunities to apply what you have learned against resistance. At Origin, the <a href="/beginners/">beginner programme</a> introduces the foundations.</p></article>
      <article><h3>How much does a first class cost?</h3><p>Your first class at Origin MK BJJ is free. Contact us before coming so we can help you choose a session and explain what to bring.</p></article>
      <article><h3>What are the membership and drop-in prices?</h3><p>Ask the academy for current prices, membership options and drop-in arrangements before booking. We use <a href="https://maat-app.link/Gxij8SlZe6b" target="_blank" rel="noreferrer">MAAT</a> for membership, class bookings and club updates.</p></article>
      <article><h3>Do I need to be fit or have martial arts experience?</h3><p>No previous martial arts experience or particular level of fitness is needed to enquire about a beginner class. Tell your coach it is your first session, follow their guidance and work at a manageable pace. Discuss any adjustments you need before you visit.</p></article>
      <article><h3>When are the beginner sessions?</h3><p>Tuesday and Friday, 5:30–6:30pm. Tuesday is No-Gi fundamentals. Check the <a href="/timetable/">timetable</a> and ask about the current format before travelling.</p></article>
      <article><h3>Should I buy a Gi before my first class?</h3><p>Contact us first. You can begin with a suitable No-Gi session in comfortable sports clothing without zips or hard fastenings. The <a href="/gi-vs-no-gi/">Gi vs No-Gi guide</a> explains the equipment difference, and the <a href="/first-bjj-class/">first-class guide</a> includes a packing list.</p></article>
      <article><h3>Where is Origin MK BJJ?</h3><p>Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE. See <a href="/find-us/">directions and the academy’s Google listing</a> to plan your route.</p></article>
      <article><h3>Can someone from another academy visit?</h3><p>Send us a message with your experience, usual training format and preferred day. We can help you choose a suitable class or open mat and confirm any booking arrangements.</p></article>
      <article><h3>Do you offer children’s classes?</h3><p>The published timetable does not list a dedicated children’s class. Contact the academy to discuss your child’s age and ask about current availability or future sessions.</p></article>
      <article><h3>Can I ask about accessibility or additional needs?</h3><p>Yes. Tell the academy what would help with your visit before you travel. Origin emphasises a safe, inclusive and professional environment, with safeguarding, first-aid, adaptive and children’s coaching experience. Ask about specific access arrangements so we can discuss your needs directly.</p></article>
      <article><h3>Who teaches at the academy?</h3><p>Alan Mineards, Ricki Shortland, Steve Freezer and Peter Olsson. Read the <a href="/coaches/">full coach profiles</a> for their backgrounds and approach to Gi, No-Gi and JitzJudo.</p></article>
      <article><h3>How do I book my free first class?</h3><p>Use the enquiry form below with your preferred day and experience. We will help you select a starting session. You can also email <a href="mailto:originmkbjj@gmail.com">originmkbjj@gmail.com</a>.</p></article>
    </section>
  </InfoPage>;
}
