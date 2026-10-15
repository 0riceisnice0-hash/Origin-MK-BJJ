import InfoPage from '../InfoPage';
import { pageMetadata } from '../../lib/seo';
import catalog from '../../lib/page-catalog.json';
import { schedule } from '../../lib/schedule';
/* oxlint-disable next/no-html-link-for-pages -- Static export. */
export const dynamic = 'force-static';
export const metadata = pageMetadata(catalog.timetable);
export default function Page() {
  return <InfoPage page={catalog.timetable} label="Class timetable" lead="Choose from lunchtime, evening and Saturday training at our Kiln Farm academy. Beginner BJJ, Gi, No-Gi, JitzJudo and open mat run across six days.">
    <section aria-labelledby="weekly-sessions"><h2 id="weekly-sessions">Weekly BJJ classes in Milton Keynes</h2><p>This is the academy’s regular timetable. Gi and No-Gi alternate where shown. Check MAAT or contact us for the current format, holidays and changes before travelling.</p><div className="full-schedule">{schedule.map(day => <section key={day.day}><h3>{day.day}</h3><ul>{day.sessions.map(([time,title,detail]) => <li key={time}><strong>{time}</strong><div><span>{title}</span><small>{detail}</small></div></li>)}</ul></section>)}<section><h3>Sunday</h3><p>No regular sessions scheduled.</p></section></div></section>
    <section><h2>Which session should I choose?</h2><div className="information-cards"><article><h3>New to BJJ</h3><p><a href="/beginners/">Beginner sessions</a> are Tuesday and Friday, 5:30–6:30pm. Tuesday is No-Gi fundamentals. Contact us first so we can help with kit and your starting point.</p></article><article><h3>Training at lunchtime</h3><p>Monday, Wednesday and Friday run 12:00–1:30pm, with Steve: one hour of coaching followed by open mat. Ask which sessions are <a href="/gi-jiu-jitsu/">Gi</a> or <a href="/no-gi/">No-Gi</a> that week.</p></article><article><h3>Standing and groundwork</h3><p><a href="/jitzjudo/">JitzJudo with Alan</a> connects Judo takedowns to BJJ control and submissions on Wednesday evenings and Saturday mornings.</p></article><article><h3>Open mat and main classes</h3><p>Monday open mat welcomes Gi and No-Gi practice. Tuesday and Friday main classes alternate format; Ricki’s Thursday session focuses on No-Gi. Ask us which suits your experience.</p></article></div></section>
    <section className="information-callout"><h2>Book and check updates in MAAT</h2><p>MAAT is the app used for Origin MK BJJ membership, bookings, club announcements and attendance. If you are coming for the first time, send an enquiry before your visit. <a href="https://maat-app.link/Gxij8SlZe6b" target="_blank" rel="noreferrer">Open MAAT and join Origin MK BJJ ↗</a></p><p>All regular sessions are at <a href="/find-us/">Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE</a>.</p></section>
  </InfoPage>;
}
