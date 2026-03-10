'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import type { PubEvent } from '../types';
import {
  formatDisplayDate,
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const EventCard = ({ event, id, className }: EventCardProps) => {
  const componentName = 'EventCard';
  const group = getEventGroup(event);
  const isPast = group === 'past';
  const badges = getDisplayBadges(event);
  const timeRange = `${formatDisplayTime(event.startTime)} – ${formatDisplayTime(event.endTime)}`;

  return (
    <motion.div variants={cardVariants}>
      <Card
        id={id}
        data-component={componentName}
        className={cn(
          'group relative overflow-hidden border-2 bg-transparent! shadow-none! h-full transition-all duration-300',
          isPast
            ? 'border-white/10 opacity-60'
            : 'neon-border hover:neon-border-hover',
          className
        )}
      >
        {/* Image */}
        <div
          className={cn(
            'relative h-44 w-full overflow-hidden',
            isPast && 'grayscale'
          )}
        >
          <Image
            src={event.backgroundImage.desktop}
            alt={event.backgroundImage.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className={cn(
                  'rounded-full px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm',
                  isPast ? 'bg-white/5 text-slate-500' : getBadgeClasses(badge)
                )}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <CardContent className="relative space-y-3 p-4 bg-transparent!">
          {/* Name */}
          <div>
            <h3
              className={cn(
                'text-xl font-bold tracking-tight md:text-2xl',
                isPast ? 'text-slate-400' : 'text-white'
              )}
            >
              {event.name}
            </h3>
            <div className="mt-1.5 h-0.5 w-12 bg-brand/50" />
          </div>

          {/* Date & Time */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span
              className={cn(
                'flex items-center gap-1.5',
                isPast ? 'text-slate-500' : 'text-slate-300'
              )}
            >
              <Calendar className="h-3.5 w-3.5" />
              {formatDisplayDate(event.startDate)}
            </span>
            <span
              className={cn(
                'flex items-center gap-1.5',
                isPast ? 'text-slate-500' : 'text-brand'
              )}
            >
              <Clock className="h-3.5 w-3.5" />
              {timeRange}
            </span>
          </div>

          {/* Host */}
          {event.host && (
            <p
              className={cn(
                'text-xs',
                isPast ? 'text-slate-500' : 'text-slate-400'
              )}
            >
              Hosted by {event.host}
            </p>
          )}

          {/* Description */}
          <p
            className={cn(
              'line-clamp-2 text-sm leading-relaxed',
              isPast ? 'text-slate-500' : 'text-slate-300'
            )}
          >
            {event.description}
          </p>

          {/* Deals */}
          {event.deals.length > 0 && !isPast && (
            <div className="flex flex-wrap gap-1.5">
              {event.deals.slice(0, 2).map((deal) => (
                <span
                  key={deal}
                  className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand"
                >
                  {deal}
                </span>
              ))}
            </div>
          )}

          {/* Footer: Price + Sponsor */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <span
              className={cn(
                'font-semibold',
                isPast ? 'text-slate-500' : 'text-white'
              )}
            >
              {event.priceLabel}
            </span>
            {event.sponsor && (
              <span className="text-slate-500">
                Sponsored by {event.sponsor.name}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
