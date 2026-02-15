import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Daily Specials',
  description:
    'Check out our rotating daily specials at Bubbs Pub — something delicious every day of the week.',
};

export default function DailySpecialLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
