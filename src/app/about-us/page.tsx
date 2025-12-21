'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { contact } from '@/data/contact';

// Animated counter hook using Framer Motion
const useCountUp = (
  end: number,
  _duration: number = 2000,
  start: boolean = true
) => {
  const [count, setCount] = useState(0);
  const countValue = useMotionValue(0);
  const spring = useSpring(countValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (!start) return;

    const unsubscribe = spring.on('change', (latest) => {
      setCount(Math.floor(latest));
    });

    countValue.set(end);

    return () => {
      unsubscribe();
    };
  }, [end, start, countValue, spring]);

  return count;
};

// Hero Section
const AboutHeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/landingPage/heroSection/heroSection1.jpg"
        alt="Bubbs Corner Pub interior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm tracking-[0.4em] text-brand uppercase md:text-base"
        >
          South Elgin&apos;s Home Field
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 text-center text-4xl font-bold text-white uppercase tracking-tight md:text-6xl lg:text-7xl"
        >
          Our Story
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-1 w-24 origin-center bg-brand"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg
          className="h-8 w-8 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

// Story Section
const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="bg-black px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="mb-2 block text-sm tracking-[0.3em] text-brand uppercase"
          >
            Since Day One
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white uppercase tracking-tight md:text-4xl lg:text-5xl"
          >
            More Than Just a Pub
          </motion.h2>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-center text-lg leading-relaxed text-white/80 md:text-xl"
          >
            <span className="font-semibold text-white">
              Bubb&apos;s Corner Pub
            </span>{' '}
            is more than just a place to eat and drink—it&apos;s a{' '}
            <span className="font-semibold text-brand">
              vibrant community hub
            </span>{' '}
            in the heart of South Elgin, where food, sports, and friendship come
            together.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-center text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Rooted in the energy and charm of Midwestern towns, we offer an
            atmosphere that&apos;s both{' '}
            <span className="font-semibold text-white">family-friendly</span>{' '}
            and <span className="font-semibold text-white">game-day ready</span>
            , making it the perfect spot for fans and friends alike.
          </motion.p>

          {/* Decorative Quote */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto max-w-3xl py-8"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView
                  ? { scale: 1, opacity: 0.3 }
                  : { scale: 0.5, opacity: 0 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-0 top-0 text-6xl leading-none text-brand/30 md:text-8xl"
            >
              &ldquo;
            </motion.div>
            <blockquote className="px-8 text-center text-2xl leading-relaxed text-white italic md:px-12 md:text-3xl">
              This is more than a pub—it&apos;s your{' '}
              <span className="text-brand">home field advantage</span>.
            </blockquote>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView
                  ? { scale: 1, opacity: 0.3 }
                  : { scale: 0.5, opacity: 0 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-0 right-0 text-6xl leading-none text-brand/30 md:text-8xl"
            >
              &rdquo;
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Pillars Section
const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const pillars = [
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Community',
      description:
        'A welcoming space where neighbors become friends and every visit feels like coming home.',
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Elevated Comfort Food',
      description:
        'From sizzling wings to loaded nachos, our kitchen serves up familiar favorites with exceptional quality.',
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Game Day Ready',
      description:
        'Big-screen TVs, spirited atmosphere, and the perfect drinks to fuel your team spirit.',
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: 'Unforgettable Nights',
      description:
        'Craft beers, refreshing cocktails, and an energy that makes every visit memorable.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section ref={ref} className="bg-zinc-950 px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-2 block text-sm tracking-[0.3em] text-brand uppercase">
            What We Stand For
          </span>
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight md:text-4xl lg:text-5xl">
            The Bubb&apos;s Experience
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-lg border border-white/10 bg-black/50 p-8 text-center hover:border-brand/50 hover:bg-black/80"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 inline-flex items-center justify-center text-brand"
              >
                {pillar.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mb-3 text-xl text-white uppercase">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/60">
                {pillar.description}
              </p>

              {/* Hover Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: 64 }}
                className="absolute bottom-0 left-1/2 h-1 -translate-x-1/2 bg-brand"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// The Kitchen Section
const KitchenSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-black">
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">
        {/* Image Side */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={imageVariants}
          className="relative min-h-[400px] lg:min-h-full"
        >
          <Image
            src="/images/landingPage/heroSection/heroSection.jpg"
            alt="Kitchen and food at Bubbs"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/50 lg:bg-linear-to-l lg:from-black/80 lg:to-transparent" />
        </motion.div>

        {/* Content Side */}
        <div className="flex items-center px-8 py-16 lg:px-16 lg:py-24">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={contentVariants}
            className="max-w-xl"
          >
            <span className="mb-2 block text-sm tracking-[0.3em] text-brand uppercase">
              From Our Kitchen
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white uppercase tracking-tight md:text-4xl">
              Flavor That Fuels the Game
            </h2>

            <p className="mb-6 text-white/80 leading-relaxed">
              From the moment you walk in, you&apos;re welcomed by the aroma of
              elevated comfort food—
              <span className="font-semibold text-white">
                sizzling wings
              </span>,{' '}
              <span className="font-semibold text-white">loaded nachos</span>,{' '}
              <span className="font-semibold text-white">golden pretzels</span>,{' '}
              <span className="font-semibold text-white">hearty burgers</span>,
              and{' '}
              <span className="font-semibold text-white">rich flatbreads</span>{' '}
              straight from our kitchen.
            </p>

            <p className="mb-8 text-white/80 leading-relaxed">
              Our menu is crafted to fuel the energy of cheering fans and
              satisfy families looking for a casual night out, with quality
              ingredients and dishes that are both familiar and full of flavor.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-md border-2 border-brand bg-brand px-8 py-4 font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-brand-hover hover:bg-brand-hover"
              >
                Explore Our Menu
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Drinks Section
const DrinksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-zinc-950">
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">
        {/* Content Side */}
        <div className="order-2 flex items-center px-8 py-16 lg:order-1 lg:px-16 lg:py-24">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={contentVariants}
            className="max-w-xl"
          >
            <span className="mb-2 block text-sm tracking-[0.3em] text-brand uppercase">
              At the Bar
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white uppercase tracking-tight md:text-4xl">
              Cheers to Good Times
            </h2>

            <p className="mb-6 text-white/80 leading-relaxed">
              No pub experience is complete without a great drink in hand. At
              Bubb&apos;s, we pour a wide selection of{' '}
              <span className="font-semibold text-white">craft beers</span>,{' '}
              <span className="font-semibold text-white">pub staples</span>, and{' '}
              <span className="font-semibold text-white">
                refreshing cocktails
              </span>{' '}
              designed to complement every meal and every game.
            </p>

            <p className="mb-8 text-white/80 leading-relaxed">
              Pair that with our big-screen TVs, friendly staff, and spirited
              atmosphere, and you have the recipe for unforgettable nights in
              South Elgin.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-md border-2 border-white/20 bg-transparent px-8 py-4 font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-brand hover:bg-brand"
              >
                View Drink Menu
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Side */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={imageVariants}
          className="relative order-1 min-h-[400px] lg:order-2 lg:min-h-full"
        >
          <Image
            src="/images/landingPage/heroSection/heroSection2.jpg"
            alt="Bar and drinks at Bubbs"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-l from-transparent to-black/50 lg:bg-linear-to-r lg:from-black/80 lg:to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const beersOnTap = useCountUp(20, 2000, isInView);
  const tvScreens = useCountUp(12, 1500, isInView);
  const menuItems = useCountUp(50, 2500, isInView);

  const stats = [
    { value: beersOnTap, suffix: '+', label: 'Beers on Tap' },
    { value: tvScreens, suffix: '', label: 'Big Screen TVs' },
    { value: menuItems, suffix: '+', label: 'Menu Items' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section ref={ref} className="bg-brand px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
              >
                {stat.value}
                {stat.suffix}
              </motion.div>
              <div className="text-sm tracking-[0.2em] text-white/80 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Visit Us CTA Section
const VisitSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section ref={ref} className="bg-black px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="mb-2 block text-sm tracking-[0.3em] text-brand uppercase"
          >
            Join Us
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mb-6 text-3xl font-bold text-white uppercase tracking-tight md:text-4xl lg:text-5xl"
          >
            Your Table Awaits
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-white/70 leading-relaxed"
          >
            Whether it&apos;s football season, baseball playoffs, or a casual
            night to catch up with friends, we&apos;re here to make every visit
            memorable.
          </motion.p>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-10 space-y-4">
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white/90 transition-colors hover:text-brand"
            >
              <span className="font-semibold">{contact.address.full}</span>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\D/g, '')}`}
              className="block text-lg text-white/90 transition-colors hover:text-brand"
            >
              {contact.phone}
            </a>
            <div className="space-y-1 text-white/60">
              <p>{contact.hours.weekdays}</p>
              <p>{contact.hours.weekend}</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand bg-brand px-8 py-4 font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-brand-hover hover:bg-brand-hover"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Get Directions
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-md border-2 border-white/20 bg-transparent px-8 py-4 font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:border-brand hover:bg-brand"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const AboutUsPage = () => {
  return (
    <main>
      <AboutHeroSection />
      <StorySection />
      <PillarsSection />
      <KitchenSection />
      <DrinksSection />
      <StatsSection />
      <VisitSection />
    </main>
  );
};

export default AboutUsPage;
