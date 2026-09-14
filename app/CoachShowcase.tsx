'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const [active, setActive] = useState(0);
  const coach = coaches[active];
  const move = (direction: number) => setActive(current => (current + direction + coaches.length) % coaches.length);

  return <div className="coach-showcase">
    <div className="coach-stage" key={coach.name}>
      <figure><img src={`${basePath}${coach.image}`} alt={`${coach.name}, ${coach.grade}`} /></figure>
      <article className="coach-panel">
        <div className="coach-panel-top"><p>{coach.role}</p><span>{String(active + 1).padStart(2, '0')} / {String(coaches.length).padStart(2, '0')}</span></div>
        <h3>{coach.name}</h3>
        <strong>{coach.grade}</strong>
        <div className="coach-focus">{coach.focus}</div>
        <p className="coach-bio">{coach.bio}</p>
        <div className="coach-full-profile"><span>Coach profile</span>{coach.profile.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </article>
      <div className="coach-arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous coach"><ArrowLeft size={18} /></button><button type="button" onClick={() => move(1)} aria-label="Next coach"><ArrowRight size={18} /></button></div>
    </div>
    <div className="coach-selector" role="tablist" aria-label="Choose a coach">
      {coaches.map((item, index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={item.name}><span>{String(index + 1).padStart(2, '0')}</span>{item.name}</button>)}
    </div>
  </div>;
}
