'use client';

import { motion } from 'framer-motion';

import { EventCard } from '@/components/custom/EventCard';
import { getAllEventInstances } from '@/data/events';

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const EventsPageContent = () => {
  const componentName = 'EventsPageContent';
  const { upcoming, past } = getAllEventInstances();

  const hasUpcoming = upcoming.length > 0;
  const hasPast = past.length > 0;
  const hasNoEvents = !hasUpcoming && !hasPast;

  return (
    <div
      id={componentName}
      data-component={componentName}
      className="relative overflow-hidden"
    >
      {/* Background — dark with wall texture */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/wall.png')",
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
        {/* ─── Empty state ─────────────────────────────────────────── */}
        {hasNoEvents && (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-center text-2xl font-semibold text-slate-400 md:text-3xl">
              No events to show right now — check back soon!
            </p>
          </div>
        )}

        {/* ─── Upcoming Events ─────────────────────────────────────── */}
        {hasUpcoming && (
          <section aria-labelledby="upcoming-heading">
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mb-12 text-center"
            >
              <h2
                id="upcoming-heading"
                className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              >
                <span className="font-heading neon-text">Upcoming Events</span>
              </h2>
              <div className="mx-auto h-1 w-32 bg-linear-to-r from-transparent via-brand to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {upcoming.map((event) => (
                <EventCard
                  key={`${event.eventId}-${event.dateTime.toISOString()}`}
                  event={event}
                  variant="default"
                />
              ))}
            </motion.div>
          </section>
        )}

        {/* ─── Past Events ─────────────────────────────────────────── */}
        {hasPast && (
          <section
            aria-labelledby="past-heading"
            className={hasUpcoming ? 'mt-24' : ''}
          >
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mb-12 text-center"
            >
              <h2
                id="past-heading"
                className="mb-4 text-3xl font-bold tracking-tight text-slate-500 md:text-4xl"
              >
                <span className="font-heading">Past Events</span>
              </h2>
              <div className="mx-auto h-0.5 w-32 bg-linear-to-r from-transparent via-slate-600 to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {past.map((event) => (
                <EventCard
                  key={`${event.eventId}-${event.dateTime.toISOString()}`}
                  event={event}
                  variant="past"
                />
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
};
