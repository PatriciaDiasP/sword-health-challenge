import type { Metadata, Viewport } from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import { PageContainer } from '@/components/page-container/PageContainer';
import Header from '@/components/header/Header';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Frontend Challenge',
  description: 'Sword Health - Frontend Challenge',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.style} ${montserrat.className}`}>
        <Header />
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
