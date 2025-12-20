'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { navigationItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

import { MobileNav } from './MobileNav';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      id="Navigation"
      data-component="Navigation"
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="flex w-full items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-12 shrink-0 md:h-14 md:w-14">
          <Image
            src="/BubbsPubLogo.png"
            alt="Bubb's Corner Pub"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 48px, 56px"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {navigationItems.map((item) => {
            const isOrderNow = item.id === 'order';
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold uppercase tracking-wide transition-all',
                    isOrderNow
                      ? 'rounded bg-red-600 px-4 py-2.5 text-white hover:bg-red-700'
                      : 'border-b-2 border-transparent pb-1 text-neutral-200 hover:border-brand'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};
