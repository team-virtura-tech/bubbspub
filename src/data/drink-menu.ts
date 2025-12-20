export type DrinkMenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  abv?: number; // Alcohol by volume percentage
  volume?: string; // e.g., "16 oz", "500ml"
};

export type DrinkCategory = {
  id: string;
  name: string;
  description?: string;
};

export const drinkCategories: DrinkCategory[] = [
  {
    id: 'beverages',
    name: 'Beverages',
  },
];

export const drinkMenu: DrinkMenuItem[] = [
  {
    id: 'soda',
    name: 'Soda',
    description: 'Coke products-free refills',
    price: 3.75,
    category: 'beverages',
  },
  {
    id: 'ibc-root-beer',
    name: 'IBC Root Beer',
    description: '',
    price: 4.5,
    category: 'beverages',
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Free refills',
    price: 3.75,
    category: 'beverages',
  },
  {
    id: 'coffee-or-tea',
    name: 'Coffee or Tea',
    description: '',
    price: 4.5,
    category: 'beverages',
  },
  {
    id: 'fiji-water',
    name: 'Fiji Water',
    description: '',
    price: 5.5,
    category: 'beverages',
  },
  {
    id: 'pineapple-orange-bull',
    name: 'Pineapple Orange Bull',
    description: '',
    price: 5.5,
    category: 'beverages',
  },
  {
    id: 'ginger-berry-cooler',
    name: 'Ginger Berry Cooler',
    description: '',
    price: 5.5,
    category: 'beverages',
  },
  {
    id: 'milk',
    name: 'Milk',
    description: 'Reg or chocolate',
    price: 4,
    category: 'beverages',
  },
  {
    id: 'jarritos',
    name: 'Jarritos',
    description: 'Fruit Punch, Mandarin, Pineapple',
    price: 3.5,
    category: 'beverages',
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    description: '',
    price: 3.5,
    category: 'beverages',
  },
  {
    id: 'arnold-palmer',
    name: 'Arnold Palmer',
    description: '',
    price: 3.5,
    category: 'beverages',
  },
  {
    id: 'coconut-water',
    name: 'Coconut Water',
    description: '',
    price: 4.5,
    category: 'beverages',
  },
  {
    id: 'red-bull',
    name: 'Red Bull',
    description: 'Reg, sugar free, blue edition, yellow edition, coconut berry',
    price: 5.5,
    category: 'beverages',
  },
];
