import Image from 'next/image';

import { contact } from '@/data/contact';

export const HeroSection = () => {
  const componentName = 'HeroSection';

  // Format phone for tel: link (remove non-digits)
  const phoneHref = `tel:${contact.phone.replace(/\D/g, '')}`;

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/landingPage/heroSection/heroSection2.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Where Community Meets Every Game
        </h1>
      </div>

      {/* Address & Phone at Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center text-center">
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-80 md:text-base lg:text-lg"
        >
          {contact.address.full}
        </a>
        <a
          href={phoneHref}
          className="mt-2 text-sm tracking-[0.15em] text-white transition-opacity hover:opacity-80 md:text-base lg:text-lg"
        >
          {contact.phone}
        </a>
      </div>
    </section>
  );
};
