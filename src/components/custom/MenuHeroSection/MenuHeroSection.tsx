import Image from 'next/image';

export const MenuHeroSection = () => {
  const componentName = 'MenuHeroSection';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/menuPage/heroSection.jpg"
        alt="Menu hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={100}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Menu
        </h1>
      </div>
    </section>
  );
};
