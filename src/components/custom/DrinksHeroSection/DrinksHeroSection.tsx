import Image from 'next/image';

export const DrinksHeroSection = () => {
  const componentName = 'DrinksHeroSection';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <Image
        src="/images/drinksPage/heroSection/heroSection2.png"
        alt="Smoky spiced orange old fashioned cocktail"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Bubb&apos;s Drinks
          </h1>
          {/* <p className="mt-4 text-lg md:text-xl text-neutral-200">Drinks</p> */}
        </div>
      </div>
    </section>
  );
};
