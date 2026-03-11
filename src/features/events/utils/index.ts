import type {
  EventFilter,
  EventGroup,
  GroupedEvents,
  PubEvent,
} from '../types';

/** Parse a YYYY-MM-DD string into a Date at local midnight. */
export function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/** Today at local midnight. */
export function getToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

/** Determine if an event is today, upcoming, or past. */
export function getEventGroup(event: PubEvent): EventGroup {
  const today = getToday();
  const start = parseLocalDate(event.startDate);
  // No endDate means the event runs indefinitely
  const hasEnd = !!event.endDate;
  const end = hasEnd ? parseLocalDate(event.endDate) : null;

  const isActive = today >= start && (end === null || today <= end);

  if (isActive) {
    // Recurring events only count as "today" on their scheduled day
    if (event.isRecurring && event.recurrence) {
      const days = event.recurrence.dayOfWeek;
      const isToday = Array.isArray(days)
        ? days.includes(today.getDay())
        : today.getDay() === days;
      return isToday ? 'today' : 'upcoming';
    }
    return 'today';
  }

  if (start > today) return 'upcoming';
  return 'past';
}

/** Split events into today / upcoming / past, each sorted appropriately. */
export function groupEvents(events: PubEvent[]): GroupedEvents {
  const today: PubEvent[] = [];
  const upcoming: PubEvent[] = [];
  const past: PubEvent[] = [];

  for (const event of events) {
    const group = getEventGroup(event);
    if (group === 'today') today.push(event);
    else if (group === 'upcoming') upcoming.push(event);
    else past.push(event);
  }

  const byDateAsc = (a: PubEvent, b: PubEvent) =>
    a.startDate.localeCompare(b.startDate) ||
    a.startTime.localeCompare(b.startTime);

  const byDateDesc = (a: PubEvent, b: PubEvent) =>
    b.startDate.localeCompare(a.startDate) ||
    b.startTime.localeCompare(a.startTime);

  today.sort(byDateAsc);
  upcoming.sort(byDateAsc);
  past.sort(byDateDesc);

  return { today, upcoming, past };
}

/** Filter out archived events. */
export function getVisibleEvents(events: PubEvent[]): PubEvent[] {
  return events.filter((e) => e.status !== 'archived');
}

/** Format YYYY-MM-DD → "Friday, Mar 13". */
export function formatDisplayDate(dateStr: string): string {
  const date = parseLocalDate(dateStr);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}

/** Format HH:mm → "7:00 PM". */
export function formatDisplayTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/** Merge stored badges with computed status badges. Returns max 3. */
export function getDisplayBadges(event: PubEvent): string[] {
  const group = getEventGroup(event);
  const badges = [...event.badges];

  if (group === 'today' && !badges.includes('Happening Today')) {
    badges.unshift('Happening Today');
  }

  if (event.status === 'cancelled') badges.unshift('Cancelled');
  else if (event.status === 'postponed') badges.unshift('Postponed');
  else if (event.status === 'sold-out') badges.unshift('Sold Out');

  return badges.slice(0, 3);
}

/** Tailwind classes for a given badge label. */
export function getBadgeClasses(badge: string): string {
  switch (badge) {
    case 'Happening Today':
      return 'bg-brand text-white';
    case 'Cancelled':
      return 'bg-red-500/20 text-red-400';
    case 'Postponed':
      return 'bg-yellow-500/20 text-yellow-400';
    case 'Sold Out':
      return 'bg-white/20 text-white';
    case 'Free Entry':
      return 'bg-brand/20 text-brand';
    default:
      return 'bg-white/10 text-slate-300';
  }
}

/** Check if there are events for a given filter. */
export function hasEventsForFilter(
  grouped: GroupedEvents,
  filter: EventFilter
): boolean {
  switch (filter) {
    case 'all':
      return (
        grouped.today.length + grouped.upcoming.length + grouped.past.length > 0
      );
    case 'today':
      return grouped.today.length > 0;
    case 'upcoming':
      return grouped.upcoming.length > 0;
    case 'past':
      return grouped.past.length > 0;
  }
}

export * from './seo';
