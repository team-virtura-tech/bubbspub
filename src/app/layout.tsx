import type { Metadata } from 'next';
import { Lato, Oswald } from 'next/font/google';
import type React from 'react';

import { Footer } from '@/components/custom/Footer';
import { Navigation } from '@/components/custom/Navigation';
import { OrderOnlineButton } from '@/components/custom/OrderOnline';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bubbs Pub',
  description: 'Bar & Restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${lato.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <OrderOnlineButton />
      </body>
    </html>
  );
}
