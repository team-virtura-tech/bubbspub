import type { Metadata } from 'next';

import { EventsHero, EventsPageContent } from '@/features/events';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join us for trivia, karaoke, live music, and more at Bubbs Corner Pub.',
};

export default function EventsPage() {
  return (
    <div data-component="EventsPage">
      <EventsHero />
      <EventsPageContent />
    </div>
  );
}
