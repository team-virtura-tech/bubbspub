import { HeroSection } from '@/components/custom/HeroSection';
import { TodaySpecialSection } from '@/components/custom/TodaySpecialSection';
import { WelcomeSection } from '@/components/custom/WelcomeSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <TodaySpecialSection />
    </div>
  );
}
