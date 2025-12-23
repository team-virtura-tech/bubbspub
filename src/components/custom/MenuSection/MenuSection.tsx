'use client';

import { motion, useReducedMotion } from 'framer-motion';

import type { MenuSection as MenuSectionType } from '@/data/menu';
import { cn } from '@/lib/utils';

export type MenuSectionProps = {
  id?: string;
  className?: string;
  section: MenuSectionType;
};

const formatPrice = (price: number | string): string => {
  if (typeof price === 'string') return price;
  return `$${price.toFixed(2)}`;
};

export const MenuSection = ({ id, className, section }: MenuSectionProps) => {
  const reduce = useReducedMotion();
  const componentName = 'MenuSection';
  const sectionId = id ?? section.category.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.section
      id={sectionId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration: 0.4 }}
      className={cn('scroll-mt-52 px-4 py-8 md:px-6 md:py-12', className)}
    >
      {/* Section Header */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 border-b pb-4 md:mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide md:text-3xl lg:text-4xl">
            {section.category}
          </h2>
          {section.description && (
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {section.description}
            </p>
          )}
        </div>

        {/* Menu Items Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {section.items.map((item, index) => {
            const itemName = 'name' in item ? item.name : item.item;
            const itemDescription =
              'description' in item ? item.description : undefined;
            const itemPrice = item.price;
            const itemId = item.id;

            // Check for special properties
            const sizes = 'sizes' in item ? item.sizes : undefined;
            const addOns = 'addOns' in item ? item.addOns : undefined;
            const isVegetarian =
              'isVegetarian' in item ? item.isVegetarian : false;
            const isVegan = 'isVegan' in item ? item.isVegan : false;
            const day = 'day' in item ? item.day : undefined;

            return (
              <motion.div
                key={itemId}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-base font-semibold md:text-lg">
                        {itemName}
                      </h3>
                      {(isVegetarian || isVegan) && (
                        <span className="text-xs text-green-600 dark:text-green-400">
                          {isVegan ? '🌱 Vegan' : '🥬 Vegetarian'}
                        </span>
                      )}
                      {day && (
                        <span className="text-xs capitalize text-muted-foreground">
                          ({day})
                        </span>
                      )}
                    </div>

                    {itemDescription && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {itemDescription}
                      </p>
                    )}

                    {sizes && (
                      <p className="mt-1 text-xs italic text-muted-foreground">
                        {sizes}
                      </p>
                    )}

                    {addOns && (
                      <p className="mt-1 text-xs font-medium text-primary">
                        {addOns}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-base font-semibold md:text-lg">
                      {formatPrice(itemPrice)}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
