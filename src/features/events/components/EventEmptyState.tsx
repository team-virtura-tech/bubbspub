import type { EventFilter } from '../types';

const messages: Record<EventFilter, string> = {
  all: 'No events to show right now — check back soon!',
  today: 'No events today — check out upcoming events!',
  upcoming: 'No upcoming events scheduled yet — stay tuned!',
  past: 'No past events to display.',
};

export type EventEmptyStateProps = {
  filter: EventFilter;
};

export const EventEmptyState = ({ filter }: EventEmptyStateProps) => {
  return (
    <div
      data-component="EventEmptyState"
      className="flex min-h-[30vh] items-center justify-center"
    >
      <p className="text-center text-xl font-semibold text-slate-400 md:text-2xl">
        {messages[filter]}
      </p>
    </div>
  );
};
