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
    id: 'shareables',
    name: 'Shareables',
  },
  {
    id: 'starters',
    name: 'Starters',
  },
  {
    id: 'wings',
    name: 'Wings',
    description:
      'Traditional wings available grilled. All wings come with ranch, celery, carrots. *choice of 2 sauce.\nSAUCES: Buffalo, Mango Habanero, Pineapple Mango Habanero, Guinness BBQ, Devils Kill, Garlic Parm, Sucka Punch, Spicy Garlic, Nashville Hot.\nRUBS: Lemon Pepper, Salt & Pepper, Spicy Sweet',
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
      'ALL BURGERS ARE 1/2 POUND ANGUS CHUCK, BRISKET AND RIB BLEND comes with choice of waffle fries, straight cut fries, tator tots, house potato chips \nupgrade the side- garlic waffle fries +2, sweet potato fries +2, broccoli +2, asparagus +3, side salad +3, coleslaw +2, mashed potato +2, onion rings +2, curly fries +2 served on brioche, sesame, pretzel +2, gluten free bun +2',
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches & Wraps',
    description:
      'Comes with choice of waffle fries, straight cut fries, tator tots, house potato chips \nupgrade the side- garlic waffle fries +2, sweet potato fries +2, broccoli +2, asparagus +3, side salad +3, coleslaw +2, mashed potato +2, onion rings +2, curly fries +2',
  },
  {
    id: 'sides',
    name: 'Sides',
  },
];

