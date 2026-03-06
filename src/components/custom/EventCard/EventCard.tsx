'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { type EventInstance, formatEventDate } from '@/data/events';
import { cn } from '@/lib/utils';

export type EventCardProps = {
  event: EventInstance;
  variant?: 'default' | 'past';
  id?: string;
  className?: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const EventCard = ({
  event,
  variant = 'default',
  id,
  className,
}: EventCardProps) => {
  const componentName = 'EventCard';
  const rootId = id ?? undefined;
  const isPast = variant === 'past';

  const formattedDate = formatEventDate(event.dateTime);
  // Split "Friday, Mar 13 · 7:00 PM" into date part and time part
  const [datePart, timePart] = formattedDate.split(' · ');

  return (
    <motion.div variants={cardVariants}>
      <Card
        id={rootId}
        data-component={componentName}
        className={cn(
          'group relative overflow-hidden border-2 bg-transparent! shadow-none! transition-all duration-300',
          isPast
            ? 'border-white/10 opacity-60'
            : 'neon-border hover:neon-border-hover',
          className
        )}
      >
        {/* Event image or placeholder */}
        {event.imagePath ? (
          <div
            className={cn(
              'relative h-44 w-full overflow-hidden',
              isPast && 'grayscale'
            )}
          >
            <Image
              src={event.imagePath}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>
        ) : (
          <div
            className={cn(
              'relative flex h-32 w-full items-center justify-center bg-white/5',
              isPast && 'grayscale'
            )}
          >
            <Calendar className="h-10 w-10 text-brand/40" />
          </div>
        )}

        <CardContent className="relative space-y-3 p-4">
          {/* Status badge */}
          {isPast ? (
            <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-400">
              Past Event
            </span>
          ) : (
            <span className="inline-block rounded-full bg-brand/20 px-2.5 py-0.5 text-xs font-semibold text-brand">
              Upcoming
            </span>
          )}

          {/* Title */}
          <h3
            className={cn(
              'text-xl font-bold tracking-tight md:text-2xl',
              isPast ? 'text-slate-400' : 'text-white'
            )}
          >
            {event.title}
          </h3>

          {/* Date & Time */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span
              className={cn(
                'flex items-center gap-1.5',
                isPast ? 'text-slate-500' : 'text-slate-300'
              )}
            >
              <Calendar className="h-3.5 w-3.5" />
              {datePart}
            </span>
            {timePart && (
              <span
                className={cn(
                  'flex items-center gap-1.5',
                  isPast ? 'text-slate-500' : 'text-brand'
                )}
              >
                <Clock className="h-3.5 w-3.5" />
                {timePart}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            className={cn(
              'line-clamp-3 text-sm leading-relaxed',
              isPast ? 'text-slate-500' : 'text-slate-300'
            )}
          >
            {event.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
