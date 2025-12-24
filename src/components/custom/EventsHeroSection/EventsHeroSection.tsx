import Image from 'next/image';

export const EventsHeroSection = () => {
  const componentName = 'EventsHeroSection';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative h-[50vh] w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/upcomingEventsPage/heroSection1.jpg"
        alt="Events hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/30">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Upcoming Events
        </h1>
        <p className="mt-4 text-center text-base text-white/90 md:text-lg lg:text-xl">
          Join us for exciting events at Bubb&apos;s Pub
        </p>
      </div>
    </section>
  );
};