export const foodMenu: FoodMenuItem[] = [
  {
    id: 'bbq-sliders',
    name: 'BBQ Sliders',
    description: 'Guiness BBQ pulled pork, coleslaw, pickles, onion tanglers',
    price: 16,
    category: 'shareables',
    image: '/images/menuPage/heroSection.jpg',
  },
  {
    id: 'chicken-sliders-3ct',
    name: 'Chicken Sliders-3ct',
    description:
      'Fried chicken, coleslaw, pickles, nashville hot sauce and ranch on side',
    price: 16,
    category: 'shareables',
  },
  {
    id: 'taproom-pretzel',
    name: 'Taproom Pretzel',
    description:
      'Bavarian Pretzel with garlic butter, salt, served with jalapeno beer cheese, bacon honey mustard and sucka punch sauce on side',
    price: 16,
    category: 'shareables',
  },
  {
    id: 'taproom-nachos',
    name: 'Taproom Nachos',
    description:
      'Double layer nachos with choice of protein, shredded lettuce, olives, pico de gallo, jalapenos, beer cheese, shredded cheese, sucka punch drizzle, sour cream',
    addOns: 'Guac +4',
    price: 18,
    category: 'shareables',
  },
  {
    id: 'loaded-waffle-fries',
    name: 'Loaded Waffle Fries',
    description:
      'Seasoned waffle fries topped with beer cheese, ground beef, sour cream, bacon, green onions, pico de gallo',
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
    id: 'irish-nachos',
    name: 'Irish Nachos',
    description:
      'House potato chips topped with beer cheese, ground beef, sour cream, bacon and green onion',
    price: 12,
    category: 'starters',
  },
  {
    id: 'fries-and-ring',
    name: 'Fries and Ring',
    description: 'Basket of fries and onion rings, served with cayenne ranch',
    price: 9,
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
    name: 'Mozz Sticks',
    description:
      '6ct-Handbreaded topped with parm cheese & served with marinara sauce',
    price: 12,
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
    id: 'hummus-dip',
    name: 'Hummus Dip',
    description:
      'Fire roasted hummus dip topped with roasted corn, chickpeas and served with pita bread',
    price: 12,
    category: 'starters',
  },
  {
    id: 'jalapeno-snakebites',
    name: 'Jalapeno Snakebites',
    description:
      'Cream cheese, jalapeno, american cheese, bacon, deep fried, served with our devils kill sauce and ranch on side',
    price: 14,
    category: 'starters',
  },
  {
    id: 'potato-skins',
    name: 'Potato Skins',
    description:
      'Seasoned potato boats, melted cheese, bacon, green onion, sour cream',
    price: 14,
    category: 'starters',
  },
  {
    id: 'buffalo-chicken-salad',
    name: 'Buffalo Chicken',
    description:
      'Fresh greens, tomato, bleu cheese crumbles, cucumbers, red onions, bacon bits, fried chicken tossed in buffalo, ranch dressing',
    price: 16,
    category: 'salads',
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
    addOns: 'Add Chicken +6 · Add Shrimp +6',
    price: 10,
    category: 'salads',
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
    name: 'Cheesy',
    description: 'Marinara sauce and mozz cheese',
    price: 15,
    category: 'flatbreads',
    isVegetarian: true,
  },
  {
    id: 'meatlover',
    name: 'Meatlovers',
    description: 'Pepperoni, sausage, bacon, marinara sauce, mozz cheese',
    price: 16,
    category: 'flatbreads',
  },
  {
    id: 'classic-cheeseburger',
    name: 'Classic Burger',
    description: 'Tomato, lettuce, pickle, red onion and american cheese',
    price: 15,
    category: 'burgers',
  },
  {
    id: 'patty-melt',
    name: 'Patty Melt',
    description: 'Bacon, burger patty, onion bacon jam, american cheese',
    price: 15,
    category: 'burgers',
  },
  {
    id: 'guac-lover',
    name: 'Guac Lover',
    description:
      'Pepper jack cheese, guac, lettuce, tomato, red onion, burner mayo, tortilla strips, jalapenos',
    price: 17,
    category: 'burgers',
  },
  {
    id: 'pizza-smash',
    name: 'Pizza Smash',
    description:
      'Double patty smashed with mozz cheese, marinara sauce, garlic spread and giardiniera',
    price: 17,
    category: 'burgers',
  },
  {
    id: 'mushroom-swiss',
    name: 'Mushroom Swiss',
    description: 'Swiss cheese, sauteed mushrooms, lettuce, tomato, red onion',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'smashburger',
    name: 'Smashburger',
    description:
      'Double patty smashed with american cheese, lettuce, tomato, onions, pickles, burner mayo',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'wicked-boston',
    name: 'Wicked Boston',
    description:
      'Sam adams onion relish, american cheese, applewood bacon, lettuce, tomato, fry sauce',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'turkey-burger',
    name: 'Turkey',
    description: 'Turkey patty, lettuce, tomato, american cheese',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'bbq-bacon',
    name: 'BBQ Bacon',
    description:
      'Guiness bbq sauce, cheddar cheese, applewood bacon, onion tanglers, lettuce, tomato',
    price: 17,
    category: 'burgers',
  },
  {
    id: 'black-bean',
    name: 'Black Bean',
    description:
      'Lettuce, Tomatoes, red onions, pickles, jalapenos, roasted corn, burner mayo, american cheese',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'beyond-burger',
    name: 'Beyond',
    description:
      'Beyond patty, american cheese, lettuce, tomato, red onion, pickles',
    price: 16,
    category: 'burgers',
  },
  {
    id: 'steakburger',
    name: 'Steakburger',
    description:
      'Lettuce, onion relish, bell peppers, garlic spread, seasoning, and signature sauce',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'hawaiian-burger',
    name: 'Hawaiian',
    description:
      'Lettuce, tomato, red onion, grilled pineapple, pepper jack cheese, pico de gallo, mango habanero sauce, grilled jalapeno',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'heavyhitter',
    name: 'Heavyhitter',
    description:
      'The ultimate craving satisfier! 3 half pound patties stacked with lettuce, tomato, american cheese and mayo',
    price: 22,
    category: 'burgers',
  },
  {
    id: 'nacho-burger',
    name: 'Nacho Burger',
    description:
      'Beer cheese, shredded lettuce, tomato, red onion, pico de gallo, sour cream, bacon',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'cheesy-bubbs',
    name: "Cheesy Bubb's",
    description:
      'Patty, bacon, swiss cheese, with two grilled cheese buns, served with fry sauce on side',
    price: 18,
    category: 'burgers',
  },
  {
    id: 'beer-battered-fish-n-chips',
    name: 'Beer Battered Fish N Chips',
    description:
      'Sam adams beer battered cod with fries, coleslaw, lemon wedge and tartar sauce *FRIDAYS ONLY*',
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
    id: 'chicken-tenders-entree',
    name: 'Chicken Tenders',
    description:
      'Hand breaded tenders, served with coleslaw, ranch, bacon honey mustard, waffle fries',
    price: 16,
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
    id: 'steak-quesadilla',
    name: 'Steak Quesadilla',
    description: 'Seasoned carne asada, bell peppers, onion, mozz cheese',
    addOns: 'served with green salsa, chips, sour cream, guac',
    price: 17,
    category: 'main-entree',
  },
  {
    id: 'chicken-tinga-tacos',
    name: 'Chicken Tinga Tacos',
    description:
      'Marinated chicken, pico de gallo, mozz cheese, served with chips and salsa',
    price: 15,
    category: 'main-entree',
  },
  {
    id: 'steak-tacos',
    name: 'Steak Tacos',
    description:
      'Seasoned carne asada, bell peppers, onions, fry sauce, served with chips and salsa',
    addOns: '*Comes pre-mixed',
    price: 16,
    category: 'main-entree',
  },
  {
    id: 'shrimp-tacos',
    name: 'Shrimp Tacos',
    description:
      'Blackend shrimp, pico de gallo, cilantro lime sauce, served with chips and salsa',
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
    id: 'meatball',
    name: 'Meatball',
    description:
      'Meatballs, marinara sauce, giardiniera, mozz cheese, parm cheese, garlic spread on hoagie roll',
    price: 14,
    category: 'sandwiches',
  },
  {
    id: 'spicy-clucker',
    name: 'Spicy Clucker',
    description:
      'Fried chicken breast, lettuce, tomato, pickles, red onion, pepper jack cheese, buffalo sauce, ranch',
    addOns: '*On a brioche bun',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'bbq-pulled-pork',
    name: 'Pulled Pork',
    description:
      'Guinness bbq pork, pickles, onion tanglers, coleslaw on brioche bun',
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
    id: 'spicy-chicken-wrap',
    name: 'Spicy Chicken Wrap',
    description:
      'Breaded chicken tossed in spicy garlic sauce, shredded lettuce, tomatoes, red onion, jalapenos, pico de gallo, cayenne ranch, pepper jack cheese',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'pub-club',
    name: 'Pub Club',
    description:
      'Turkey, ham, bacon, lettuce, tomato, burner mayo, pepper jack cheese on sour dough',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'black-bean-wrap',
    name: 'Black Bean Wrap',
    description:
      'Black bean patty, american cheese, shredded lettuce, tomatoes, red onion, roasted bell peppers, hummus and our signature bang bang sauce',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'blackend-avocado',
    name: 'Blackend Avocado',
    description:
      'Grilled chicken breast with blackend seasoning, swiss cheese, bacon, lettuce, tomato, bacon honey mustard, sliced avacodo on sourdough bread',
    price: 16,
    category: 'sandwiches',
  },
  {
    id: 'turkey-wrap',
    name: 'Turkey Wrap',
    description:
      'Turkey, bacon, shredded lettuce, tomatoes, pepper jack cheese, burner mayo, on wheat wrap',
    price: 15,
    category: 'sandwiches',
  },
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese',
    description: 'Layers of american cheese, cheddar cheese on white bread',
    price: 13,
    category: 'sandwiches',
    isVegetarian: true,
  },
  {
    id: 'traditional-wings',
    name: 'Traditional',
    description: 'All flats or drums +3.00',
    sizes: '6ct-12 · 12ct-20',
    price: 12,
    category: 'wings',
  },
  {
    id: 'boneless-wings',
    name: 'Boneless',
    description: '',
    sizes: '6ct-12 · 12ct-20',
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
