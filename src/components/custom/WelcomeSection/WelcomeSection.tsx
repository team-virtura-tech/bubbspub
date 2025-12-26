'use client';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

import plateForkKnifeAnimation from '@/../public/icons/animated/plate-fork-knife-hover-pinch.json';
import scooterAnimation from '@/../public/icons/animated/scooter-hover-pinch.json';
import twoAvatarAnimation from '@/../public/icons/animated/two-avatar-icon-calm-hover-jumping.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  icon: React.ReactNode;
}

const featureCards: FeatureCard[] = [
  {
    title: 'Our Food',
    description: 'Savor our signature dishes crafted with passion',
    image: '/images/landingPage/welcomeSection/pizza.png',
    buttonText: 'View Our Menu',
    buttonLink: '/menu',
    icon: (
      <Lottie
        animationData={plateForkKnifeAnimation}
        loop={true}
        autoplay={true}
        className="size-10"
      />
    ),
  },
  {
    title: 'Who We Are',
    description: "Discover the story behind Bubb's Corner Pub",
    image: '/images/landingPage/welcomeSection/Burger.png',
    buttonText: 'About Us',
    buttonLink: '/about-us',
    icon: (
      <Lottie
        animationData={twoAvatarAnimation}
        loop={true}
        autoplay={true}
        className="size-10"
      />
    ),
  },
  {
    title: 'Order Online',
    description: 'Get your favorites delivered or ready for pickup',
    image: '/images/landingPage/welcomeSection/wings.png',
    buttonText: 'Order Now',
    buttonLink: '/order',
    icon: (
      <Lottie
        animationData={scooterAnimation}
        loop={true}
        autoplay={true}
        className="size-10"
      />
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const WelcomeSection = () => {
  const componentName = 'WelcomeSection';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-4 py-20 md:px-8 lg:px-16 lg:py-32"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="block font-heading uppercase">Welcome to</span>
            <span className="mt-2 block font-heading text-white">
              Bubb&apos;s Corner Pub
            </span>
          </h2>

          <div className="mx-auto mb-8 h-1 w-40 bg-gradient-to-r from-transparent via-brand to-transparent" />

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-white md:text-xl">
            At{' '}
            <span className="font-semibold text-white">
              Bubb&apos;s Corner Pub
            </span>
            , we bring the best of{' '}
            <span className="font-semibold text-white">
              Midwestern hospitality
            </span>{' '}
            together with the excitement of a true sports pub. Whether
            you&apos;re stopping in for a casual meal with friends, catching the
            big game on our{' '}
            <span className="font-semibold text-white">wide-screen TVs</span>,
            or celebrating with the community, our pub is the place to be. From
            sizzling <span className="font-semibold text-white">wings</span> and
            loaded{' '}
            <span className="font-semibold text-white">waffle fries</span> to
            fresh <span className="font-semibold text-white">flatbreads</span>,
            burgers, and craft brews, our menu is packed with{' '}
            <span className="font-semibold text-white">
              elevated comfort food
            </span>{' '}
            that fuels good times and great memories.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {featureCards.map((card, index) => (
            <motion.div key={card.title} variants={cardVariants}>
              <Card className="group relative h-full overflow-hidden border-0 bg-stone-900/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-brand/20">
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="brightness-110 object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-stone-950/20 to-transparent transition-opacity duration-500 group-hover:from-stone-950/60 group-hover:via-stone-950/30" />

                  {/* Icon Badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-brand/90 p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-brand">
                    {card.icon}
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {card.title}
                    </h3>
                    <p className="text-sm text-stone-300 md:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <Button
                    asChild
                    variant="brand"
                    size="lg"
                    className="w-full group/btn"
                  >
                    <Link href={card.buttonLink}>
                      <span>{card.buttonText}</span>
                      <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
