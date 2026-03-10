'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import type { PubEvent } from '../types';
import {
  formatDisplayTime,
  getBadgeClasses,
  getDisplayBadges,
  getEventGroup,
} from '../utils';

export type EventCardProps = {
  event: PubEvent;
  id?: string;
  className?: string;
};

/** Format YYYY-MM-DD → { day: "04", month: "MAR" } */
function formatShortDate(dateStr: string): { day: string; month: string } {
  const date = new Date(
    ...(dateStr
      .split('-')
      .map((v, i) => (i === 1 ? Number(v) - 1 : Number(v))) as [
      number,
      number,
      number,
    ])
  );
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
  };
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const EventCard = ({ event, id, className }: EventCardProps) => {
  const componentName = 'EventCard';
  const reduce = useReducedMotion();
  const group = getEventGroup(event);
  const isPast = group === 'past';
  const badges = getDisplayBadges(event);
  const { day, month } = formatShortDate(event.startDate);
  const end =
    event.endDate !== event.startDate ? formatShortDate(event.endDate) : null;
  const timeRange = `${formatDisplayTime(event.startTime)} – ${formatDisplayTime(event.endTime)}`;

  return (
    <motion.article
      id={id}
      data-component={componentName}
      variants={cardVariants}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(
        'group relative w-full overflow-hidden',
        isPast && 'opacity-50 grayscale',
        className
      )}
    >
      {/* Background image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
        <Image
          src={event.backgroundImage.desktop}
          alt={event.backgroundImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col p-5 px-8 md:p-8 md:px-16 lg:p-10 lg:px-20">
        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap items-start gap-2 pt-1">
            {badges.map((badge) => (
              <span
                key={badge}
                className={cn(
                  'border px-3 py-1 text-[10px] font-bold tracking-widest uppercase',
                  isPast
                    ? 'border-white/20 text-slate-500'
                    : getBadgeClasses(badge),
                  'bg-clip-padding backdrop-blur-sm'
                )}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Main content row — text left, date right on desktop */}
        <div className="my-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left: text content */}
          <div className="max-w-2xl space-y-3">
            <h3
              className={cn(
                'font-heading text-3xl leading-tight font-black tracking-tight uppercase md:text-4xl lg:text-5xl',
                isPast ? 'text-slate-400' : 'text-white'
              )}
            >
              {event.name}
            </h3>

            <p
              className={cn(
                'max-w-xl text-sm leading-relaxed md:text-base',
                isPast ? 'text-slate-500' : 'text-slate-300'
              )}
            >
              {event.description}
            </p>

            {/* Deals as arrow-prefixed list */}
            {event.deals.length > 0 && !isPast && (
              <ul className="space-y-1 pt-1">
                {event.deals.map((deal) => (
                  <li
                    key={deal}
                    className="flex items-start gap-2 text-xs font-semibold tracking-wide text-white uppercase md:text-sm"
                  >
                    <span className="text-brand">&rarr;</span>
                    {deal}
                  </li>
                ))}
              </ul>
            )}

            {/* Hosted by */}
            {event.host && (
              <p
                className={cn(
                  'pt-2 text-[10px] font-medium tracking-widest uppercase md:text-xs',
                  isPast ? 'text-slate-600' : 'text-slate-500'
                )}
              >
                Hosted by {event.host}
              </p>
            )}
          </div>

          {/* Right: date & time — stacked on mobile, right-aligned on desktop */}
          <div
            className={cn(
              'flex shrink-0 items-center gap-4 md:flex-col md:items-end md:gap-1 md:text-right',
              isPast ? 'text-slate-500' : 'text-white'
            )}
          >
            {/* Recurrence label */}
            {event.isRecurring && event.recurrence && !isPast && (
              <span className="hidden text-[10px] font-medium tracking-widest uppercase md:block">
                {event.recurrence.label}
              </span>
            )}

            {/* Day + Month */}
            <div className="flex items-baseline gap-2 font-heading md:flex-col md:items-end md:gap-0">
              <span className="text-4xl leading-none font-black md:text-6xl lg:text-7xl">
                {day}
              </span>
              <span className="text-xl font-bold uppercase md:text-2xl">
                {month}
              </span>
            </div>

            {/* End date for recurring events */}
            {end && (
              <div className="flex items-baseline gap-1 font-heading text-sm md:flex-col md:items-end md:gap-0">
                <span className={isPast ? 'text-slate-600' : 'text-slate-400'}>
                  to
                </span>
                <span className="text-lg leading-none font-black md:text-2xl">
                  {end.day}
                </span>
                <span className="text-sm font-bold uppercase md:text-base">
                  {end.month}
                </span>
              </div>
            )}

            {/* Time + recurrence (mobile inline) */}
            <div className="flex flex-col items-start gap-0.5 text-xs md:items-end md:text-sm">
              <span className={isPast ? 'text-slate-600' : 'text-slate-400'}>
                {timeRange}
              </span>
              {event.isRecurring && event.recurrence && !isPast && (
                <span className="text-slate-500 md:hidden">
                  {event.recurrence.label}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
