'use client';

import Link from 'next/link';

import { orderOnlineItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

export type OrderOnlineButtonProps = {
  className?: string;
};

export const OrderOnlineButton = ({ className }: OrderOnlineButtonProps) => {
  return (
    <div
      id="OrderOnlineButton"
      data-component="OrderOnlineButton"
      className={cn(
        // Mobile: bottom bar, full width
        'fixed bottom-0 left-0 w-full z-40',
        // Desktop: right-side pill
        'md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-auto',
        className
      )}
    >
      <Link
        href={orderOnlineItem.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          // Mobile: full-width horizontal bar
          'cursor-pointer group flex flex-row items-center justify-center gap-3',
          'bg-brand px-4 py-4 rounded-t-2xl shadow-lg',
          'transition-all duration-300 hover:shadow-xl',
          // Desktop: vertical pill
          'md:flex-col md:px-4 md:py-6 md:rounded-t-none md:rounded-l-2xl',
          'md:[writing-mode:vertical-rl] md:hover:px-5'
        )}
      >
        <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
          {orderOnlineItem.title}
        </span>
      </Link>
    </div>
  );
};
