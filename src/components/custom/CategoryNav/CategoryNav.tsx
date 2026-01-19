'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export type CategoryNavProps = {
  id?: string;
  className?: string;
  categories: string[];
  offset?: number;
};

export const CategoryNav = ({
  id,
  className,
  categories,
  offset = 200,
}: CategoryNavProps) => {
  const reduce = useReducedMotion();
  const componentName = 'CategoryNav';
  const rootId = id ?? componentName;

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle smooth scroll to section
  const scrollToSection = (category: string) => {
    const sectionId = category.toLowerCase().replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: reduce ? 'auto' : 'smooth',
      });

      setActiveCategory(category);
    }
  };

  // Function to handle scrolling and update arrow visibility
  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  // Scroll handler for navigation buttons
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: reduce ? 'auto' : 'smooth',
      });
    }
  };

  // Set up scroll listener for arrow visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener('scroll', checkScrollability);
      // Also check on resize
      window.addEventListener('resize', checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
      window.removeEventListener('resize', checkScrollability);
    };
  }, [categories, checkScrollability]);

  // Set up Intersection Observer to track active section
  useEffect(() => {
    const sections = categories
      .map((category) => {
        const sectionId = category.toLowerCase().replace(/\s+/g, '-');
        return document.getElementById(sectionId);
      })
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryName = categories.find(
              (cat) =>
                cat.toLowerCase().replace(/\s+/g, '-') === entry.target.id
            );
            if (categoryName) {
              setActiveCategory(categoryName);
            }
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [categories, offset]);

  return (
    <motion.div
      id={rootId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0, y: -10 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'sticky top-20 z-40 border-b bg-background/95 backdrop-blur-md md:top-24',
        className
      )}
    >
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={cn(
            'absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-border bg-card p-2 text-card-foreground transition-opacity duration-300 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30',
            'hidden md:block'
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Scrollable Categories */}
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide overflow-x-auto scroll-smooth"
        >
          <div className="flex min-w-max items-center gap-2 px-4 py-3 md:gap-3 md:px-14">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => scrollToSection(category)}
                  className={cn(
                    'relative shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:px-5 md:text-base',
                    isActive
                      ? 'bg-brand text-white shadow-sm'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={cn(
            'absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border border-border bg-card p-2 text-card-foreground transition-opacity duration-300 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30',
            'hidden md:block'
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
};
