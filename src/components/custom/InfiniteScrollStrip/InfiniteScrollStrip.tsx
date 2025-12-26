'use client';

import { useReducedMotion } from 'framer-motion';
import { ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';
export type InfiniteScrollStripProps = {
  items: Array<string | ReactNode>;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'medium' | 'fast' | number;
  className?: string;
  id?: string;
};

const SPEED_MAP = {
  slow: 40,
  medium: 25,
  fast: 15,
} as const;

export const InfiniteScrollStrip = ({
  items,
  direction = 'right',
  speed = 'slow',
  className,
  id,
}: InfiniteScrollStripProps) => {
  const reduce = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const componentName = 'InfiniteScrollStrip';
  const rootId = id ?? componentName;

  // Determine animation duration
  const duration = typeof speed === 'number' ? speed : SPEED_MAP[speed];

  // Duplicate items enough times to ensure seamless infinite scroll
  const duplicateCount = 20;
  const duplicatedItems = Array.from(
    { length: duplicateCount },
    () => items
  ).flat();

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn(
        'relative w-full overflow-hidden bg-muted/30 py-4',
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
      <div
        className="flex items-center gap-12 whitespace-nowrap"
        style={{
          animation: reduce
            ? 'none'
            : `scroll-${direction === 'right' ? 'left' : 'right'} ${duration}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${componentName}-item-${index}`}
            className="flex items-center justify-center"
          >
            {typeof item === 'string' ? (
              <span
                className="font-heading font-semibold uppercase tracking-wide"
                style={{ fontSize: '5rem' }}
              >
                {item}
              </span>
            ) : (
              <div
                className="flex items-center justify-center [&>svg]:h-full [&>svg]:w-full"
                style={{ width: '130px', height: '130px' }}
              >
                {item}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
