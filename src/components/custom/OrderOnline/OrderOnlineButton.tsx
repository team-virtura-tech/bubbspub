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
      className={cn('fixed right-0 top-1/2 -translate-y-1/2 z-40', className)}
    >
      <Link
        href={orderOnlineItem.href}
        className="group flex flex-col items-center gap-3 bg-brand px-4 py-6 rounded-l-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:px-5"
        style={{ writingMode: 'vertical-rl' }}
      >
        {/* Order Online Text - Vertical */}
        <span className="text-sm font-bold uppercase tracking-[0.15em] text-white">
          {orderOnlineItem.label}
        </span>
      </Link>
    </div>
  );
};
