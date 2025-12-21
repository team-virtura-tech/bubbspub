export type NavigationItem = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: NavigationItem[];
};

export const navigationItems: NavigationItem[] = [
  {
    id: 1,
    title: 'Menu',
    url: '/menu',
    dropdown: true,
    items: [
      {
        id: 11,
        title: 'Food Menu',
        url: '/menu',
      },
      {
        id: 12,
        title: 'Happy Hour',
        url: '/menu#happy-hour',
      },
      {
        id: 13,
        title: 'Daily Special',
        url: '/menu#daily-special',
      },
      {
        id: 14,
        title: 'Online Order',
        url: '/order-online',
      },
    ],
  },
  {
    id: 2,
    title: 'Drinks',
    url: '/drinks',
  },
  {
    id: 3,
    title: 'Upcoming Events',
    url: '/events',
  },
  {
    id: 4,
    title: 'About Us',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact Us',
    url: '/contact',
  },
];

export const orderOnlineItem: NavigationItem = {
  id: 6,
  title: 'Order Online',
  url: '/order-online',
};
