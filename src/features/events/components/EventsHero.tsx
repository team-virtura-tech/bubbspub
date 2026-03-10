import Image from 'next/image';

export const EventsHero = () => {
  const componentName = 'EventsHero';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative h-[50vh] w-full overflow-hidden"
    >
      <Image
        src="/images/upcomingEventsPage/heroSection1.jpg"
        alt="Events at Bubbs Corner Pub"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Events
        </h1>
        <p className="mt-4 text-base text-white/90 md:text-lg lg:text-xl">
          Live music, trivia, karaoke &amp; more at Bubb&apos;s Corner Pub
        </p>
      </div>
    </section>
  );
};
