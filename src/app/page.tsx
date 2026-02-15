import { type Metadata } from 'next';

import { HeroSection } from '@/components/custom/HeroSection';
import { TodaySpecialSection } from '@/components/custom/TodaySpecialSection';
import { WelcomeSection } from '@/components/custom/WelcomeSection';

export const metadata: Metadata = {
  title: 'Home',
  keywords: ['South Elgin Pub', 'Sports Bar', 'Family Restaurant'],
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <TodaySpecialSection />
    </div>
  );
}
