'use client';

import { motion, useReducedMotion } from 'framer-motion';

export const EventsHero = () => {
  const componentName = 'EventsHero';
  const reduce = useReducedMotion();

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative flex flex-col items-center justify-center bg-black px-4 pt-32 pb-12 md:pt-40 md:pb-16"
    >
      <motion.p
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-xs font-medium tracking-[0.3em] text-slate-400 uppercase md:text-sm"
      >
        Bubb&apos;s Corner Pub
      </motion.p>

      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-5xl font-black tracking-tight text-white uppercase md:text-7xl lg:text-8xl"
      >
        What&apos;s On
      </motion.h1>

      <motion.div
        initial={reduce ? false : { scaleX: 0 }}
        animate={reduce ? {} : { scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 h-1 w-20 bg-brand md:w-28"
      />
    </section>
  );
};
