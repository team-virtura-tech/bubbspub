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
