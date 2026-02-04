import { CategoryNav } from '@/components/custom/CategoryNav';
import { MenuHeroSection } from '@/components/custom/MenuHeroSection';
import { MenuSection } from '@/components/custom/MenuSection';
import { NoticesSection } from '@/components/custom/NoticesSection';
import { getAllMenuCategories, getAllMenuSections } from '@/data/menu';
import { menuNotices } from '@/data/notices';
import { FEATURES } from '@/lib/config';

export default function MenuPage() {
  const categories = getAllMenuCategories();
  const sections = getAllMenuSections();

  return (
    <div>
      {FEATURES.showMenuHeroSection && <MenuHeroSection />}
      <CategoryNav categories={categories} />

      {/* Menu Sections */}
      <div className="pt-15">
        {sections.map((section) => (
          <MenuSection key={section.category} section={section} />
        ))}
      </div>

      {/* Notices Section */}
      <NoticesSection notices={menuNotices} />
    </div>
  );
}
