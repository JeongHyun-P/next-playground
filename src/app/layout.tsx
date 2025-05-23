import { Geist } from 'next/font/google';
import './global.css'

const geist = Geist({
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
