import { DrinksHeroSection } from '@/components/custom/DrinksHeroSection';
import { Carousel } from '@/components/ui/carousel';
import { drinkCategories, drinkMenu } from '@/data/drink-menu';

export default function DrinksPage() {
  return (
    <div>
      <DrinksHeroSection />

      {drinkCategories.map((category) => {
        // Filter drinks by category and map to carousel format
        const categoryDrinks = drinkMenu
          .filter((drink) => drink.category === category.id)
          .map((drink) => ({
            id: drink.id,
            name: drink.name,
            subtitle: `$${drink.price.toFixed(2)}`,
            imageSrc: '/images/drinksPage/heroSection/heroSection1.png',
            isNew: false,
          }));

        // Only render carousel if category has drinks
        if (categoryDrinks.length === 0) return null;

        return (
          <Carousel
            key={category.id}
            items={categoryDrinks}
            title={category.name}
            subtitle={category.description || ''}
            className="py-12 md:py-16"
          />
        );
      })}
    </div>
  );
}
