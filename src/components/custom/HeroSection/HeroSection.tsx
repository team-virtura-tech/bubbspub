'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

import { contact } from '@/data/contact';

export const HeroSection = () => {
  const componentName = 'HeroSection';
  const reduce = useReducedMotion();

  // Format phone for tel: link (remove non-digits)
  const phoneHref = `tel:${contact.phone.replace(/\D/g, '')}`;

  // Use Framer Motion's useScroll for performant parallax (no re-renders)
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, (value) => value * 0.5);

  // Parallax offset: image moves at 0.5x scroll speed (only if motion enabled)
  const parallaxOffset = reduce ? 0 : parallaxY;

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.1 }}
        animate={reduce ? {} : { scale: 1.0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          y: parallaxOffset,
        }}
      >
        <Image
          src="/images/landingPage/heroSection/heroSection4.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
      </motion.div>

      {/* Dark Gradient Overlay - Left Side */}
      {/* <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/70 via-black/40 to-transparent" /> */}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-6 md:px-12 lg:px-16">
        <div className="flex max-w-2xl flex-col">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-left text-4xl font-bold tracking-[0.375rem] text-white md:text-5xl lg:text-6xl"
          >
            Your Neighborhood.
          </motion.h1>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            className="text-left text-4xl font-bold tracking-[0.375rem] text-white md:text-5xl lg:text-6xl"
          >
            Your Pub.
          </motion.h1>
        </div>
      </div>

      {/* Address & Phone at Bottom */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
        className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center text-center"
      >
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm font-extrabold tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-80 md:text-base lg:text-lg"
        >
          {contact.address.full}
        </a>
        <a
          href={phoneHref}
          className="cursor-pointer mt-2 text-sm font-extrabold tracking-[0.15em] text-white transition-opacity hover:opacity-80 md:text-base lg:text-lg"
        >
          {contact.phone}
        </a>
      </motion.div>
    </section>
  );
};
