import { EventsHeroSection } from '@/components/custom/EventsHeroSection';
import { FEATURES } from '@/lib/config';

export default function EventsPage() {
  const events: never[] = [];

  return (
    <div>
      {FEATURES.showEventsHeroSection && <EventsHeroSection />}
      <section
        id="EventsList"
        data-component="EventsList"
        className="mx-auto w-full max-w-screen-xl px-4 py-16 md:px-6 md:py-24"
      >
        {events.length === 0 ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-center text-2xl font-semibold text-muted-foreground md:text-3xl">
              No upcoming events
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Events will be rendered here */}
          </div>
        )}
      </section>
    </div>
  );
}
