import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Our story, our community, and why Bubbs Pub is South Elgin's home field advantage.",
};

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
