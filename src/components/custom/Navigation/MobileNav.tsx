'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { navigationItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

export type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <motion.div
            data-component="MobileNav"
            initial={shouldReduceMotion ? {} : { x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-16 h-[calc(100vh-64px)] w-full max-w-sm border-l border-neutral-800 bg-black shadow-xl lg:hidden"
          >
            <nav className="flex h-full flex-col overflow-y-auto p-6">
              <ul className="flex flex-col gap-2">
                {navigationItems.map((item, index) => {
                  const isOrderNow = item.id === 'order';
                  return (
                    <motion.li
                      key={item.id}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'block rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide transition-colors',
                          isOrderNow
                            ? 'bg-red-600 text-center text-white hover:bg-red-700'
                            : 'text-neutral-200 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
