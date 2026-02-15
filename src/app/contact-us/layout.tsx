import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Bubbs Pub. Find our location, hours, phone number, and send us a message.',
};

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
