import type { Metadata } from 'next';

import { CategoryNav } from '@/components/custom/CategoryNav';
import { DrinksHeroSection } from '@/components/custom/DrinksHeroSection';
import { MenuSection } from '@/components/custom/MenuSection';
import { NoticesSection } from '@/components/custom/NoticesSection';
import { Carousel } from '@/components/ui/carousel';
import { drinkCategories, drinkMenu } from '@/data/drink-menu';
import { menuNotices } from '@/data/notices';
import { FEATURES } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Drink Menu',
  description:
    'View our selection of craft beers, cocktails, and refreshing drinks.',
};

export default function DrinksPage() {
  // Build categories array for nav (menu-style layout)
  const categories = drinkCategories.map((cat) => cat.name);

  // Build sections array for MenuSection components
  const sections = drinkCategories
    .map((cat) => ({
      category: cat.name,
      description: cat.description,
      items: drinkMenu.filter((item) => item.category === cat.id),
      type: 'drink' as const,
    }))
    .filter((section) => section.items.length > 0);

  // Menu-style layout (no images, uses CategoryNav + MenuSection grid)
  if (FEATURES.showDrinksMenuWithoutImages) {
    return (
      <div id="DrinksPage" data-component="DrinksPage">
        {FEATURES.showDrinksHeroSection && <DrinksHeroSection />}
        <CategoryNav categories={categories} />
        <div className="pt-15">
          {sections.map((section) => (
            <MenuSection key={section.category} section={section} />
          ))}
        </div>
        <NoticesSection notices={menuNotices} />
      </div>
    );
  }

  // Carousel layout (with images)
  return (
    <div id="DrinksPage" data-component="DrinksPage">
      {FEATURES.showDrinksHeroSection && <DrinksHeroSection />}

      {drinkCategories.map((category) => {
        // Filter drinks by category and map to carousel format
        const categoryDrinks = drinkMenu
          .filter((drink) => drink.category === category.id)
          .map((drink) => ({
            id: drink.id,
            name: drink.name,
            subtitle: `$${drink.price.toFixed(2)}`,
            imageSrc:
              drink.image || '/images/drinksPage/heroSection/heroSection2.png',
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
