// ─── Types ────────────────────────────────────────────────────────────────────

/** Day of week: 0 = Sunday … 6 = Saturday */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type RecurrenceRule = {
  /** Only "weekly" for now — easy to extend later. */
  frequency: 'weekly';
  /** 0 = Sunday, 5 = Friday, 6 = Saturday, etc. */
  dayOfWeek: DayOfWeek;
  /** First possible occurrence (ISO date, e.g. "2026-03-06"). */
  startDate: string;
  /** Last possible occurrence (ISO date). Omit for ongoing/indefinite. */
  endDate?: string;
};

type BaseEvent = {
  id: string;
  title: string;
  description: string;
  /** Path under /public — leave empty string until images are added. */
  imagePath: string;
  /** 24-h time in Chicago tz, e.g. "19:00". */
  time: string;
};

export type OneTimeEvent = BaseEvent & {
  type: 'one-time';
  /** ISO date string, e.g. "2026-03-12". */
  date: string;
};

export type RecurringEvent = BaseEvent & {
  type: 'recurring';
  recurrence: RecurrenceRule;
};

export type EventDefinition = OneTimeEvent | RecurringEvent;

/** A concrete occurrence generated from an EventDefinition. */
export type EventInstance = {
  /** References the parent definition's id. */
  eventId: string;
  title: string;
  description: string;
  imagePath: string;
  /** Full date-time of this occurrence (JS Date in UTC representing Chicago wall-clock). */
  dateTime: Date;
  status: 'upcoming' | 'past';
};

// ─── Chicago time helpers ─────────────────────────────────────────────────────

const CHICAGO_TZ = 'America/Chicago';

/**
 * Get the current wall-clock time in Chicago as a Date
 * (the returned Date's UTC fields represent Chicago local time).
 */
export const getNowChicago = (): Date => {
  const chicagoStr = new Date().toLocaleString('en-US', {
    timeZone: CHICAGO_TZ,
  });
  return new Date(chicagoStr);
};

/**
 * Build a JS Date from an ISO date string + "HH:mm" time, interpreted as Chicago time.
 */
const buildChicagoDate = (isoDate: string, time: string): Date => {
  const [year, month, day] = isoDate.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  // Create a date string that we'll parse as Chicago time
  const chicagoStr = `${month}/${day}/${year}, ${hours}:${minutes.toString().padStart(2, '0')}:00`;
  // Parse it back as if it were Chicago time
  return new Date(chicagoStr);
};

/**
 * Format a Date (which represents Chicago wall-clock) into a human-readable string.
 * e.g. "Friday, Mar 13 · 7:00 PM"
 */
export const formatEventDate = (date: Date): string => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthDay = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return `${weekday}, ${monthDay} · ${time}`;
};

/**
 * Shorter format for compact cards: "Mar 13 · 7 PM"
 */
export const formatEventDateShort = (date: Date): string => {
  const monthDay = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return `${monthDay} · ${time}`;
};

// ─── Instance generation ──────────────────────────────────────────────────────

/**
 * Expand a single EventDefinition into concrete EventInstance[]
 * within [rangeStart, rangeEnd].
 */
