import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Activities - Bubb's Corner Pub",
  description:
    "Discover the entertainment and activities at Bubb's Corner Pub: Pool Tables, Darts, and Slot Machines.",
};

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-stone-950 pt-24 md:pt-[120px]">
      {/* Header Section */}
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-heading uppercase">
              Entertainment & Activities
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              At Bubb&apos;s Corner Pub, we offer more than just great food and
              drinks. Whether you&apos;re looking to challenge your friends,
              test your luck, or just kick back and enjoy the lively atmosphere,
              our activities guarantee a memorable night.
            </p>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="flex flex-col gap-24 sm:gap-32">
          {/* Pool Tables */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-900 lg:order-last border border-stone-800 shadow-2xl">
              <Image
                src="/images/landingPage/welcomeSection/pool_tables.png"
                alt="Pool Tables in our rustic area"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10" />
            </div>
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl font-heading mb-4">
                Pool Tables
              </h2>
              <p className="text-lg leading-8 text-stone-300 mb-6">
                Step into our dedicated pool area featuring professional-grade
                tables set against our signature rustic backdrop. Perfect for
                casual games with friends or serious competitive play.
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Professional-grade felt
                  and equipment
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Craft beer service right
                  at your table
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Ample space for larger
                  groups
                </li>
              </ul>
            </div>
          </div>

          {/* Darts */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl">
              <Image
                src="/images/landingPage/welcomeSection/darts.png"
                alt="Dart boards in our sports bar"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10" />
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl font-heading mb-4">
                Darts
              </h2>
              <p className="text-lg leading-8 text-stone-300 mb-6">
                Check out our classic dartboards framed against our exposed
                brick walls. It&apos;s the ultimate midwestern pub game to test
                your precision while enjoying a cold pint.
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> High-quality steel-tip
                  boards
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Excellent overhead
                  lighting
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Comfortable viewing
                  areas for spectators
                </li>
              </ul>
            </div>
          </div>

          {/* Slot Machines */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-900 lg:order-last border border-stone-800 shadow-2xl">
              <Image
                src="/images/landingPage/welcomeSection/slot_machines.png"
                alt="Modern slot machines"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10" />
            </div>
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl font-heading mb-4">
                Gaming Area
              </h2>
              <p className="text-lg leading-8 text-stone-300 mb-6">
                Feeling lucky? Try your hand at our premium selection of modern
                slot machines. Our gaming area offers a thrilling experience
                with the latest touch-screen games in a comfortable, exciting
                environment.
              </p>
              <ul className="space-y-3 text-stone-400">
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> The latest and most
                  popular games
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Comfortable seating and
                  attentive service
                </li>
                <li className="flex gap-3">
                  <span className="text-brand">✓</span> Exciting payouts in a
                  fun atmosphere
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
