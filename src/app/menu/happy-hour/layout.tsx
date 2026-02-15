import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Happy Hour',
  description:
    'Enjoy happy hour deals on drinks and food at Bubbs Pub in South Elgin. Great prices, great times.',
};

export default function HappyHourLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