const generateEventInstances = (
  event: EventDefinition,
  rangeStart: Date,
  rangeEnd: Date,
  now: Date
): EventInstance[] => {
  const instances: EventInstance[] = [];

  if (event.type === 'one-time') {
    const dt = buildChicagoDate(event.date, event.time);
    if (dt >= rangeStart && dt <= rangeEnd) {
      instances.push({
        eventId: event.id,
        title: event.title,
        description: event.description,
        imagePath: event.imagePath,
        dateTime: dt,
        status: dt > now ? 'upcoming' : 'past',
      });
    }
  } else {
    // Recurring
    const { dayOfWeek, startDate, endDate } = event.recurrence;
    const recurrenceStart = new Date(startDate + 'T00:00:00');
    const recurrenceEnd = endDate ? new Date(endDate + 'T23:59:59') : rangeEnd;

    // Clamp to the effective window
    const windowStart =
      recurrenceStart > rangeStart ? recurrenceStart : rangeStart;
    const windowEnd = recurrenceEnd < rangeEnd ? recurrenceEnd : rangeEnd;

    // Walk day-by-day from windowStart to windowEnd
    const cursor = new Date(windowStart);
    cursor.setHours(0, 0, 0, 0);

    while (cursor <= windowEnd) {
      if (cursor.getDay() === dayOfWeek) {
        const dt = buildChicagoDate(
          `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`,
          event.time
        );
        if (dt >= rangeStart && dt <= rangeEnd) {
          instances.push({
            eventId: event.id,
            title: event.title,
            description: event.description,
            imagePath: event.imagePath,
            dateTime: dt,
            status: dt > now ? 'upcoming' : 'past',
          });
        }
      }
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  return instances;
};

// ─── Event definitions ────────────────────────────────────────────────────────

export const EVENT_DEFINITIONS: EventDefinition[] = [
  // Bingo — one-time, March 12 2026
  {
    id: 'bingo-2026-03-12',
    type: 'one-time',
    title: 'Bingo Night',
    description:
      'Join us for an exciting night of Bingo! Grab your daubers and compete for awesome prizes. Drinks specials available all night.',
    imagePath: '',
    time: '19:00',
    date: '2026-03-12',
  },

  // Poker — every Friday in March 2026
  {
    id: 'poker-friday-march-2026',
    type: 'recurring',
    title: 'Friday Poker Night',
    description:
      "It's poker time! Every Friday this March — come test your skills at the table. All skill levels welcome. Buy-in details at the bar.",
    imagePath: '',
    time: '19:00',
    recurrence: {
      frequency: 'weekly',
      dayOfWeek: 5, // Friday
      startDate: '2026-03-06',
      endDate: '2026-03-31',
    },
  },

  // Poker — every Sunday from April 2026 (ongoing)
  {
    id: 'poker-sunday-april-2026',
    type: 'recurring',
    title: 'Sunday Poker Night',
    description:
      "Kick off your week right with Sunday Poker at Bubb's! Cards fly at 7 PM every Sunday. All skill levels welcome.",
    imagePath: '',
    time: '19:00',
    recurrence: {
      frequency: 'weekly',
      dayOfWeek: 0, // Sunday
      startDate: '2026-04-05',
    },
  },
];

// ─── Public API ───────────────────────────────────────────────────────────────

type EventsBucket = {
  upcoming: EventInstance[];
  past: EventInstance[];
};

/**
 * Generate all event instances within a window and split into upcoming/past.
 *
 * @param pastWeeks   – how many weeks in the past to include (default 12)
 * @param futureWeeks – how many weeks in the future to include (default 8)
 */
export const getAllEventInstances = (
  pastWeeks = 12,
  futureWeeks = 8
): EventsBucket => {
  const now = getNowChicago();

  const rangeStart = new Date(now);
  rangeStart.setDate(rangeStart.getDate() - pastWeeks * 7);
  rangeStart.setHours(0, 0, 0, 0);

  const rangeEnd = new Date(now);
  rangeEnd.setDate(rangeEnd.getDate() + futureWeeks * 7);
  rangeEnd.setHours(23, 59, 59, 999);

  const all: EventInstance[] = [];

  for (const eventDef of EVENT_DEFINITIONS) {
    all.push(...generateEventInstances(eventDef, rangeStart, rangeEnd, now));
  }

  const upcoming = all
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());

  const past = all
    .filter((e) => e.status === 'past')
    .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

  return { upcoming, past };
};

/**
 * Convenience: get the next N upcoming events (for the home page).
 */
export const getUpcomingEvents = (limit = 3): EventInstance[] => {
  const { upcoming } = getAllEventInstances(0, 8);
  return upcoming.slice(0, limit);
};

// ─── Home page carousel helpers ───────────────────────────────────────────────

const DAY_NAMES: Record<DayOfWeek, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** A slide for the home-page carousel — one per event definition (not per instance). */
export type EventSlide = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  /** Human-friendly schedule, e.g. "Every Friday · 7:00 PM" or "Thursday, Mar 12 · 7:00 PM" */
  scheduleLabel: string;
};

/**
 * Format a 24-h time string ("19:00") to 12-h ("7:00 PM").
 */
const formatTime12h = (time: string): string => {
  const [h, m] = time.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${suffix}`;
};

/**
 * Build a schedule label for an event definition.
 */
const buildScheduleLabel = (event: EventDefinition): string => {
  const time12 = formatTime12h(event.time);

  if (event.type === 'one-time') {
    return formatEventDate(buildChicagoDate(event.date, event.time));
  }

  const dayName = DAY_NAMES[event.recurrence.dayOfWeek];
  const { startDate, endDate } = event.recurrence;

  // Parse start month
  const startMonth = MONTH_NAMES[new Date(startDate + 'T00:00:00').getMonth()];

  if (endDate) {
    // Limited run — e.g. "Every Friday · 7:00 PM (in March)"
    return `Every ${dayName} · ${time12} (in ${startMonth})`;
  }

  // Ongoing — e.g. "Every Sunday · 7:00 PM (Starting April)"
  const now = getNowChicago();
  const recStart = new Date(startDate + 'T00:00:00');
  if (recStart > now) {
    return `Every ${dayName} · ${time12} (Starting ${startMonth})`;
  }
  return `Every ${dayName} · ${time12}`;
};

/**
 * Get event definitions that have at least one upcoming instance,
 * returned as carousel slides (one per definition, deduplicated).
 */
export const getEventSlides = (): EventSlide[] => {
  const now = getNowChicago();

  return EVENT_DEFINITIONS.filter((def) => {
    if (def.type === 'one-time') {
      return buildChicagoDate(def.date, def.time) > now;
    }
    // Recurring: still active if endDate is in the future or no endDate
    if (def.recurrence.endDate) {
      return new Date(def.recurrence.endDate + 'T23:59:59') > now;
    }
    return true; // ongoing
  }).map((def) => ({
    id: def.id,
    title: def.title,
    description: def.description,
    imagePath: def.imagePath,
    scheduleLabel: buildScheduleLabel(def),
  }));
};
