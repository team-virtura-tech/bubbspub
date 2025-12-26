'use client';

import { motion } from 'framer-motion';
import { Beer, CalendarDays, Clock } from 'lucide-react';

import { MenuSection } from '@/components/custom/MenuSection';
import {
  happyHourDrinks,
  happyHourFood,
  happyHourSchedule,
} from '@/data/happy-hour';
import type { MenuSection as MenuSectionType } from '@/data/menu';

const HappyHourPage = () => {
  // Create menu sections for Happy Hour
  const happyHourDrinksSection: MenuSectionType = {
    category: 'Happy Hour Drinks',
    description: 'Enjoy our selection of discounted drinks',
    items: happyHourDrinks,
    type: 'happy-hour',
  };

  const happyHourFoodSection: MenuSectionType = {
    category: 'Happy Hour Food',
    description: 'Delicious bites at special prices',
    items: happyHourFood,
    type: 'happy-hour',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-[40vh] items-center justify-center pt-24">
        <div className="px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium uppercase tracking-wider text-red-600">
              <Beer className="h-4 w-4" />
              Special Deals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight text-red-600 md:text-6xl lg:text-7xl"
          >
            Happy Hour
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4"
          >
            <div className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
              <CalendarDays className="h-5 w-5 text-red-600" />
              <span className="text-lg font-semibold">
                {happyHourSchedule.days}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
              <Clock className="h-5 w-5 text-red-600" />
              <span className="text-lg font-semibold">
                {happyHourSchedule.hours}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Unwind with amazing deals on drinks and delicious bites!
          </motion.p>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="py-8">
        <MenuSection section={happyHourDrinksSection} />
        <MenuSection section={happyHourFoodSection} />
      </div>
    </div>
  );
};

export default HappyHourPage;
