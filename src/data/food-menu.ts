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
    id: 'wings',
    name: 'Wings',
    description:
      '**Traditional and Tip on wings available grilled. All wings come with ranch, celery, carrots. Choice of 2 sauces. Sauces: Sweet Chilli, Buffalo, Mango Habanero, Pineapple Mango Habanero, Guiness BBQ, Devils Kill, Roasted Garlic Parm, Sesame Ginger, Garlic Parm, Carribean Jerk, Sucka Punch, Kentucky Bourbon, Lemon Pepper-Rub, Spicy Garlic, Nashville Hot, Tangy City, Sweet bbq, salt and pepper rub, honey hot',
  },
  {
    id: 'tacos',
    name: 'Tacos',
    description: 'Served with green salsa, chips and red salsa',
  },
  {
    id: 'salads',
    name: 'Salads',
  },
  {
    id: 'main-entree',
    name: 'Main Entree',
  },
  {
    id: 'flatbreads',
    name: 'Flatbreads',
  },
  {
    id: 'burgers',
    name: 'Burgers',
    description:
      'ALL BURGERS ARE 1/2 POUND ANGUS CHUCK, BRISKET AND RIB BLEND comes with choice of waffle fries, straight cut fries, tator tots, house potato chips upgrade the side: garlic waffle fries +2, sweet potato fries +2, broccoli +2, asparagus +3, side of coleslaw +2, side salad +3, mashed potatoes +2, onion rings +2, curly fries +2',
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    description:
      'Comes with choice of waffle fries, straight cut fries, tator tots, house potato chips. Upgrade the side: garlic waffle fries +2, sweet potato fries +2, broccoli +2, asparagus +3, side salad +3, coleslaw +2, mashed potatoes +2, onion rings +2, curly fries +2',
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
      'Seasoned waffle fries topped with beer cheese, ground beef, sour cream, bacon, green onions, pico de gallo',
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
      'Choose one: chicken / beef. Double layer nachos with choice of protein, shredded lettuce, tomato, olives, pico de gallo, jalapenos, bang bang sauce, beer cheese, shredded cheese, sour cream, cayenne ranch',
    addOns: 'Guac +4',
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
    id: 'hummus-dip',
    name: 'Hummus Dip',
    description: 'Fire roasted hummus dip with pita bread',
    price: 12,
    category: 'starters',
  },
  {
    id: 'cauliflower-wings',
    name: 'Cauliflower Wings',
    description:
      'Hand breaded cauliflower deep fried. TRY IT TOSSED IN OUR SIGNATURE WING SAUCES!',
    price: 14,
    category: 'starters',
  },
  {
    id: 'fried-zucchini',
    name: 'Fried Zucchini',
    description: 'Hand breaded zucchini deep fried served with cayenne ranch',
    price: 12,
    category: 'starters',
  },
  {
    id: 'soup',
    name: 'Soup',
    description: 'Ask your server for soup of the day',
    price: 6,
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
    price: 15,
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
    id: 'bang-bang-shrimp-6ct',
    name: 'Bang Bang Shrimp-6ct',
    description:
      'Breaded shrimp tossed in our signature bang bang sauce, topped with green onions',
    price: 12,
    category: 'starters',
  },
  {
    id: 'mozz-sticks-8ct',
    name: 'Mozz Sticks-8ct',
    description: 'Served with marinara sauce',
    price: 10,
    category: 'starters',
  },
  {
    id: 'spinach-dip',
    name: 'Spinach Dip',
    description: 'Spinach artichoke dip, served with pita bread',
    price: 12,
    category: 'starters',
  },
  {
    id: 'house-salad',
    name: 'House',
    description:
      'Fresh greens, tomatoes, cucumbers, red onions, croutons. Choice of dressing.',
    addOns: 'Add Chicken +6 · Add Shrimp +6',
    price: 10,
    category: 'salads',
  },
  {
    id: 'caesar',
    name: 'Caesar',
    description: 'Romaine, grated parm, croutons, caesar dressing',
    addOns: 'Add Chicken +6 · Add Shrimp +5',
    price: 10,
    category: 'salads',
  },
  {
    id: 'fiesta-salad',
    name: 'Fiesta Salad',
    description:
      'Fresh greens, bell peppers, tomato, red onion, tortilla strips, cucumbers, shredded cheddar jack cheese, pico de gallo, croutons, grilled chicken, tossed in spicy caesar dressing',
    price: 18,
    category: 'salads',
  },
  {
    id: 'chicken-tinga-tacos',
    name: 'Chicken Tinga',
    description: 'Marinated chicken, pico de gallo, mozz cheese,',
    price: 14,
    category: 'tacos',
  },
  {
    id: 'beef-tacos',
    name: 'Beef Tacos',
    description: 'Ground beef, lettuce, tom, shredded cheese, cayenne ranch',
    price: 15,
    category: 'tacos',
  },
  {
    id: 'steak-tacos',
    name: 'Steak Tacos',
    description: 'Seasoned steak, bell peppers, onions, fry sauce',
    price: 15,
    category: 'tacos',
  },
  {
    id: 'bang-bang-tacos',
    name: 'Bang Bang',
    description:
      'Breaded shrimp tossed in bang bang sauce, pico and pineapple bits',
    price: 16,
    category: 'tacos',
  },
  {
    id: 'shrimp-tacos',
    name: 'Shrimp',
    description: 'Seasoned shrimp, pico de gallo, cilantro lime sauce',
    price: 15,
    category: 'tacos',
  },
  {
    id: 'meatlover',
    name: 'Meatlovers',
    description: 'Pepperoni, sausage, bacon, marinara, mozz cheese',
    price: 18,
    category: 'flatbreads',
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken',
    description: 'Guiness bbq sauce, chicken, mozz cheese, red onion, cilantro',
    price: 21,
    category: 'flatbreads',
  },
  {
    id: 'hawaiin-flatbread',
    name: 'Hawaiin',
    description:
      'Ham, pineapple, bacon, red onion, mozz cheese, marinara sauce, honey hot dressing',
    price: 19,
    category: 'flatbreads',
  },
  {
    id: 'veggie-lover',
    name: 'Veggie Lover',
    description:
      'Garlic parm base, mushrooms green pepper, onions, parm cheese, mozz cheese',
    price: 18,
    category: 'flatbreads',
    isVegetarian: true,
  },
  {
    id: 'mikeys-special',
    name: "Mikey's Special",
    description:
      'Chicken, pineapple mango habanero, pineapple, jalapenos, basil, marinara, onions, mozz cheese, cayenne ranch drizzle',
    price: 23,
    category: 'flatbreads',
  },
  {
    id: 'cheese-pizza',
    name: 'Cheesy',
    description: 'Mozz cheese, colby cheese, marinara sauce',
    price: 18,
    category: 'flatbreads',
    isVegetarian: true,
  },
  {
    id: 'classic-cheeseburger',
    name: 'Classic Cheeseburger',
    description: 'Tomato, lettuce, pickle, red onion and american cheese',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'beyond-burger',
    name: 'Beyond',
    description: 'Beyond patty, american cheese, lettuce, tomato, red onion',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'guac-lover',
    name: 'Guac Lover',
    description:
      'Pepper jack cheese, guac, lettuce, tomato, red onion, burner mayo, fry sauce, jalapenos',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'hawaiin-burger',
    name: 'Hawaiin',
    description:
      'Lettuce, tomato, red onion, grilled pineapple, pepper jack cheese, pico de gallo, mango habanero sauce, grilled jalspeno',
    price: 19,
    category: 'burgers',
  },
  {
    id: 'mushroom-swiss',
    name: 'Mushroom Swiss',
    description: 'Swiss cheese, sautéed mushrooms, lettuce, tomato, red onion',
    price: 17,
    category: 'burgers',
  },
  {
    id: 'bbq-bacon',
    name: 'BBQ Bacon',
    description:
      'Guiness bbq sauce, cheddar cheese, applewood bacon, onion tanglers, lettuce, tomato',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'smashburger',
    name: 'Smashburger',
    description:
      'Double patty smashed with american cheese, lettuce, onion, onions, pickles, burner mayo',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'pizza-smash',
    name: 'Pizza Smash',
    description:
      'Double patty smashed with mozz cheese, marinara sauce, garlic spread and giardiniera',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'buffalo-mac',
    name: 'Buffalo Mac',
    description:
      'Cavatappi pasta, three cheese sauce, shredded cheddar jack cheese, ranch sauce · Choose: fried or grilled chicken',
    price: 17,
    category: 'main-entree',
  },
  {
    id: 'chicken-parm',
    name: 'Chicken Parm',
    description:
      'Cavatappi pasta, spinach, artichoke dip, marinara sauce, breaded chicken breast served with garlic bread',
    price: 18,
    category: 'main-entree',
  },
  {
    id: 'beer-battered-fish-n-chips',
    name: 'Beer Battered Fish N Chips',
    description:
      'Sam adams beer battered cod with fries, coleslaw and tartar sauce',
    price: 18,
    category: 'main-entree',
  },
  {
    id: 'ribs',
    name: 'Ribs',
    description:
      'Half rack of grilled pork ribs seasoned with our signature rib rub and guiness bbq sauce. Comes with side of fries, coleslaw',
    addOns: 'FULL RACK 30',
    price: 23,
    category: 'main-entree',
  },
  {
    id: 'salmon-with-asparagus',
    name: 'Salmon with Asparagus',
    description:
      'Grilled Salmon, garlic lemon spread, cilantro, asparagus, lemon pepper seasoning',
    price: 24,
    category: 'main-entree',
  },
  {
    id: 'chicken-tenders-entree',
    name: 'Chicken Tenders',
    description:
      'Hand breaded tenders, served with coleslaw, ranch, bacon honey mustard, waffle fries',
    price: 18,
    category: 'main-entree',
  },
  {
    id: 'tinga-quesadilla',
    name: 'Tinga Quesadilla',
    description:
      'Chicken Tinga, mozz cheese served with chips salsa, sour cream, guac, green salsa',
    price: 16,
    category: 'main-entree',
  },
  {
    id: 'blt',
    name: 'BLT',
    description: 'Bacon, lettuce, tomato, mayo',
    price: 13,
    category: 'sandwiches',
  },
  {
    id: 'blackend-avocado',
    name: 'Blackend Avocado',
    description:
      'Grilled chicken breast with blackend seasoning, swiss cheese, bacon, lettuce, tomato, bacon honey mustard, sliced avocado on sourdough bread',
    price: 16,
    category: 'sandwiches',
  },
  {
    id: 'spicy-cluccker',
    name: 'Spicy Cluccker',
    description:
      'Fried chicken breast, lettuce, tomato, pickles, red onion, pepper jack cheese, buffalo sauce, ranch',
    addOns: 'MAKE THIS A WRAP!',
    price: 16,
    category: 'sandwiches',
  },
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese',
    description: 'Layers of american cheese on white bread',
    addOns: 'MAKE THIS A WRAP!',
    price: 13,
    category: 'sandwiches',
    isVegetarian: true,
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
    id: 'meatball',
    name: 'Meatball',
    description:
      'Meatballs, marinara sauce, giardiniera, mozz cheese, parm cheese, garlic spread on hoagie roll',
    price: 15,
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
      'Turkey, bacon, lettuce, tomato, burner mayo, pepper jack cheese on sour dough',
    addOns: 'MAKE THIS A WRAP!',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'bbq-pulled-pork',
    name: 'BBQ Pulled Pork',
    description:
      'Guiness bbq pork, pickles, onion tanglers, coleslaw on brioche bun',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'egg-sandwich-panini',
    name: 'Egg Sandwich-Panini',
    description:
      'Shredded eggs, mayo, tom, cheese, sriracha, cucumbers on white bread',
    price: 14,
    category: 'sandwiches',
  },
  {
    id: 'traditional-wings',
    name: 'Traditional',
    description: 'All flats or drums +3.00',
    sizes: '6ct-10 · 12ct-18',
    price: 10,
    category: 'wings',
  },
  {
    id: 'boneless-wings',
    name: 'Boneless',
    description: '',
    sizes: '6ct-12 · 12ct-18',
    price: 12,
    category: 'wings',
  },
  {
    id: 'wings-wings',
    name: 'Wings',
    description: '**tip on wings**',
    sizes: '6ct-10 · 12ct-18',
    price: 10,
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
    id: 'buffalo-chicken-salad',
    name: 'Buffalo Chicken',
    description:
      'Fresh greens, tomato, mozz cheese crumbles, cucumbers, red onions, bacon bits, breaded chicken tossed in buffalo, ranch dressing',
    addOns: 'Add Chicken +6 · Add Shrimp +6',
    price: 18,
    category: 'salads',
  },
  {
    id: 'shrimp-salad',
    name: 'Shrimp Salad',
    description:
      'Blackend shrimp, fresh greens, cucumbers, tomato, pico de gallo, bell peppers, shredded cheddar cheese, croutons, with sweet chilli drizzle. Choice of dressing',
    price: 18,
    category: 'salads',
  },
  {
    id: 'waffle-fries',
    name: 'Waffle Fries',
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
    id: 'onion-rings',
    name: 'Onion Rings',
    description: '',
    price: 8,
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
    id: 'tator-tots',
    name: 'Tator Tots',
    description: '',
    price: 7,
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
    id: 'side-house-salad',
    name: 'Side House Salad',
    description: '',
    price: 6,
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
    id: 'coleslaw',
    name: 'Coleslaw',
    description: '',
    price: 5,
    category: 'sides',
  },
  {
    id: 'asparagus',
    name: 'Asparagus',
    description: '',
    price: 8,
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
    id: 'mashed-potatoes',
    name: 'Mashed Potatoes',
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
