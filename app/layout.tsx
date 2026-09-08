import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Origin MK BJJ | Brazilian Jiu-Jitsu in Milton Keynes',
  description: 'Gi, No-Gi, JitzJudo, beginners and open mat sessions at Origin MK BJJ, Unit 8 Potters Lane, Kiln Farm, Milton Keynes.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
