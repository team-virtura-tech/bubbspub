import Image from 'next/image';

import { cn } from '@/lib/utils';

export type Menu1HeroPanelProps = {
  className?: string;
};

export const Menu1HeroPanel = ({ className }: Menu1HeroPanelProps) => {
  const componentName = 'Menu1HeroPanel';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className={cn(
        'relative w-full lg:sticky lg:top-0 lg:h-screen lg:flex-1',
        className
      )}
    >
      {/* Hero Image */}
      <div className="relative aspect-4/3 w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <Image
          src="/images/menuPage/heroSection.jpg"
          alt="Delicious burgers and drinks at Bubbs Pub"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Testimonial Card */}
      <div className="absolute bottom-6 left-4 right-4 rounded-xl bg-black/60 p-5 backdrop-blur-sm md:bottom-8 md:left-6 md:right-6 md:p-6 lg:bottom-10 lg:left-8 lg:right-8 lg:p-8">
        <blockquote>
          <p className="font-heading text-xl italic leading-relaxed text-white md:text-2xl lg:text-3xl">
            &ldquo;Good food, cold drinks, and even better company!&rdquo;
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
            The burgers are freshly made, the drinks are always flowing, and the
            vibes are unmatched. Whether you&apos;re here for game night or just
            hanging with friends, every visit feels like a celebration. This is
            the Bubbs way.
          </p>
        </blockquote>
      </div>
    </section>
  );
};
