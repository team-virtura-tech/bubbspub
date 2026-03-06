import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join us for upcoming events, live music, and game day parties at Bubbs Pub.',
};

const EVENT_IMAGES = [
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
      className="space-y-3 p-3 pt-24 md:pt-28 bg-zinc-950"
    >
      {EVENT_IMAGES.map((img) => (
        <section key={img.id} className="relative w-full">
          {/* Mobile image */}
          <Image
            src={img.mobile}
            alt={img.alt}
            width={750}
            height={1000}
            className="block h-auto w-full rounded-lg md:hidden"
            sizes="100vw"
            priority={img.id === 'bingo'}
          />
          {/* Desktop image */}
          <Image
            src={img.desktop}
            alt={img.alt}
            width={1920}
            height={1080}
            className="hidden h-auto w-full rounded-lg md:block"
            sizes="100vw"
            priority={img.id === 'bingo'}
          />
        </section>
      ))}
    </div>
  );
}
