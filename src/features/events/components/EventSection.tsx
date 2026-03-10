'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/lib/utils';

import type { PubEvent } from '../types';

import { EventCard } from './EventCard';

export type EventSectionProps = {
  title: string;
  variant: 'today' | 'upcoming' | 'past';
  events: PubEvent[];
  className?: string;
};

export const EventSection = ({
  title,
  variant,
  events,
  className,
}: EventSectionProps) => {
  const reduce = useReducedMotion();
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
        initial={reduce ? false : { opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="mb-8 md:mb-14"
      >
        <h2
          className={cn(
            'text-2xl font-bold tracking-tight uppercase md:text-3xl lg:text-4xl',
            isPast ? 'text-slate-500' : 'text-white'
          )}
        >
          {isToday && (
            <span className="relative mr-3 inline-flex h-2.5 w-2.5 align-middle">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
          )}
          {title}
        </h2>
        <div
          className={cn(
            'mt-3',
            isPast ? 'h-px w-16 bg-slate-700' : 'h-0.5 w-16 bg-brand'
          )}
        />
      </motion.div>

      {/* Events — stacked full-width */}
      <div className="flex flex-col gap-6 md:gap-12">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};
