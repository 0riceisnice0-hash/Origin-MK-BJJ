'use client';

import { useState } from 'react';

type Session = [string, string, string];
type Day = { day: string; sessions: Session[] };

export default function Timetable({ schedule, logoSrc }: { schedule: Day[]; logoSrc: string }) {
  const days = [...schedule, { day: 'Sunday', sessions: [] as Session[] }];
  const [activeDay, setActiveDay] = useState(0);
  const selected = days[activeDay];

  const sessions = (day: Day) => day.sessions.length ? (
    <div className="day-sessions">
      {day.sessions.map(([time, title, detail]) => (
        <div className="session-card" key={`${day.day}-${time}`}>
          <time>{time}</time><strong>{title}</strong><span>{detail}</span>
        </div>
      ))}
    </div>
  ) : <p className="closed-copy">Closed—for now.</p>;

  return <div className="timetable-board">
    <div className="timetable-masthead">
      <div><span>Origin MK BJJ</span><h3>Weekly timetable</h3><p>Gi · No-Gi · JitzJudo · Open Mat</p></div>
      <img src={logoSrc} alt="" aria-hidden="true" />
    </div>
    <div className="timetable-tabs" role="tablist" aria-label="Choose a day">
      {days.map((item, index) => <button key={item.day} type="button" role="tab" aria-selected={activeDay === index} onClick={() => setActiveDay(index)}><span>{item.day.slice(0, 3)}</span><small>{item.sessions.length || '—'}</small></button>)}
    </div>
    <article className="mobile-day-panel" role="tabpanel" aria-live="polite">
      <header><span>{String(activeDay + 1).padStart(2, '0')}</span><h3>{selected.day}</h3></header>
      {sessions(selected)}
    </article>
    <div className="schedule-days">
      {days.map((day, dayIndex) => <article className={`day-card${day.sessions.length ? '' : ' day-card-closed'}`} key={day.day}>
        <header><span>{String(dayIndex + 1).padStart(2, '0')}</span><h3>{day.day}</h3></header>
        {sessions(day)}
      </article>)}
    </div>
    <div className="timetable-footer"><span>Unit 8 · Potters Lane · Kiln Farm</span><strong>Milton Keynes · MK11 3HE</strong></div>
  </div>;
}
