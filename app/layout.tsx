import type { Metadata, Viewport } from 'next';
import { siteUrl } from '../lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Brazilian Jiu-Jitsu in Milton Keynes | Origin MK BJJ', template: '%s | Origin MK BJJ' },
  description: 'Train Brazilian Jiu-Jitsu in Milton Keynes at Origin MK BJJ. Beginner, Gi, No-Gi and JitzJudo classes at Kiln Farm. Your first class is free.',
  applicationName: 'Origin MK BJJ',
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'en_GB', siteName: 'Origin MK BJJ', url: '/', title: 'Brazilian Jiu-Jitsu in Milton Keynes | Origin MK BJJ', description: 'Beginner, Gi, No-Gi and JitzJudo classes in Kiln Farm, Milton Keynes. Your first class is free.', images: [{ url: '/training/origin-no-gi-guard.webp', width: 1800, height: 1352, alt: 'Origin MK BJJ athletes training No-Gi' }] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' }], apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }] },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = { themeColor: '#090909' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
