'use client';

import { useMemo, useState } from 'react';

import { events } from '../data/events';
import type { EventFilter } from '../types';
import { getVisibleEvents, groupEvents, hasEventsForFilter } from '../utils';

import { EventEmptyState } from './EventEmptyState';
import { EventFilters } from './EventFilters';
import { EventSection } from './EventSection';

export const EventsPageContent = () => {
  const componentName = 'EventsPageContent';
  const [filter, setFilter] = useState<EventFilter>('all');

  const visibleEvents = useMemo(() => getVisibleEvents(events), []);
  const grouped = useMemo(() => groupEvents(visibleEvents), [visibleEvents]);
  const showEmptyState = !hasEventsForFilter(grouped, filter);

  return (
    <div
      id={componentName}
      data-component={componentName}
      className="relative overflow-hidden"
    >
      {/* Background — wall texture */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/wall.png')" }}
      >
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 md:px-6 md:py-24">
        {/* Filter Tabs */}
        <EventFilters activeFilter={filter} onFilterChange={setFilter} />

        {/* Empty State */}
        {showEmptyState && <EventEmptyState filter={filter} />}

        {/* ─── All view: sections in priority order ──────────────── */}
        {filter === 'all' && (
          <>
            {grouped.today.length > 0 && (
              <EventSection
                title="Happening Today"
                variant="today"
                events={grouped.today}
              />
            )}
            {grouped.upcoming.length > 0 && (
              <EventSection
                title="Upcoming Events"
                variant="upcoming"
                events={grouped.upcoming}
                className={grouped.today.length > 0 ? 'mt-24' : ''}
              />
            )}
            {grouped.past.length > 0 && (
              <EventSection
                title="Past Events"
                variant="past"
                events={grouped.past}
                className={
                  grouped.today.length > 0 || grouped.upcoming.length > 0
                    ? 'mt-24'
                    : ''
                }
              />
            )}
          </>
        )}

        {/* ─── Filtered views ───────────────────────────────────── */}
        {filter === 'today' && grouped.today.length > 0 && (
          <EventSection
            title="Today's Events"
            variant="today"
            events={grouped.today}
          />
        )}

        {filter === 'upcoming' && grouped.upcoming.length > 0 && (
          <EventSection
            title="Upcoming Events"
            variant="upcoming"
            events={grouped.upcoming}
          />
        )}

        {filter === 'past' && grouped.past.length > 0 && (
          <EventSection
            title="Past Events"
            variant="past"
            events={grouped.past}
          />
        )}
      </div>
    </div>
  );
};
