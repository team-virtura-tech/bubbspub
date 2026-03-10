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
      className="mb-10 flex flex-wrap items-center gap-2 md:mb-14"
    >
      {filters.map(({ value, label }) => (
        <button
          key={value}
          role="tab"
          aria-selected={activeFilter === value}
          onClick={() => onFilterChange(value)}
          className={cn(
            'cursor-pointer border px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50',
            activeFilter === value
              ? 'border-brand bg-brand text-white'
              : 'border-white/20 text-slate-400 hover:border-white/40 hover:text-white'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
