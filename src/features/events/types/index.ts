export type EventCategory =
  | 'trivia'
  | 'karaoke'
  | 'live-music'
  | 'sports'
  | 'holiday'
  | 'happy-hour'
  | 'gaming'
  | 'bingo'
  | 'poker'
  | 'other';

export type EventStatus =
  | 'active'
  | 'cancelled'
  | 'postponed'
  | 'sold-out'
  | 'archived';

export type EventRecurrence = {
  /** 'weekly' | 'biweekly' | 'monthly' */
  frequency: 'weekly' | 'biweekly' | 'monthly';
  /** 0 = Sunday … 6 = Saturday. Pass an array for multiple days. */
  dayOfWeek: number | number[];
  /** Human-readable label, e.g. "Every Thursday" */
  label: string;
};

export type EventSponsor = {
  name: string;
  website?: string;
};

export type EventImage = {
  desktop: string;
  mobile?: string;
  alt: string;
};

export type PubEvent = {
  id: string;
  name: string;
  description: string;
  /** YYYY-MM-DD (local pub time) */
  startDate: string;
  /** YYYY-MM-DD (local pub time) */
  endDate: string;
  /** HH:mm in 24-hour format */
  startTime: string;
  /** HH:mm in 24-hour format */
  endTime: string;
  isRecurring: boolean;
  recurrence: EventRecurrence | null;
  sponsor: EventSponsor | null;
  host: string;
  deals: string[];
  badges: string[];
  backgroundImage: EventImage;
  category: EventCategory;
  priceLabel: string;
  status: EventStatus;
  /** When true, hides the start-date block in the event card (useful for multi-day recurring events) */
  hideStartDate?: boolean;
};

export type EventGroup = 'today' | 'upcoming' | 'past';

export type GroupedEvents = {
  today: PubEvent[];
  upcoming: PubEvent[];
  past: PubEvent[];
};

export type EventFilter = 'all' | 'today' | 'upcoming' | 'past';
