export type FoodMenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  allergens?: string[];
  sizes?: string;
  addOns?: string;
};

export type FoodCategory = {
  id: string;
  name: string;
  description?: string;
};

export const foodCategories: FoodCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
  },
  {
    id: 'salads',
    name: 'Salads',
  },
  {
    id: 'flatbreads',
    name: 'Flatbreads',
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
  },
  {
    id: 'wings',
    name: 'Wings',
    description:
      'Sauces: Sweet Chilli, Buffalo, Mango Habenero, Pineapple Mango, Habenero, Guiness BBQ, Devils Kill, Roasted Garlic Parm, Sesame Ginger, Garlic Parm, Carribean Jerk, Sucka Punch, Kentucky Bourbon, Lemon Pepper-Rub, Spicy Garlic, Nashville',
  },
  {
    id: 'sides',
    name: 'Sides',
  },
];

export const foodMenu: FoodMenuItem[] = [
  {
    id: 'loaded-waffle-fries',
    name: 'Loaded Waffle Fries',
    description:
      'Waffle fries topped with beer cheese, ground beef, sour cream, bacon, green onions',
    price: 12,
    category: 'starters',
  },
  {
    id: 'chips-salsa-guac',
    name: 'Chips Salsa & Guac',
    description: 'Tortilla chips served with salsa and guacamole on side',
    price: 12,
    category: 'starters',
  },
  {
    id: 'calamari',
    name: 'Calamari',
    description:
      'Hand breaded seasoned calamari served with our signature bang bang sauce',
    price: 16,
    category: 'starters',
  },
  {
    id: 'irish-nachos',
    name: 'Irish Nachos',
    description:
      'House potato chips topped with beer cheese, ground beef, sour cream, bacon and green onion',
    price: 12,
    category: 'starters',
  },
  {
    id: 'mozz-sticks-8ct',
    name: 'Mozz Sticks-8ct',
    description: 'Served with marinara sauce',
    price: 12,
    category: 'starters',
  },
  {
    id: 'spinach-dip',
    name: 'Spinach Dip',
    description:
      'Spinach artichoke dip, served with tortilla chips or pita bread',
    price: 12,
    category: 'starters',
  },
  {
    id: 'taproom-pretzel',
    name: 'Taproom Pretzel',
    description: 'Bavarian Pretzel served with beer cheese and honey mustard',
    price: 15,
    category: 'starters',
  },
  {
    id: 'taproom-nachos',
    name: 'Taproom Nachos',
    description:
      'Choose one: chicken/beef. Double layer nachos with choice of protein, shredded lettuce, tomato, olives, pico de gallo, jalapenos, bang bang sauce, beer cheese, shredded cheese, sour cream.',
    addOns: 'Guac +$4',
    price: 18,
    category: 'starters',
  },
  {
    id: 'fried-pickles',
    name: 'Fried Pickles',
    description:
      'Hand breaded pickles coins, deep fried and served with cayenne ranch',
    price: 12,
    category: 'starters',
  },
  {
    id: 'house-salad',
    name: 'House Salad',
    description:
      'Fresh greens, tomatoes, cucumbers, red onions, croutons. Choice of dressing.',
    addOns: 'Chicken +$6 · Shrimp +$6',
    price: 10,
    category: 'salads',
  },
  {
    id: 'caesar',
    name: 'Caesar',
    description: 'Romaine, grated parm, croutons, caesar dressing',
    price: 10,
    category: 'salads',
  },
  {
    id: 'fiesta-salad',
    name: 'Fiesta Salad',
    description:
      'Fresh greens, bell peppers, tortilla strips, cucumbers, shredded cheddar jack cheese, pico de gallo, croutons, tossed in spicy Caesar dressing',
    price: 18,
    category: 'salads',
  },
  {
    id: 'meatlover',
    name: 'Meatlover',
    description: 'Pepperoni, sausage, bacon, marinara sauce, mozz cheese',
    price: 16,
    category: 'flatbreads',
  },
  {
    id: 'veggie-lover',
    name: 'Veggie Lover',
    description:
      'Garlic parm, bell peppers, onions, mushrooms, tomato, mozz cheese',
    price: 16,
    category: 'flatbreads',
    isVegetarian: true,
  },
  {
    id: 'cheese-pizza',
    name: 'Cheese Pizza',
    description: 'Marinara sauce and mozz cheese',
    price: 14,
    category: 'flatbreads',
    isVegetarian: true,
  },
  {
    id: 'blt',
    name: 'BLT',
    description: 'Bacon, lettuce, tomato, mayo',
    price: 13,
    category: 'sandwiches',
  },
  {
    id: 'montecristo',
    name: 'Montecristo',
    description:
      'Turkey, ham, swiss cheese, american cheese, white bread, served with raspberry puree and powdered sugar',
    price: 16,
    category: 'sandwiches',
  },
  {
    id: 'cheesesteak',
    name: 'Cheesesteak',
    description:
      'Shaved sirloin, peppers, onion relish, double provolone cheese on hoagie roll',
    price: 16,
    category: 'sandwiches',
  },
  {
    id: 'pub-club',
    name: 'Pub Club',
    description:
      'Turkey, bacon, lettuce, tomato, burner mayo, Pepper Jack cheese on sour dough',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'smashburger',
    name: 'Smashburger',
    description:
      'Double layer smashed patties with double cheese, shredded lettuce, tom, onion, burner mayo',
    price: 16,
    category: 'sandwiches',
  },
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese',
    description: 'Layers of american cheese on white bread',
    price: 13,
    category: 'sandwiches',
    isVegetarian: true,
  },
  {
    id: 'bbq-pulled-pork',
    name: 'BBQ Pulled Pork',
    description:
      'Guiness BBQ pork, pickles, onion ring, coleslaw on brioche bun',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'traditional-wings',
    name: 'Traditional',
    description: '',
    addOns: 'All flats or drums +$3',
    sizes: '8ct $14 · 16ct $21',
    price: 14,
    category: 'wings',
  },
  {
    id: 'wings-wings',
    name: 'Wings',
    description: '**tip on wings**',
    sizes: '8ct $14 · 16ct $21',
    price: 14,
    category: 'wings',
  },
  {
    id: 'boneless-wings',
    name: 'Boneless',
    description: '',
    sizes: '8ct $14 · 16ct $21',
    price: 14,
    category: 'wings',
  },
  {
    id: 'tenders',
    name: 'Tenders',
    description: '',
    sizes: '3ct $12 · 5ct $18',
    price: 12,
    category: 'wings',
  },
  {
    id: 'waffle-fries',
    name: 'Waffle Fries',
    description: '',
    price: 7,
    category: 'sides',
  },
  {
    id: 'onion-rings',
    name: 'Onion Rings',
    description: '',
    price: 8,
    category: 'sides',
  },
  {
    id: 'tator-tots',
    name: 'Tator Tots',
    description: '',
    price: 7,
    category: 'sides',
  },
  {
    id: 'side-house-salad',
    name: 'Side House Salad',
    description: '',
    price: 6,
    category: 'sides',
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: '',
    price: 5,
    category: 'sides',
  },
  {
    id: 'house-potato-chips',
    name: 'House Potato Chips',
    description: '',
    price: 7,
    category: 'sides',
  },
  {
    id: 'straight-cut-fries',
    name: 'Straight Cut Fries',
    description: '',
    price: 6,
    category: 'sides',
  },
  {
    id: 'garlic-waffle-fries',
    name: 'Garlic Waffle Fries',
    description: '',
    price: 8,
    category: 'sides',
  },
  {
    id: 'sweet-potato-fries',
    name: 'Sweet Potato Fries',
    description: '',
    price: 8,
    category: 'sides',
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    description: '',
    price: 5,
    category: 'sides',
  },
  {
    id: 'curly-fries',
    name: 'Curly Fries',
    description: '',
    price: 8,
    category: 'sides',
  },
];
