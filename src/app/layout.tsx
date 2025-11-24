import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.css';
import { PageContainer } from '@/components/page-container/PageContainer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
      <body className={montserrat.className}>
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
