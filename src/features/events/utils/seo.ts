import { PUB_LOCATION, SITE_URL } from '@/lib/config';

import type { PubEvent } from '../types';

const SCHEMA_BASE = 'https://schema.org';

const DAY_OF_WEEK_MAP: Record<number, string> = {
  0: `${SCHEMA_BASE}/Sunday`,
  1: `${SCHEMA_BASE}/Monday`,
  2: `${SCHEMA_BASE}/Tuesday`,
  3: `${SCHEMA_BASE}/Wednesday`,
  4: `${SCHEMA_BASE}/Thursday`,
  5: `${SCHEMA_BASE}/Friday`,
  6: `${SCHEMA_BASE}/Saturday`,
};

const STATUS_MAP: Record<string, string> = {
  active: `${SCHEMA_BASE}/EventScheduled`,
  cancelled: `${SCHEMA_BASE}/EventCancelled`,
  postponed: `${SCHEMA_BASE}/EventPostponed`,
  'sold-out': `${SCHEMA_BASE}/EventScheduled`,
  archived: `${SCHEMA_BASE}/EventScheduled`,
};

/**
 * Build an ISO 8601 datetime string with Chicago CST offset (-06:00).
 * "00:00" end times are treated as next-day midnight (e.g. events that end "at midnight").
 */
function toISODateTime(date: string, time: string): string {
  if (time === '00:00') {
    const [year, month, day] = date.split('-').map(Number);
    const nextDay = new Date(year, month - 1, day + 1);
    const nextDateStr = [
      nextDay.getFullYear(),
      String(nextDay.getMonth() + 1).padStart(2, '0'),
      String(nextDay.getDate()).padStart(2, '0'),
    ].join('-');
    return `${nextDateStr}T00:00:00-06:00`;
  }
  return `${date}T${time}:00-06:00`;
}

function buildLocation() {
  return {
    '@type': 'Place',
    name: PUB_LOCATION.name,
    address: {
      '@type': 'PostalAddress',
      ...PUB_LOCATION.address,
    },
  };
}

function buildEventSchema(event: PubEvent): Record<string, unknown> {
  const isFree =
    event.priceLabel.toLowerCase().includes('free') ||
    event.priceLabel.toLowerCase().includes('no cover');

  const base: Record<string, unknown> = {
    '@type': 'Event',
    name: event.name,
    description: event.description,
    eventStatus: STATUS_MAP[event.status] ?? `${SCHEMA_BASE}/EventScheduled`,
    eventAttendanceMode: `${SCHEMA_BASE}/OfflineEventAttendanceMode`,
    location: buildLocation(),
    image: event.backgroundImage.desktop.startsWith('http')
      ? event.backgroundImage.desktop
      : `${SITE_URL}${event.backgroundImage.desktop}`,
    isAccessibleForFree: isFree,
    organizer: {
      '@type': 'Restaurant',
      name: PUB_LOCATION.name,
      url: SITE_URL,
    },
  };

  // Live music events get a performer field
  if (event.category === 'live-music' && event.host) {
    base.performer = {
      '@type': 'Person',
      name: event.host,
    };
  }

  if (event.isRecurring && event.recurrence) {
    // Recurring: use eventSchedule with Schedule type (recommended by schema.org)
    const rawDays = event.recurrence.dayOfWeek;
    const days = Array.isArray(rawDays)
      ? rawDays.map((d) => DAY_OF_WEEK_MAP[d])
      : [DAY_OF_WEEK_MAP[rawDays]];

    base.startDate = `${event.startDate}T${event.startTime}:00-06:00`;
    base.eventSchedule = {
      '@type': 'Schedule',
      repeatFrequency: 'P1W',
      byDay: days.length === 1 ? days[0] : days,
      startTime: event.startTime,
      endTime: event.endTime,
      startDate: event.startDate,
      scheduleTimezone: 'America/Chicago',
    };
  } else {
    // One-time or multi-day event
    base.startDate = toISODateTime(event.startDate, event.startTime);
    if (event.endDate) {
      base.endDate = toISODateTime(event.endDate, event.endTime);
    }
  }

  return base;
}

/**
 * Generate a schema.org @graph of Event objects for all active pub events.
 * Inject the result as a JSON-LD <script> tag on the /events page.
 */
export function generateEventsJsonLd(events: PubEvent[]) {
  const activeEvents = events.filter((e) => e.status === 'active');
  return {
    '@context': SCHEMA_BASE,
    '@graph': activeEvents.map(buildEventSchema),
  };
}
