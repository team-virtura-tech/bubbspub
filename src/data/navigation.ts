export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  type: 'link';
};

export const navigationItems: NavigationItem[] = [
  {
    id: 'menu',
    label: 'Menu',
    href: '/menu',
    type: 'link',
  },
  {
    id: 'events',
    label: 'Upcoming Events',
    href: '/events',
    type: 'link',
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    type: 'link',
  },
  {
    id: 'vip',
    label: 'Become a VIP',
    href: '/vip',
    type: 'link',
  },
  {
    id: 'signin',
    label: 'Sign In',
    href: '/signin',
    type: 'link',
  },
];

export const orderOnlineItem: NavigationItem = {
  id: 'order',
  label: 'Order Online',
  href: '/order-online',
  type: 'link',
};
