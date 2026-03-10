'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

import type { DailySpecial } from '@/data/daily-specials';
import type { PubEvent } from '@/features/events/types';

export type TodaysHighlightsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  specials: DailySpecial[];
  todaysEvent: PubEvent | null;
};

function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayH}:${m.toString().padStart(2, '0')} ${period}`;
}

function formatPrice(price: number | string): string {
  if (typeof price === 'string') return price;
  return `$${price.toFixed(2)}`;
}

export const TodaysHighlightsModal = ({
  isOpen,
  onClose,
  specials,
  todaysEvent,
}: TodaysHighlightsModalProps) => {
  const reduce = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Move focus into modal when it opens
  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  // Trap focus + Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? {} : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            ref={modalRef}
            id="TodaysHighlightsModal"
            data-component="TodaysHighlightsModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="highlights-modal-title"
            initial={reduce ? {} : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? {} : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-3 top-1/2 z-[101] mx-auto max-h-[85vh] w-full max-w-sm -translate-y-1/2 overflow-y-auto rounded-2xl bg-[#111111] p-4 shadow-2xl md:inset-x-auto md:left-1/2 md:max-w-lg md:-translate-x-1/2 md:p-6"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close today's highlights"
              className="absolute right-3 top-3 rounded-full p-1.5 text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 md:right-4 md:top-4"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <header className="mb-6">
              <h2
                id="highlights-modal-title"
                className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-white"
              >
                Today&apos;s Highlights
              </h2>
              <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-white/40">
                What&apos;s happening right now
              </p>
            </header>

            {/* Daily Specials */}
            {specials.length > 0 && (
              <section aria-label="Today's daily specials" className="mb-5">
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-wider text-red-500">
                  <span aria-hidden="true">🥃</span>
                  Daily Specials
                </h3>
                <ul className="space-y-3">
                  {specials.map((s) => (
                    <li key={s.id} className="flex items-baseline gap-2">
                      <span className="font-mono text-[15px] text-white">
                        {s.item}
                      </span>
                      <span
                        className="flex-1 border-b border-dashed border-white/15"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[15px] font-semibold text-red-400">
                        {formatPrice(s.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Divider */}
            {specials.length > 0 && todaysEvent && (
              <hr className="mb-5 border-white/10" />
            )}

            {/* Tonight's Event */}
            {todaysEvent && (
              <section aria-label="Tonight's event">
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold uppercase tracking-wider text-red-500">
                  <span aria-hidden="true">🎉</span>
                  Tonight&apos;s Event
                </h3>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <h4 className="font-heading text-2xl font-bold uppercase text-white">
                    {todaysEvent.name}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/40">
                    {todaysEvent.recurrence?.label ?? todaysEvent.startDate}
                    {' · '}
                    {formatTime(todaysEvent.startTime)}
                    {' – '}
                    {formatTime(todaysEvent.endTime)}
                  </p>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-white/65">
                    {todaysEvent.description}
                  </p>
                  {todaysEvent.badges.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {todaysEvent.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-sm border border-red-600/60 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-white/70"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Empty state */}
            {specials.length === 0 && !todaysEvent && (
              <p className="text-center font-mono text-sm text-white/40">
                Check back later for today&apos;s highlights!
              </p>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
