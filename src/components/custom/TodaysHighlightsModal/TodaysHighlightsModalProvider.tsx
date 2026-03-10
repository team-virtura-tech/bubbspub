'use client';

import { useEffect, useState } from 'react';

import type { DailySpecial } from '@/data/daily-specials';
import type { PubEvent } from '@/features/events/types';
import {
  getTodaySpecials,
  getTodaysModalEvents,
  markModalDismissed,
  shouldShowModal,
} from '@/features/events/utils/modal-helpers';

import { TodaysHighlightsModal } from './TodaysHighlightsModal';

type ModalData = {
  specials: DailySpecial[];
  todaysEvent: PubEvent | null;
};

export const TodaysHighlightsModalProvider = () => {
  // Lazy initializer: computed once on mount; keeps data stable without setState in effects
  const [data] = useState<ModalData>(() => ({
    specials: getTodaySpecials(),
    todaysEvent: getTodaysModalEvents()[0] ?? null,
  }));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!shouldShowModal()) return;

    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    markModalDismissed();
  };

  return (
    <TodaysHighlightsModal
      isOpen={isOpen}
      onClose={handleClose}
      specials={data.specials}
      todaysEvent={data.todaysEvent}
    />
  );
};
