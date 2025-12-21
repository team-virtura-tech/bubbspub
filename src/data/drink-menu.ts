export type DrinkMenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  abv?: number; // Alcohol by volume percentage
  volume?: string; // e.g., "16 oz", "500ml"
  sizes?: string;
  addOns?: string;
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
  {
    id: 'shotzz',
    name: 'Shotzz',
  },
  {
    id: 'signature-drinks',
    name: 'Signature Drinks',
  },
  {
    id: 'cocktails',
    name: 'Cocktails',
  },
  {
    id: 'white-wine',
    name: 'White Wine',
  },
  {
    id: 'red-wine',
    name: 'Red Wine',
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
    id: 'pineapple-orange-bull',
    name: 'Pineapple Orange Bull',
    description: '',
    price: 5.5,
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
    id: 'ibc-root-beer',
    name: 'IBC Root Beer',
    description: '',
    price: 4.5,
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
    id: 'arnold-palmer',
    name: 'Arnold Palmer',
    description: '',
    price: 3.5,
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
    id: 'milk',
    name: 'Milk',
    description: 'Reg, Chocolate',
    price: 4,
    category: 'beverages',
  },
  {
    id: 'red-bull',
    name: 'Red Bull',
    description: 'Reg, sugar free, blue edition, yellow edition, coconut berry',
    price: 5.5,
    category: 'beverages',
  },
  {
    id: 'coffee',
    name: 'Coffee',
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
    id: 'jarritos',
    name: 'Jarritos',
    description: 'Fruit Punch, Mandarin, Pineapple',
    price: 3.5,
    category: 'beverages',
  },
  {
    id: 'coconut-water',
    name: 'Coconut Water',
    description: '',
    price: 4,
    category: 'beverages',
  },
  {
    id: 'summer-tea',
    name: 'Summer Tea',
    description: 'OLE SMOKEY SWEET TEA, PEACH SCHNAPPS, LEMON JUICE',
    price: 5.5,
    category: 'shotzz',
  },
  {
    id: 'habanero-shooter',
    name: 'Habanero Shooter',
    description:
      'OLE SMOKEY MANGO HABANERO, TAJIN RIM. GARNISH WITH APPLE SLICE',
    price: 5.5,
    category: 'shotzz',
  },
  {
    id: 'pickleback',
    name: 'Pickleback',
    description: 'JAMESON IRISH WHISKEY, PICKLE JUICE. GARNISHED PICKLE COIN',
    price: 6.5,
    category: 'shotzz',
  },
  {
    id: 'scooby-shot',
    name: 'Scooby Shot',
    description: 'BANANA SCHNAPP, CINAMON SCHNAPP, BAILEYS',
    price: 5.5,
    category: 'shotzz',
  },
  {
    id: 'slamdunk',
    name: 'Slamdunk',
    description: 'GUINNESS, JAMESON, BAILEYS',
    price: 6.5,
    category: 'shotzz',
  },
  {
    id: 'bubble-gum',
    name: 'Bubble Gum',
    description: 'BANANA LIQUER, IRISH CREAM, BLUE CURACAO',
    price: 5.5,
    category: 'shotzz',
  },
  {
    id: 'nutty-irishman',
    name: 'Nutty Irishman',
    description: 'FRANGELICO AND IRISH CREAM',
    price: 5.5,
    category: 'shotzz',
  },
  {
    id: 'nutty-pbj',
    name: 'Nutty PB&J',
    description: 'SKREWBALL, CHAMBORD, PEANUT BUTTER RIM. ADD WHIP CREAM',
    price: 6.5,
    category: 'shotzz',
  },
  {
    id: 'red-dragon',
    name: 'Red dragon',
    description: 'CROWN ROYAL, AMARETTO, CRANBERRY',
    price: 6,
    category: 'shotzz',
  },
  {
    id: 'bear-down-bloody-mary',
    name: 'Bear Down Bloody Mary',
    description:
      'Titos vodka, jimmy bloody mary mix, spice blend, celery stick, pickles, pepperoni, cheddar cheese, olives, bacon, lime wedge, lemon wedge, celery salt rim. TAJIN tabasco, jalapeno poppers',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'john-daly',
    name: 'John Daly',
    description:
      'ABSOLUT VODKA, UNSWEETENED ICED TEA, LEMONADE, GARNISHED WITH LEMON WEDGE.',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'crosstown-mule',
    name: 'Crosstown Mule',
    description:
      'ABSOLUT VODKA, GINGER BEER, ANGOSTURA BITTERS, SMALL GINGER PIECES. GARNISHED WITH LIME WEDGE',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'rachels-cider',
    name: "Rachel's Cider",
    description: 'REV COLD TIME, ANGRY ORCHARD CIDER, FIREBALL',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'redzone-cosmo',
    name: 'Redzone Cosmo',
    description:
      'SOBIESKI LEMON VODKA, COINTREAU, CRANBERRY JUICE, LIME JUICE. GARNISHED WITH LEMON WEDGE.',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'personal-foul',
    name: 'Personal Foul',
    description:
      'THREE OLIVES GRAPE VODKA, BLUE CURACAO, CRANBERRY JUICE, SOUR MIX, SPRITE. GARNISHED WITH BLUEBERRIES.',
    price: 10.5,
    category: 'signature-drinks',
  },
  {
    id: 'fizzy-blitz-mimosa',
    name: 'Fizzy Blitz Mimosa',
    description:
      'LA MARCA PROSSECO, ORANGE JUICE. GARNISHED WITH ORANGE WEDGE.',
    price: 9.5,
    category: 'signature-drinks',
  },
  {
    id: 'southpaw-sunrise',
    name: 'Southpaw Sunrise',
    description:
      'DON JULIO BLANCO, CRANBERRY JUICE, ORANGE JUICE, PINEAPPLE JUICE. GARNISHED WITH CHERRY, ORANGE SLICE, PINEAPPLE CHUNKS.',
    price: 11,
    category: 'signature-drinks',
  },
  {
    id: 'corkscrew-punch',
    name: 'Corkscrew Punch',
    description:
      'BACARDI RUM, ORANGE JUICE, PINAEPPLE JUICE, CRANBERRY JUICE. GARNISHED WITH PINEAPPLE PIECES.',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'old-chicago-iced-tea',
    name: 'Old Chicago Iced Tea',
    description:
      'BACARDI RUM, BOMBAY SAPPHIRE, LIBUELA TEQUILA, TRIPLE SEC, SOUR MIX, COKE.',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'mojito',
    name: 'Mojito',
    description: '',
    price: 10,
    category: 'signature-drinks',
  },
  {
    id: 'lemon-drop-martini',
    name: 'Lemon Drop Martini',
    description:
      'SOBIESKI LEMON, COINTREU, SWEET & SOUR MIX, LEMON JUICE, LEMON GARNISH, WHIPPED CREAM FOAM',
    price: 11,
    category: 'cocktails',
  },
  {
    id: 'make-it-dirty',
    name: 'Make it Dirty',
    description: 'GREY GOOSE, OLIVE JUICE, DRY VERMOUTH, OLIVES',
    price: 10,
    category: 'cocktails',
  },
  {
    id: 'cocoa-craze',
    name: 'Cocoa Craze',
    description:
      'SMIRNOFF WHIPPED, BAILEYS IRISH CREAM, CHOCOLATE DRIZZLE, WHIPPED CREAM, COCOA POWDER',
    price: 11,
    category: 'cocktails',
  },
  {
    id: 'gummy-bear',
    name: 'Gummy Bear',
    description:
      'SMIRNOFF RASP, PEACH SCHNAPPS, SWEET & SOUR MIX, SPRITE, GUMMY BEARS, PEACH RINGS',
    price: 11,
    category: 'cocktails',
  },
  {
    id: 'blue-sapphire-martini',
    name: 'Blue Sapphire Martini',
    description: 'BOMBAY SAPPHIRE, BLUE CURACAO, DRY VERMOUTH, CHERRIES',
    price: 11,
    category: 'cocktails',
  },
  {
    id: 'ruby-slipper',
    name: 'Ruby Slipper',
    description: 'ABSOLUT, CHAMBORD, CRANBERRY JUICE',
    price: 10,
    category: 'cocktails',
  },
  {
    id: 'watermelon-candy',
    name: 'Watermelon Candy',
    description:
      'ABSOLUT, WATERMELON SYRUP, TRIPLE SEC, CRANBERRY JUICE, LIME JUICE, WATERMELON RINGS',
    price: 10,
    category: 'cocktails',
  },
  {
    id: 'cowhorn-biodynamic',
    name: 'Cowhorn Biodynamic',
    description: 'Rhône Bend, OR, 2007',
    price: 8,
    category: 'white-wine',
  },
  {
    id: 'saviah-cellars-sauvignon-blanc',
    name: 'Saviah Cellars Sauvignon Blanc',
    description: 'Semillon, WA 2008',
    price: 8,
    category: 'white-wine',
  },
  {
    id: 'cousino-macul-sauvignon-gris',
    name: 'Cousiño Macul Sauvignon Gris',
    description: 'Chile 2007',
    price: 7,
    category: 'white-wine',
  },
  {
    id: 'fess-parker-syrah',
    name: 'Fess Parker Syrah',
    description: 'Napa, CA 2004',
    price: 8,
    category: 'red-wine',
  },
  {
    id: 'meandro',
    name: 'Meandro',
    description: 'Douro, Portugal 2005',
    price: 9,
    category: 'red-wine',
  },
  {
    id: 'steele-pacini-zinfandel',
    name: 'Steele "Pacini" Zinfandel',
    description: 'Sonoma, CA 2006',
    price: 8,
    category: 'red-wine',
  },
];
