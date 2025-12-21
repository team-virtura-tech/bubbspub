'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  drinkCategories,
  drinkMenu,
  foodCategories,
  foodMenu,
  type DrinkMenuItem,
  type FoodMenuItem,
} from '@/data/menu';

export const MenuTabs = () => {
  const componentName = 'MenuTabs';

  return (
    <section
      id={componentName}
      data-component={componentName}
      className="mx-auto w-full max-w-screen-xl px-4 py-12 md:px-6 md:py-16"
    >
      <Tabs defaultValue="food" className="w-full">
        <TabsList className="mx-auto mb-8 grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger
            value="food"
            className="data-[state=active]:bg-brand data-[state=active]:text-white"
          >
            Food
          </TabsTrigger>
          <TabsTrigger
            value="drinks"
            className="data-[state=active]:bg-brand data-[state=active]:text-white"
          >
            Drinks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="food" className="space-y-8">
          {foodCategories.map((category) => {
            const categoryItems = foodMenu.filter(
              (item) => item.category === category.id
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                <div className="border-b border-brand pb-2">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="mt-1 text-sm text-muted-foreground md:text-base">
                      {category.description}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {categoryItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </TabsContent>

        <TabsContent value="drinks" className="space-y-8">
          {drinkCategories.map((category) => {
            const categoryItems = drinkMenu.filter(
              (item) => item.category === category.id
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                <div className="border-b border-brand pb-2">
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="mt-1 text-sm text-muted-foreground md:text-base">
                      {category.description}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {categoryItems.map((item) => (
                    <DrinkItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </section>
  );
};

type MenuItemCardProps = {
  item: FoodMenuItem;
};

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <div className="rounded-lg border p-4 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-base md:text-lg">
            {item.name}
            {item.isVegetarian && (
              <span className="ml-2 text-xs text-green-600">(V)</span>
            )}
            {item.isVegan && (
              <span className="ml-2 text-xs text-green-600">(VG)</span>
            )}
          </h3>
          {item.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          )}
          {item.addOns && (
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{item.addOns}</span>
            </p>
          )}
          {item.allergens && item.allergens.length > 0 && (
            <p className="mt-1 text-xs text-muted-foreground">
              Allergens: {item.allergens.join(', ')}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 font-semibold">
          {item.sizes ? (
            <span className="text-sm">
              {item.sizes.split(' · ').map((size, idx) => (
                <span key={idx}>
                  {idx > 0 && ' · '}
                  {size
                    .replace(/(\$\d+)/g, '<strong>$1</strong>')
                    .split('<strong>')
                    .map((part, i) =>
                      part.startsWith('$') ? (
                        <strong key={i}>{part.replace('</strong>', '')}</strong>
                      ) : (
                        part.replace('</strong>', '')
                      )
                    )}
                </span>
              ))}
            </span>
          ) : (
            `$${item.price.toFixed(2)}`
          )}
        </div>
      </div>
    </div>
  );
};

type DrinkItemCardProps = {
  item: DrinkMenuItem;
};

const DrinkItemCard = ({ item }: DrinkItemCardProps) => {
  return (
    <div className="rounded-lg border p-4 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-base md:text-lg">{item.name}</h3>
          {item.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          )}
          {item.addOns && (
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{item.addOns}</span>
            </p>
          )}
          <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
            {item.volume && <span>{item.volume}</span>}
            {item.abv && <span>{item.abv}% ABV</span>}
          </div>
        </div>
        <div className="flex-shrink-0 font-semibold">
          {item.sizes ? (
            <span className="text-sm">
              {item.sizes.split(' · ').map((size, idx) => (
                <span key={idx}>
                  {idx > 0 && ' · '}
                  {size
                    .replace(/(\$\d+)/g, '<strong>$1</strong>')
                    .split('<strong>')
                    .map((part, i) =>
                      part.startsWith('$') ? (
                        <strong key={i}>{part.replace('</strong>', '')}</strong>
                      ) : (
                        part.replace('</strong>', '')
                      )
                    )}
                </span>
              ))}
            </span>
          ) : (
            `$${item.price.toFixed(2)}`
          )}
        </div>
      </div>
    </div>
  );
};
