'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Menu1ItemCard } from '@/components/custom/Menu1ItemCard';
import type { MenuSection } from '@/data/menu';
import { cn } from '@/lib/utils';

export type Menu1CategoryAccordionProps = {
  sections: MenuSection[];
  className?: string;
};

// Helper to get item name (handles different item types)
const getItemName = (item: MenuSection['items'][number]): string => {
  if ('name' in item) return item.name;
  if ('item' in item) return item.item;
  return 'Unknown Item';
};

// Helper to get item description
const getItemDescription = (item: MenuSection['items'][number]): string => {
  if ('description' in item && item.description) return item.description;
  if ('day' in item) return `Available on ${item.day}`;
  return '';
};

// Helper to get item image
const getItemImage = (
  item: MenuSection['items'][number]
): string | undefined => {
  if ('image' in item) return item.image;
  return undefined;
};

export const Menu1CategoryAccordion = ({
  sections,
  className,
}: Menu1CategoryAccordionProps) => {
  const componentName = 'Menu1CategoryAccordion';

  // Track which category is open (first one by default)
  const [openCategory, setOpenCategory] = useState<string | null>(
    sections[0]?.category ?? null
  );

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div
      id={componentName}
      data-component={componentName}
      className={cn('flex flex-col gap-3', className)}
    >
      {sections.map((section) => {
        const isOpen = openCategory === section.category;

        return (
          <div key={section.category} className="px-4 md:px-6">
            {/* Category Header - Sticky (offset for fixed nav: ~80px mobile, ~96px desktop) */}
            {/* border border-border/50 */}
            <button
              onClick={() => toggleCategory(section.category)}
              className={cn(
                'sticky top-20 z-10 flex w-full items-center justify-between rounded-xl bg-zinc-900 px-4 py-4 text-left text-white transition-colors hover:bg-zinc-800 md:top-24 md:px-6',
                isOpen && 'bg-zinc-800'
              )}
              aria-expanded={isOpen}
              aria-controls={`category-${section.category}`}
            >
              <span className="font-heading text-base italic text-white md:text-lg">
                {section.category}{' '}
                <span className="text-white/60">({section.items.length})</span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 text-white/70" />
              </motion.span>
            </button>

            {/* Category Items - Animated */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`category-${section.category}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-3 md:px-6 md:pb-6">
                    {/* Category Description (if exists) */}
                    {section.description && (
                      <p className="mb-4 whitespace-pre-line text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    )}

                    {/* Menu Items */}
                    <div className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <Menu1ItemCard
                          key={item.id}
                          id={`menu-item-${item.id}`}
                          name={getItemName(item)}
                          description={getItemDescription(item)}
                          price={item.price}
                          image={getItemImage(item)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
