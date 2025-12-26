'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max items-center gap-2 px-4 py-3 md:gap-3 md:px-6">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className={cn(
                  'cursor-pointer relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:px-5 md:text-base',
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
    </motion.div>
  );
};
