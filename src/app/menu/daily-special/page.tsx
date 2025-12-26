'use client';

import { motion } from 'framer-motion';
import { RefreshCw, Sparkles } from 'lucide-react';

import { MenuSection } from '@/components/custom/MenuSection';
import { dailySpecials, type DailySpecial } from '@/data/daily-specials';
import type { MenuSection as MenuSectionType } from '@/data/menu';

const days: DailySpecial['day'][] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const DailySpecialPage = () => {
  // Group daily specials by day
  const getDailySpecialsByDay = (day: DailySpecial['day']) => {
    return dailySpecials.filter((special) => special.day === day);
  };

  // Create menu sections for each day
  const dailySections: MenuSectionType[] = days.map((day) => ({
    category: day.charAt(0).toUpperCase() + day.slice(1),
    description: `Special deals available on ${day.charAt(0).toUpperCase() + day.slice(1)}s`,
    items: getDailySpecialsByDay(day),
    type: 'daily-special',
  }));

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
              <Sparkles className="h-4 w-4" />
              Every Day Deals
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight text-red-600 md:text-6xl lg:text-7xl"
          >
            Daily Specials
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <div className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
              <RefreshCw className="h-5 w-5 text-red-600" />
              <span className="text-lg font-semibold">7 Days a Week</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Check out our rotating daily specials - something delicious every
            day of the week!
          </motion.p>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="py-8">
        {dailySections.map((section) => (
          <MenuSection key={section.category} section={section} />
        ))}
      </div>
    </div>
  );
};

export default DailySpecialPage;
