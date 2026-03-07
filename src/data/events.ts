export type Event = {
  id: string;
  title: string;
  description: string;
  scheduleLabel: string;
  day: string;
  time: string;
  imagePath: string;
};

export const events: Event[] = [
  {
    id: 'bingo',
    title: 'Bingo Night',
    description:
      'Gather your squad for a classic night of Bingo with great prizes and even better company.',
    scheduleLabel: 'Every Thursday',
    day: 'Thursday',
    time: '7:00 PM',
    imagePath: '/images/events/bingo-desktop.png',
  },
  {
    id: 'gaming',
    title: 'Gaming Go Live',
    description:
      'Enter to win a 65" Smart TV! See the bartender for your entry slip. Winner drawn on Friday, March 13th @ 7PM sharp.',
    scheduleLabel: 'Feb 9 – Mar 12',
    day: 'Winner Drawn Mar 13',
    time: '7:00 PM Sharp',
    imagePath: '/images/events/gaming-desktop.png',
  },
  {
    id: 'live-event',
    title: 'Live Entertainment',
    description:
      'Enjoy live music and performances that keep the energy high all night long.',
    scheduleLabel: 'Tonight Only',
    day: 'Friday, Mar 6',
    time: '7:00 PM – 9:00 PM',
    imagePath: '/images/events/live-event-desktop.png',
  },
  {
    id: 'poker',
    title: 'Poker Night',
    description:
      "Test your poker face and compete for the pot at Bubb's weekly poker tables.",
    scheduleLabel: 'Every Thursday',
    day: 'Thursday',
    time: '7:30 PM',
    imagePath: '/images/events/poker-desktop.png',
  },
];

// ─── EventInstance ──────────────────────────────────────────────────────────
// A concrete occurrence of an event with a specific dateTime.

export type EventInstance = {
  eventId: string;
  title: string;
  description: string;
  dateTime: Date;
  imagePath?: string;
};

/** Formats a Date as "Friday, Mar 6 · 7:00 PM" */
export function formatEventDate(dateTime: Date): string {
  const datePart = dateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
  const timePart = dateTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return `${datePart} · ${timePart}`;
}

/** Concrete event occurrences. Add or remove entries here to manage the events page. */
const eventInstances: EventInstance[] = [
  {
    eventId: 'live-event-mar-6',
    title: 'Live Entertainment',
    description:
      'Enjoy live music and performances that keep the energy high all night long.',
    dateTime: new Date('2026-03-06T19:00:00'),
    imagePath: '/images/events/live-event-desktop.png',
  },
  {
    eventId: 'gaming-draw-mar-13',
    title: 'Gaming Go Live — Draw Night',
    description:
      'Enter to win a 65" Smart TV! See the bartender for your entry slip. Winner drawn Friday, March 13th @ 7 PM sharp.',
    dateTime: new Date('2026-03-13T19:00:00'),
    imagePath: '/images/events/gaming-desktop.png',
  },
  {
    eventId: 'bingo-mar-12',
    title: 'Bingo Night',
    description:
      'Gather your squad for a classic night of Bingo with great prizes and even better company.',
    dateTime: new Date('2026-03-12T19:00:00'),
    imagePath: '/images/events/bingo-desktop.png',
  },
  {
    eventId: 'poker-mar-12',
    title: 'Poker Night',
    description:
      "Test your poker face and compete for the pot at Bubb's weekly poker tables.",
    dateTime: new Date('2026-03-12T19:30:00'),
    imagePath: '/images/events/poker-desktop.png',
  },
  {
    eventId: 'bingo-mar-5',
    title: 'Bingo Night',
    description:
      'Gather your squad for a classic night of Bingo with great prizes and even better company.',
    dateTime: new Date('2026-03-05T19:00:00'),
    imagePath: '/images/events/bingo-desktop.png',
  },
  {
    eventId: 'poker-mar-5',
    title: 'Poker Night',
    description:
      "Test your poker face and compete for the pot at Bubb's weekly poker tables.",
    dateTime: new Date('2026-03-05T19:30:00'),
    imagePath: '/images/events/poker-desktop.png',
  },
];

/** Returns event instances split into upcoming and past relative to now. */
export function getAllEventInstances(): {
  upcoming: EventInstance[];
  past: EventInstance[];
} {
  const now = new Date();
  const upcoming = eventInstances
    .filter((e) => e.dateTime >= now)
    .sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
  const past = eventInstances
    .filter((e) => e.dateTime < now)
    .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
  return { upcoming, past };
}
