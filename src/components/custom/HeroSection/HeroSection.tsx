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
        src="/images/landingPage/heroSection/heroSection4.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      {/* Dark Gradient Overlay - Left Side */}
      {/* <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/70 via-black/40 to-transparent" /> */}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-6 md:px-12 lg:px-16">
        <div className="flex max-w-2xl flex-col">
          <h1 className="text-left text-4xl font-bold tracking-[0.375rem] text-white md:text-5xl lg:text-6xl">
            Your Neighborhood.
          </h1>
          <h1 className="text-left text-4xl font-bold tracking-[0.375rem] text-white md:text-5xl lg:text-6xl">
            Your Pub.
          </h1>
        </div>
      </div>

      {/* Address & Phone at Bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center text-center">
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm font-extrabold tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-80 md:text-base lg:text-lg"
        >
          {contact.address.full}
        </a>
        <a
          href={phoneHref}
          className="cursor-pointer mt-2 text-sm font-extrabold tracking-[0.15em] text-white transition-opacity hover:opacity-80 md:text-base lg:text-lg"
        >
          {contact.phone}
        </a>
      </div>
    </section>
  );
};
