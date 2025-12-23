import { CategoryNav } from '@/components/custom/CategoryNav';
import { MenuHeroSection } from '@/components/custom/MenuHeroSection';
import { MenuSection } from '@/components/custom/MenuSection';
import { getAllMenuCategories, getAllMenuSections } from '@/data/menu';

export default function MenuPage() {
  const categories = getAllMenuCategories();
  const sections = getAllMenuSections();

  return (
    <div>
      <MenuHeroSection />
      <CategoryNav categories={categories} />

      {/* Menu Sections */}
      <div className="pt-15">
        {sections.map((section) => (
          <MenuSection key={section.category} section={section} />
        ))}
      </div>
    </div>
  );
}
