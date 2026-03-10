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
      className="relative bg-black"
    >
      <div className="w-full px-4 py-12 md:px-6 md:py-20">
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
                className={grouped.today.length > 0 ? 'mt-14 md:mt-28' : ''}
              />
            )}
            {grouped.past.length > 0 && (
              <EventSection
                title="Past Events"
                variant="past"
                events={grouped.past}
                className={
                  grouped.today.length > 0 || grouped.upcoming.length > 0
                    ? 'mt-14 md:mt-28'
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
