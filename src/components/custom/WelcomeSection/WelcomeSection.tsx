import Image from 'next/image';
import Link from 'next/link';

interface FeatureCard {
  title: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const featureCards: FeatureCard[] = [
  {
    title: 'Our Food',
    image: '/images/landingPage/welcomeSection/food.jpg',
    buttonText: 'View Our Menu',
    buttonLink: '/menu',
  },
  {
    title: 'Who We Are?',
    image: '/images/landingPage/welcomeSection/about.jpg',
    buttonText: 'About Us',
    buttonLink: '/about-us',
  },
  {
    title: 'Order Online',
    image: '/images/landingPage/welcomeSection/order.jpg',
    buttonText: 'Order Now',
    buttonLink: '/order',
  },
];

export const WelcomeSection = () => {
  const componentName = 'WelcomeSection';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="bg-black px-4 py-16 md:px-8 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-6 text-center text-3xl tracking-wide text-white uppercase italic md:text-4xl lg:text-5xl">
          Welcome to Bubb&apos;s Corner Pub
        </h2>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-4xl text-center text-base leading-relaxed text-white/70 md:text-lg">
          At{' '}
          <span className="font-semibold text-white">
            Bubb&apos;s Corner Pub
          </span>
          , we bring the best of{' '}
          <span className="font-semibold text-white">
            Midwestern hospitality
          </span>{' '}
          together with the excitement of a true sports pub. Whether you are
          stopping in for a casual meal with friends, catching the big game on
          our <span className="font-semibold text-white">wide-screen TVs</span>,
          or celebrating with the community, our pub is the place to be. From
          sizzling <span className="font-semibold text-white">wings</span> and
          loaded <span className="font-semibold text-white">waffle fries</span>{' '}
          to fresh <span className="font-semibold text-white">flatbreads</span>,
          burgers, and craft brews, our menu is packed with{' '}
          <span className="font-semibold text-white">
            elevated comfort food
          </span>{' '}
          that fuels good times and great memories.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="flex flex-col items-center">
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay with Title */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <h3 className="text-2xl tracking-wider text-white uppercase italic md:text-3xl lg:text-4xl">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Button */}
              <Link
                href={card.buttonLink}
                className="mt-6 rounded-md border-2 border-brand bg-brand px-6 py-3 font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-brand-hover hover:border-brand-hover"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
