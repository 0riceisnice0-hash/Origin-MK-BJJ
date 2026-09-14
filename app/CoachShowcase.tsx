'use client';

import { useState } from 'react';

type Coach = {
  name: string;
  role: string;
  grade: string;
  image: string;
  focus: string;
  bio: string;
  profile: string[];
};

export default function CoachShowcase({ coaches, basePath }: { coaches: Coach[]; basePath: string }) {
  const [active, setActive] = useState<number | null>(null);
  const selected = active === null ? null : coaches[active];

  return <div className="coach-showcase">
    <div className="coach-roster">
      {coaches.map((coach, index) => <article className="coach-tile" key={coach.name}>
        <figure>
          <img src={`${basePath}${coach.image}`} alt={`${coach.name}, ${coach.grade}`} />
          <figcaption>{coach.role}</figcaption>
        </figure>
        <div className="coach-tile-copy">
          <p className="coach-count">{String(index + 1).padStart(2, '0')} / {String(coaches.length).padStart(2, '0')}</p>
          <h3>{coach.name}</h3>
          <strong>{coach.grade}</strong>
          <p>{coach.bio}</p>
          <button type="button" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)}>
            {active === index ? 'Close profile' : 'Read full profile'} <span aria-hidden="true">{active === index ? '−' : '+'}</span>
          </button>
        </div>
      </article>)}
    </div>

    {selected && <article className="coach-profile" aria-live="polite">
      <div className="coach-profile-heading">
        <div><p>{selected.role} · {selected.focus}</p><h3>{selected.name}</h3><strong>{selected.grade}</strong></div>
        <button type="button" onClick={() => setActive(null)} aria-label={`Close ${selected.name} profile`}>×</button>
      </div>
      <div className="coach-profile-copy">{selected.profile.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </article>}
  </div>;
}
