import type { Metadata } from 'next';

import {
  EventsHero,
  EventsPageContent,
  events,
  generateEventsJsonLd,
} from '@/features/events';

export const metadata: Metadata = {
  title: 'Events — Bingo, Poker, Live Music & More',
  description:
    "Weekly bar bingo, free Texas Holdem poker tournaments, live music, St. Paddy's Day parties, and more at Bubb's Corner Pub in South Elgin, IL. Free entry — join us!",
  keywords: [
    'bingo night',
    'bar bingo',
    'poker tournament',
    'Texas Holdem poker',
    'live music bar',
    "St. Paddy's Day party",
    'bar events South Elgin',
    'pub events near me',
    'free entry events',
    'sports bar events',
    'South Elgin IL events',
    'Kane County bar events',
  ],
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: "Events at Bubb's Corner Pub — Bingo, Poker, Live Music & More",
    description:
      "Weekly bar bingo, free Texas Holdem poker, live music nights, and seasonal parties at Bubb's Corner Pub in South Elgin, IL.",
    url: '/events',
    type: 'website',
    images: [
      {
        url: '/images/eventsPage/bingo.png',
        width: 1200,
        height: 630,
        alt: "Events at Bubb's Corner Pub — South Elgin, IL",
      },
    ],
  },
};

export default function EventsPage() {
  const eventsJsonLd = generateEventsJsonLd(events);
  return (
    <div data-component="EventsPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <EventsHero />
      <EventsPageContent />
    </div>
  );
}
