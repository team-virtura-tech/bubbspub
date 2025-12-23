import { dailySpecials, type DailySpecial } from './daily-specials';
import {
  drinkCategories,
  drinkMenu,
  type DrinkCategory,
  type DrinkMenuItem,
} from './drink-menu';
import {
  foodCategories,
  foodMenu,
  type FoodCategory,
  type FoodMenuItem,
} from './food-menu';
import {
  happyHourDrinks,
  happyHourFood,
  happyHourSchedule,
  type HappyHourItem,
} from './happy-hour';

export type { DrinkCategory, DrinkMenuItem, FoodCategory, FoodMenuItem };

export const menu = {
  food: {
    categories: foodCategories,
    items: foodMenu,
  },
  drinks: {
    categories: drinkCategories,
    items: drinkMenu,
  },
} as const;

export { drinkCategories, drinkMenu, foodCategories, foodMenu };

export type MenuSection = {
  category: string;
  description?: string;
  items: Array<FoodMenuItem | DrinkMenuItem | HappyHourItem | DailySpecial>;
  type: 'food' | 'drink' | 'happy-hour' | 'daily-special';
};

/**
 * Get all menu categories in order: Food → Drinks → Happy Hour → Daily Specials
 */
export const getAllMenuCategories = (): string[] => {
  const categories: string[] = [];

  // Add food categories
  foodCategories.forEach((cat) => {
    categories.push(cat.name);
  });

  // Add drink categories
  drinkCategories.forEach((cat) => {
    categories.push(cat.name);
  });

  // Add Happy Hour if items exist
  if (happyHourDrinks.length > 0 || happyHourFood.length > 0) {
    categories.push('Happy Hour');
  }

  // Add Daily Specials if items exist
  if (dailySpecials.length > 0) {
    categories.push('Daily Specials');
  }

  return categories;
};

/**
 * Get all menu sections with their items organized by category
 */
export const getAllMenuSections = (): MenuSection[] => {
  const sections: MenuSection[] = [];

  // Add food sections
  foodCategories.forEach((cat) => {
    const items = foodMenu.filter((item) => item.category === cat.id);
    if (items.length > 0) {
      sections.push({
        category: cat.name,
        description: cat.description,
        items,
        type: 'food',
      });
    }
  });

  // Add drink sections
  drinkCategories.forEach((cat) => {
    const items = drinkMenu.filter((item) => item.category === cat.id);
    if (items.length > 0) {
      sections.push({
        category: cat.name,
        description: cat.description,
        items,
        type: 'drink',
      });
    }
  });

  // Add Happy Hour section
  if (happyHourDrinks.length > 0 || happyHourFood.length > 0) {
    sections.push({
      category: 'Happy Hour',
      description: `${happyHourSchedule.days} • ${happyHourSchedule.hours}`,
      items: [...happyHourDrinks, ...happyHourFood],
      type: 'happy-hour',
    });
  }

  // Add Daily Specials section
  if (dailySpecials.length > 0) {
    sections.push({
      category: 'Daily Specials',
      description: 'Check out our daily rotating specials',
      items: dailySpecials,
      type: 'daily-special',
    });
  }

  return sections;
};
