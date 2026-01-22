'use client';

import { Menu1CategoryAccordion } from '@/components/custom/Menu1CategoryAccordion';
import type { MenuSection } from '@/data/menu';
import { cn } from '@/lib/utils';

export type Menu1ScrollableMenuProps = {
  sections: MenuSection[];
  className?: string;
};

export const Menu1ScrollableMenu = ({
  sections,
  className,
}: Menu1ScrollableMenuProps) => {
  const componentName = 'Menu1ScrollableMenu';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className={cn(
        'flex w-full flex-col bg-zinc-950 pt-20 lg:max-w-[720px] lg:flex-1 lg:pt-24',
        className
      )}
    >
      {/* Header */}
      <div className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
        <h1 className="font-heading text-3xl italic text-white md:text-4xl lg:text-5xl">
          Menu
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">
          Explore our menu of hearty dishes crafted with the finest ingredients.
          From juicy burgers to crispy wings, taste the best of pub grub!
        </p>
      </div>

      {/* Accordion Menu */}
      <Menu1CategoryAccordion sections={sections} />
    </section>
  );
};
