'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';
// Define the type for a single carousel item
export interface CarouselItem {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  isNew?: boolean;
}

// Define the props for the main component
interface CarouselProps {
  items: CarouselItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      title = 'Featured Items',
      subtitle = 'Discover our selection',
      className,
      ...props
    },
    ref
  ) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    // Function to handle scrolling and update arrow visibility
    const checkScrollability = React.useCallback(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
      }
    }, []);

    React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        checkScrollability();
        container.addEventListener('scroll', checkScrollability);
      }
      return () => {
        if (container) {
          container.removeEventListener('scroll', checkScrollability);
        }
      };
    }, [items, checkScrollability]); // Scroll handler for navigation buttons
    const scroll = (direction: 'left' | 'right') => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of the visible width
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    return (
      <section
        ref={ref}
        className={cn('w-full py-8 m-2.5', className)}
        aria-labelledby="carousel-heading"
        {...props}
      >
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 mb-8">
          <h2
            id="carousel-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-center text-foreground"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base uppercase tracking-widest text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6 px-4 sm:px-6"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] snap-start"
            >
              {
                /* Carousel Card */
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border mb-3 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="w-full h-[28rem] sm:h-[36rem] md:h-[40rem] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider">
                          {item.name}
                        </h3>
                        <p className="text-xs text-white/80">{item.subtitle}</p>
                      </div>
                      <p className="text-sm font-medium">{subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      {item.name}
                    </h4>
                    {item.isNew && (
                      <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center gap-2">
            {/* Left Arrow Button */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={cn(
                'cursor-pointer p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted'
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {/* Right Arrow Button */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={cn(
                'cursor-pointer p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted'
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    );
  }
);

Carousel.displayName = 'Carousel';
