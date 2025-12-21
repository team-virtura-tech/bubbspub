import { HeroSection } from '@/components/custom/HeroSection';
import { OrderOnlineButton } from '@/components/custom/OrderOnline';
import { WelcomeSection } from '@/components/custom/WelcomeSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <OrderOnlineButton />
    </div>
  );
}
