'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import Menu from '@/components/ui/navbar';
import { navigationItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

import { MobileNav } from './MobileNav';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      id="Navigation"
      data-component="Navigation"
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-colors duration-300',
        isMobileMenuOpen ? 'bg-black' : 'bg-black/30 backdrop-blur-md'
      )}
    >
      <div className="flex w-full items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <Link href="/" className="relative h-14 w-14 shrink-0 md:h-16 md:w-16">
          <Image
            src="/bubbs_logo_transparent.png"
            alt="Bubb's Corner Pub"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 56px, 64px"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Menu list={navigationItems} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <MenuToggleIcon open={isMobileMenuOpen} className="h-8 w-8" />
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
