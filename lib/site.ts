export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://originmkbjj.co.uk').replace(/\/$/, '');
export const mapsUrl = 'https://share.google/TPHTOwVK6o8YVpL8H';
export const businessId = `${siteUrl}/#academy`;
export const websiteId = `${siteUrl}/#website`;
export const academyAddress = 'Unit 8, Potters Lane, Kiln Farm, Milton Keynes MK11 3HE';

export const resources = [
  { href: '/timetable/', label: 'Class timetable', description: 'All six training days, beginner sessions and open mat.' },
  { href: '/find-us/', label: 'Find us in Kiln Farm', description: 'Address, Google Maps and help planning your visit.' },
  { href: '/coaches/', label: 'Meet the BJJ coaches', description: 'The experience and approach of all four coaches.' },
  { href: '/first-bjj-class/', label: 'Your first BJJ class', description: 'What to wear, how a session works and training etiquette.' },
  { href: '/gi-vs-no-gi/', label: 'Gi vs No-Gi BJJ', description: 'Compare equipment, grips and the right starting point.' },
  { href: '/bjj-faq/', label: 'BJJ questions answered', description: 'First-class cost, experience, kit and how to get started.' },
];

export const programmes = [
  { href: '/beginners/', label: 'Beginners' },
  { href: '/gi-jiu-jitsu/', label: 'Gi Jiu-Jitsu' },
  { href: '/no-gi/', label: 'No-Gi Jiu-Jitsu' },
  { href: '/jitzjudo/', label: 'JitzJudo' },
];
