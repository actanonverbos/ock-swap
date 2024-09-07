import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Miggles Swap',
  description: 'Swap your tokens with Miggles',
  openGraph: {
    title: 'Miggles Swap',
    description: 'Swap your tokens with Miggles',
    images: [`${NEXT_PUBLIC_URL}/miggles-logo.png`],
  },
  icons: {
    icon: '/miggles-logo.png',
    apple: '/miggles-logo.png',
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-900 to-purple-900">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
