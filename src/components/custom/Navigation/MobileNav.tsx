'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { navigationItems, orderOnlineItem } from '@/data/navigation';

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
            initial={shouldReduceMotion ? {} : { y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 right-0 top-16 w-full bg-black shadow-xl lg:hidden"
          >
            <nav className="p-6">
              <ul className="flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    {item.dropdown && item.items ? (
                      <div className="flex flex-col gap-1">
                        <span className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                          {item.title}
                        </span>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.url}
                            onClick={onClose}
                            className="block rounded-lg px-6 py-2 text-base font-medium uppercase tracking-wide text-neutral-200 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.url}
                        onClick={onClose}
                        className="block rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide text-neutral-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item.title}
                      </Link>
                    )}
                  </motion.li>
                ))}
                <motion.li
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: navigationItems.length * 0.05,
                    duration: 0.2,
                  }}
                >
                  <Link
                    href={orderOnlineItem.url}
                    onClick={onClose}
                    className="block rounded-lg bg-red-600 px-4 py-3 text-center text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
                  >
                    {orderOnlineItem.title}
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
