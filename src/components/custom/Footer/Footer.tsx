'use client';

import Lottie from 'lottie-react';
import { Beer, Instagram, Music, Users } from 'lucide-react';
import Link from 'next/link';

import beerGlassesAnimation from '@/../public/icons/animated/two-glasses-pint-beer-hover-pinch.json';
import { InfiniteScrollStrip } from '@/components/custom/InfiniteScrollStrip';
import { cn } from '@/lib/utils';

export type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => {
  const componentName = 'Footer';
  const currentYear = new Date().getFullYear();

  // All links in a single array
  const allLinks = [
    { id: 11, title: 'Food Menu', url: '/menu' },
    { id: 12, title: 'Happy Hour', url: '/menu#happy-hour' },
    { id: 13, title: 'Daily Special', url: '/menu#daily-special' },
    { id: 2, title: 'Drinks', url: '/drinks' },
    { id: 3, title: 'Upcoming Events', url: '/events' },
    { id: 4, title: 'About Us', url: '/about-us' },
    { id: 5, title: 'Contact Us', url: '/contact-us' },
    { id: 14, title: 'Online Order', url: '/order-online' },
  ];
  // bg-slate-950
  return (
    <footer
      id={componentName}
      data-component={componentName}
      className={cn('bg-brand text-white', className)}
    >
      {/* Infinite Scroll Strip at the Top */}
      <InfiniteScrollStrip
        items={[
          'Bubbs Corner Pub',
          <Beer key="beer" />,
          <Music key="music" />,
          <Users key="users" />,
          'Bubbs Corner Pub',
          <Beer key="beer" />,
          <Music key="music" />,
          <Users key="users" />,
        ]}
        speed="slow"
        direction="right"
        className="bg-primary/10 text-white"
      />

      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Animated Logo/Icon - Centered */}
          <div className="flex items-center justify-center">
            <Lottie
              animationData={beerGlassesAnimation}
              loop={true}
              autoplay={true}
              className="size-32 md:size-40"
            />
          </div>

          {/* Navigation Links - Horizontal Below Logo */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {allLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-sm transition-all hover:translate-y-[-2px] hover:text-white md:text-base"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center">
          {/* Privacy Links */}
          <div className="flex flex-wrap gap-4 text-sm text-white/70 md:gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy & Cookie Policy
            </Link>
            <Link
              href="/accessibility"
              className="transition-colors hover:text-white"
            >
              Accessibility Statement
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="size-5" />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <div className="w-full text-sm text-white/70 md:w-auto md:text-right">
            © {currentYear} All Rights Reserved
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="mt-6 text-xs text-white/50 md:text-right">
          These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease.
        </div>
      </div>
    </footer>
  );
};
