import InfoPage from '../InfoPage';
import Photo from '../Photo';
import { pageMetadata, canonicalUrl } from '../../lib/seo';
import { businessId, siteUrl } from '../../lib/site';
import { coaches } from '../../lib/coaches';
import catalog from '../../lib/page-catalog.json';
/* oxlint-disable next/no-html-link-for-pages -- Static export. */
export const dynamic = 'force-static';
export const metadata = pageMetadata(catalog.coaches);
export default function Page() {
  const people = coaches.map(coach => ({ '@type': 'Person', '@id': `${canonicalUrl('/coaches/')}#${coach.name.toLowerCase().replaceAll(' ','-')}`, name: coach.name, jobTitle: coach.role, description: coach.bio, image: `${siteUrl}${coach.image}`, worksFor: { '@id': businessId }, knowsAbout: coach.focus.split(' · ') }));
  return <InfoPage page={catalog.coaches} label="Our coaches" type="AboutPage" extra={people} lead="Meet Alan Mineards, Ricki Shortland, Steve Freezer and Peter Olsson. Their experience spans Brazilian Jiu-Jitsu, Judo and modern submission grappling, with a shared emphasis on understanding the technique.">
    <section><h2>Four coaches. One connected programme.</h2><p>At Origin MK BJJ, coaching connects standing skills, positional control and submissions. Read the backgrounds below to understand the experience behind our <a href="/gi-jiu-jitsu/">Gi</a>, <a href="/no-gi/">No-Gi</a> and <a href="/jitzjudo/">JitzJudo</a> sessions in Milton Keynes.</p><nav className="coach-jump-links" aria-label="Choose a coach">{coaches.map(coach => <a href={`#${coach.name.toLowerCase().replaceAll(' ','-')}`} key={coach.name}>{coach.name}</a>)}</nav></section>
    {coaches.map(coach => <section className="coach-biography" id={coach.name.toLowerCase().replaceAll(' ','-')} key={coach.name}><figure><Photo src={coach.image} alt={`${coach.name}, ${coach.role} at Origin MK BJJ`} loading="lazy" sizes="(max-width: 760px) 90vw, 300px" /></figure><div><p className="eyebrow dark"><span />{coach.role}</p><h2>{coach.name}</h2><p className="coach-credentials">{coach.grade}</p><p>{coach.bio}</p>{coach.profile.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
    <section className="information-callout"><h2>Find your starting point</h2><p>If you are new to BJJ, a <a href="/beginners/">beginner class</a> gives you a place to learn movement, positions and safe training habits. Tell us about your experience and we will help you select a session from the <a href="/timetable/">current timetable</a>.</p><p>Origin places a strong emphasis on a safe, inclusive and professional training environment, with safeguarding and first-aid qualifications alongside adaptive and children’s coaching experience. Ask about any support you need before your visit.</p></section>
  </InfoPage>;
}
