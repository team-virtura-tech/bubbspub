import { Menu1HeroPanel } from '@/components/custom/Menu1HeroPanel';
import { Menu1ScrollableMenu } from '@/components/custom/Menu1ScrollableMenu';
import { getAllMenuSections } from '@/data/menu';

export default function Menu1Page() {
  const sections = getAllMenuSections();

  return (
    <main
      id="Menu1Page"
      data-component="Menu1Page"
      className="flex min-h-screen w-full flex-col gap-3 bg-zinc-950 lg:flex-row"
    >
      {/* Left: Hero Panel (sticky on desktop) */}
      <Menu1HeroPanel />

      {/* Right: Menu Content */}
      <Menu1ScrollableMenu sections={sections} />
    </main>
  );
}
