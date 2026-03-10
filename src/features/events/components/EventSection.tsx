'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import type { PubEvent } from '../types';

import { EventCard } from './EventCard';

export type EventSectionProps = {
  title: string;
  variant: 'today' | 'upcoming' | 'past';
  events: PubEvent[];
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const EventSection = ({
  title,
  variant,
  events,
  className,
}: EventSectionProps) => {
  const isPast = variant === 'past';
  const isToday = variant === 'today';

  return (
    <section
      data-component="EventSection"
      aria-label={title}
      className={className}
    >
      {/* Section Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mb-12 text-center"
      >
        <h2
          className={cn(
            'mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
            isPast && 'text-slate-500'
          )}
        >
          <span className={cn('font-heading', !isPast && 'neon-text')}>
            {isToday && (
              <span className="relative mr-3 inline-flex h-3 w-3 align-middle">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
              </span>
            )}
            {title}
          </span>
        </h2>
        <div
          className={cn(
            'mx-auto w-32',
            isPast
              ? 'h-0.5 bg-linear-to-r from-transparent via-slate-600 to-transparent'
              : 'h-1 bg-linear-to-r from-transparent via-brand to-transparent'
          )}
        />
      </motion.div>

      {/* Events Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </section>
  );
};
