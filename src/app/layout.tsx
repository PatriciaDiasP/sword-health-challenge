import type { Metadata } from 'next';
import { Montserrat, Outfit } from 'next/font/google';

import './globals.css';
import { PageContainer } from '@/components/page-container/PageContainer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Frontend Challenge',
  description: 'Sword Health - Frontend Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${montserrat.className}`}>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
