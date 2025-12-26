'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  getCurrentDayName,
  getCurrentDaySpecials,
  type DailySpecial,
} from '@/data/daily-specials';

const formatPrice = (price: number | string): string => {
  if (typeof price === 'string') {
    return price;
  }
  return `$${price.toFixed(price % 1 === 0 ? 0 : 2)}`;
};

const formatDayName = (day: DailySpecial['day']): string => {
  return day.charAt(0).toUpperCase() + day.slice(1);
};

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

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const TodaySpecialSection = () => {
  const componentName = 'TodaySpecialSection';

  const todaysSpecials = useMemo(() => getCurrentDaySpecials(), []);
  const currentDayName = useMemo(() => getCurrentDayName(), []);

  // Don't render if there are no specials for today
  if (todaysSpecials.length === 0) {
    return null;
  }

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative overflow-hidden px-4 py-20 md:px-8 lg:px-16 lg:py-32"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/wall.png')",
        }}
      >
        {/* Subtle dark overlay to ensure text readability while preserving texture */}
        <div className="absolute inset-0 bg-neutral-950/50" />
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="block font-heading neon-text">
              Today&apos;s Special
            </span>
            <span className="mt-2 block font-heading neon-text">
              {formatDayName(currentDayName)}
            </span>
          </h2>

          <div className="mx-auto mb-8 h-1 w-40 bg-gradient-to-r from-transparent via-brand to-transparent" />

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Check out our{' '}
            <span className="font-semibold text-brand">
              {formatDayName(currentDayName)} specials
            </span>
            . Great deals available all day!
          </p>
        </motion.div>

        {/* Specials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {todaysSpecials.map((special, index) => (
            <motion.div key={special.id} variants={cardVariants}>
              <Card className="relative overflow-hidden border-2 neon-border !bg-transparent !shadow-none">
                <CardContent className="relative p-4 !bg-transparent">
                  {/* Price badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1.5 text-sm font-bold text-white shadow-lg"
                  >
                    {formatPrice(special.price)}
                  </motion.div>

                  {/* Content */}
                  <div className="pr-16">
                    <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                      {special.item}
                    </h3>
                    <div className="mt-1.5 h-0.5 w-12 bg-brand/50" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        {todaysSpecials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-slate-400">
              Visit us today to enjoy these amazing deals!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
