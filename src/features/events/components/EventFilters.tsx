'use client';

import { cn } from '@/lib/utils';

import type { EventFilter } from '../types';

const filters: { value: EventFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'today', label: 'Today' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'past', label: 'Past' },
];

export type EventFiltersProps = {
  activeFilter: EventFilter;
  onFilterChange: (filter: EventFilter) => void;
};

export const EventFilters = ({
  activeFilter,
  onFilterChange,
}: EventFiltersProps) => {
  return (
    <div
      data-component="EventFilters"
      role="tablist"
      aria-label="Filter events"
      className="mb-12 flex flex-wrap items-center justify-center gap-2"
    >
      {filters.map(({ value, label }) => (
        <button
          key={value}
          role="tab"
          aria-selected={activeFilter === value}
          onClick={() => onFilterChange(value)}
          className={cn(
            'cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
            activeFilter === value
              ? 'bg-brand text-white shadow-lg shadow-brand/25'
              : 'border border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
