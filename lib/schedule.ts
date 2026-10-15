export const schedule: { day: string; sessions: [string, string, string][] }[] = [
  { day: 'Monday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['6:30–8:00pm', 'Open mat', 'Gi & No-Gi']] },
  { day: 'Tuesday', sessions: [['5:30–6:30pm', 'Beginners', 'No-Gi fundamentals'], ['6:30–8:00pm', 'Main class', 'Alternating Gi / No-Gi']] },
  { day: 'Wednesday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['6:00–8:00pm', 'JitzJudo', 'Gi · Alan']] },
  { day: 'Thursday', sessions: [['6:30–8:00pm', 'No-Gi', 'Ricki']] },
  { day: 'Friday', sessions: [['12:00–1:30pm', 'Gi / No-Gi lunchtime', 'Steve · 1 hour coached + open mat'], ['5:30–6:30pm', 'Beginners', 'Fundamentals'], ['6:30–8:00pm', 'Main class', 'Gi / No-Gi']] },
  { day: 'Saturday', sessions: [['9:30–11:30am', 'JitzJudo', 'Alan']] },
];

const programmeSessions: Record<string, [number, number][]> = {
  beginners: [[1, 0], [4, 1]],
  'gi-jiu-jitsu': [[0, 0], [2, 0], [4, 0], [1, 1], [4, 2], [2, 1], [5, 0]],
  'no-gi': [[1, 0], [3, 0], [0, 0], [2, 0], [4, 0], [1, 1], [4, 2]],
  jitzjudo: [[2, 1], [5, 0]],
};

export function timesForProgramme(slug: string) {
  return (programmeSessions[slug] ?? []).map(([dayIndex, sessionIndex]) => {
    const day = schedule[dayIndex];
    const [time, title, detail] = day.sessions[sessionIndex];
    return `${day.day} ${time} · ${title} · ${detail}`;
  });
}
