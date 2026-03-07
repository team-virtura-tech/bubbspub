import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join us for upcoming events, live music, and game day parties at Bubbs Pub.',
};

const EVENT_IMAGES = [
  {
    id: 'live-event',
    alt: 'Live Event at Bubbs Pub',
    mobile: '/images/events/live-event-mobile.png',
    desktop: '/images/events/live-event-desktop.png',
  },
  {
    id: 'gaming',
    alt: 'Gaming Night at Bubbs Pub',
    mobile: '/images/events/gaming-mobile.png',
    desktop: '/images/events/gaming-desktop.png',
  },
  {
    id: 'bingo',
    alt: 'Bingo Night at Bubbs Pub',
    mobile: '/images/events/bingo-mobile.jpeg',
    desktop: '/images/events/bingo-desktop.png',
  },
  {
    id: 'poker',
    alt: 'Poker Night at Bubbs Pub',
    mobile: '/images/events/poker-mobile.jpg',
    desktop: '/images/events/poker-desktop.png',
  },
];

export default function EventsPage() {
  return (
    <div
      data-component="EventsPage"
      className="flex flex-col gap-3 p-3 pt-24 md:pt-28 bg-zinc-950"
    >
      {EVENT_IMAGES.map((img) => (
        <section
          key={img.id}
          className="relative w-full max-h-[calc(100vh-7rem)] md:max-h-[calc(100vh-8rem)] overflow-hidden rounded-lg"
        >
          {/* Mobile image */}
          <Image
            src={img.mobile}
            alt={img.alt}
            width={750}
            height={1000}
            className="block w-full h-auto max-h-[calc(100vh-7rem)] object-contain rounded-lg md:hidden"
            sizes="100vw"
            priority={img.id === 'live-event'}
          />
          {/* Desktop image */}
          <Image
            src={img.desktop}
            alt={img.alt}
            width={1920}
            height={1080}
            className="hidden w-full h-auto max-h-[calc(100vh-8rem)] object-contain rounded-lg md:block"
            sizes="100vw"
            priority={img.id === 'live-event'}
          />
        </section>
      ))}
    </div>
  );
}
