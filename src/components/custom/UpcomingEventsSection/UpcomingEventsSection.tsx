'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { events } from '@/data/events';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
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

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const UpcomingEventsSection = () => {
  const componentName = 'UpcomingEventsSection';

  if (events.length === 0) {
    return null;
  }

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative overflow-hidden bg-linear-to-b from-stone-950 via-stone-900 to-stone-950 px-4 py-20 md:px-8 lg:px-16 lg:py-32"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-350">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <motion.span
              className="block font-heading uppercase"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
            >
              {['Upcoming', 'Events'].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  transition={{ duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-8 h-1 w-40 bg-linear-to-r from-transparent via-brand to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            Something exciting is always happening at{' '}
            <span className="font-semibold text-white">
              Bubb&apos;s Corner Pub
            </span>
            . Join us for our weekly events and make every night memorable.
          </motion.p>
        </div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {events.map((event, index) => (
            <motion.div key={event.id} variants={cardVariants}>
              <Card className="relative overflow-hidden border-2 neon-border bg-transparent! shadow-none! h-full">
                <CardContent className="relative p-4 bg-transparent! flex flex-col gap-3">
                  {/* Day badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="self-start rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-lg"
                  >
                    {event.scheduleLabel}
                  </motion.div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                      {event.title}
                    </h3>
                    <div className="mt-1.5 h-0.5 w-12 bg-brand/50" />
                  </div>

                  {/* Time */}
                  <p className="text-sm font-semibold text-brand">
                    {event.day} · {event.time}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-400">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-brand/50 text-brand hover:bg-brand/10 hover:text-brand"
          >
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
