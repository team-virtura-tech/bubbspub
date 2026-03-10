import { type DailySpecial, dailySpecials } from '@/data/daily-specials';

import { events } from '../data/events';
import type { PubEvent } from '../types';

import { getEventGroup } from '.';

const STORAGE_KEY = 'highlights_dismissed';

const DAY_NAMES = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

/** Current date string in America/Chicago (Central Time) → "YYYY-MM-DD". */
export function getTodayCSTDate(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

/** Today's daily specials based on local day-of-week. */
export function getTodaySpecials(): DailySpecial[] {
  const todayDay = DAY_NAMES[new Date().getDay()];
  return dailySpecials.filter((s) => s.day === todayDay);
}

/** Active events occurring today (handles recurring & one-off). */
export function getTodaysModalEvents(): PubEvent[] {
  return events.filter(
    (e) => e.status !== 'archived' && getEventGroup(e) === 'today'
  );
}

/**
 * Returns true if the modal should be shown:
 * - sessionStorage key absent → new browser session (tab closed & reopened)
 * - stored date differs from today's CST date → new day started past midnight CST
 */
export function shouldShowModal(): boolean {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return true;
    return stored !== getTodayCSTDate();
  } catch {
    return true;
  }
}

/** Persist today's CST date in sessionStorage so refreshes don't re-trigger. */
export function markModalDismissed(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, getTodayCSTDate());
  } catch {
    // sessionStorage unavailable — fail silently
  }
}
