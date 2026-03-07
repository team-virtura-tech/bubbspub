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
