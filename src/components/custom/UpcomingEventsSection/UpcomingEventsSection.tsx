'use client';

import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import { ImagesSlider } from '@/components/ui/images-slider';
import { getEventSlides } from '@/data/events';

const FALLBACK_IMAGE = '/images/upcomingEventsPage/heroSection1.jpg';

export const UpcomingEventsSection = () => {
  const componentName = 'UpcomingEventsSection';
  const slides = getEventSlides();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Don't render if there are no upcoming events
  if (slides.length === 0) {
    return null;
  }

  // Build images array — use event imagePath or shared fallback
  const images = slides.map((s) => s.imagePath || FALLBACK_IMAGE);
  const currentSlide = slides[activeIndex];

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative w-full"
    >
      <ImagesSlider
        images={images}
        className="h-[70vh] min-h-[480px] md:h-[80vh]"
        autoplay
        direction="up"
        onSlideChange={handleSlideChange}
      >
        {/* Content overlay — synced to active slide */}
        <div className="z-50 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand"
          >
            Upcoming Events
          </motion.span>

          {/* Title — animated on slide change */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-4 max-w-4xl font-heading text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              {currentSlide?.title}
            </motion.h2>
          </AnimatePresence>

          {/* Schedule label */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`schedule-${activeIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="mb-4 text-lg font-semibold text-brand md:text-2xl"
            >
              {currentSlide?.scheduleLabel}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {currentSlide?.description}
            </motion.p>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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

          {/* Slide indicators */}
          {slides.length > 1 && (
            <div className="mt-8 flex items-center gap-2">
              {slides.map((_, i) => (
                <div
                  key={slides[i]?.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-brand' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </ImagesSlider>
    </section>
  );
};
