import type { Metadata, Viewport } from 'next';
import { Lato, Oswald } from 'next/font/google';
import type React from 'react';

import { Footer } from '@/components/custom/Footer';
import { Navigation } from '@/components/custom/Navigation';
import { SITE_NAME, SITE_URL } from '@/lib/config';
// import { OrderOnlineButton } from '@/components/custom/OrderOnline';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#dc2626',
};

export const metadata: Metadata = {
  title: {
    default: "Bubbs Pub - South Elgin's Premier Sports Bar & Restaurant",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Experience Great Food, Drinks, and Atmosphere at Bubbs Pub in South Elgin. The perfect spot for sports, family dinners, and night outs.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Bubbs Pub - South Elgin's Premier Sports Bar & Restaurant",
    description:
      'Experience Great Food, Drinks, and Atmosphere at Bubbs Pub in South Elgin. The perfect spot for sports, family dinners, and night outs.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/landingPage/heroSection/heroSection4.png',
        width: 1200,
        height: 630,
        alt: "Bubbs Pub - South Elgin's Premier Sports Bar & Restaurant",
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Bubb's Corner Pub",
  image: `${SITE_URL}/images/landingPage/heroSection/heroSection4.png`,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+1-224-238-3168',
  menu: `${SITE_URL}/menu`,
  acceptsReservations: false,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '335 N McLean Blvd',
    addressLocality: 'South Elgin',
    addressRegion: 'IL',
    postalCode: '60177',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.9936,
    longitude: -88.2917,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '01:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday'],
      opens: '11:00',
      closes: '23:00',
    },
  ],
  servesCuisine: ['American', 'Bar Food'],
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${lato.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />
        {/* <OrderOnlineButton /> */}
      </body>
    </html>
  );
}
