export type DailySpecial = {
  id: string;
  item: string;
  price: number | string;
  day:
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday';
};

export const dailySpecials: DailySpecial[] = [
  // SUNDAY
  {
    id: 'sunday-boneless-wings',
    item: '12ct Boneless Wings',
    price: 10,
    day: 'sunday',
  },
  {
    id: 'sunday-traditional-wings',
    item: '12ct Traditional Wings',
    price: 10,
    day: 'sunday',
  },
  {
    id: 'sunday-bloodys',
    item: "Bloody's",
    price: 7,
    day: 'sunday',
  },
  {
    id: 'sunday-mimosa',
    item: 'Mimosa',
    price: 5,
    day: 'sunday',
  },
  {
    id: 'sunday-domestic-buckets',
    item: 'Domestic Buckets',
    price: 12,
    day: 'sunday',
  },

  // MONDAY
  {
    id: 'monday-domestic-draft-pints',
    item: 'Domestic Draft Pints',
    price: 3,
    day: 'monday',
  },
  {
    id: 'monday-busch-tall-cans',
    item: 'Busch tall cans',
    price: 2,
    day: 'monday',
  },
  {
    id: 'monday-burgers-fries',
    item: 'Burgers w/fries',
    price: 9,
    day: 'monday',
  },

  // TUESDAY
  {
    id: 'tuesday-modelo-draft-pint',
    item: 'Modelo Draft Pint',
    price: 3,
    day: 'tuesday',
  },
  {
    id: 'tuesday-house-margarita',
    item: 'House Margarita',
    price: 5,
    day: 'tuesday',
  },
  {
    id: 'tuesday-michelada',
    item: 'Michelada',
    price: 6,
    day: 'tuesday',
  },
  {
    id: 'tuesday-patron-silver',
    item: 'Patron Silver',
    price: 4.5,
    day: 'tuesday',
  },
  {
    id: 'tuesday-taco-entree',
    item: 'Taco entree',
    price: 8,
    day: 'tuesday',
  },

  // WEDNESDAY
  {
    id: 'wednesday-domestic-drafts-22oz',
    item: 'Domestic Drafts 22oz',
    price: 4.5,
    day: 'wednesday',
  },
  {
    id: 'wednesday-boneless-wings',
    item: '12ct Boneless Wings',
    price: 10,
    day: 'wednesday',
  },
  {
    id: 'wednesday-traditional-wings',
    item: '12ct Traditional Wings',
    price: 10,
    day: 'wednesday',
  },
  {
    id: 'wednesday-wine-any',
    item: 'Wine - $5 any glass',
    price: 5,
    day: 'wednesday',
  },
  {
    id: 'wednesday-whiskey',
    item: 'All whiskey 50% off',
    price: '50% off',
    day: 'wednesday',
  },

  // THURSDAY
  {
    id: 'thursday-burgers-fries',
    item: 'Burgers w/fries',
    price: 9,
    day: 'thursday',
  },
  {
    id: 'thursday-high-noon',
    item: 'High Noon',
    price: 3,
    day: 'thursday',
  },
  {
    id: 'thursday-white-claw',
    item: 'White Claw',
    price: 3,
    day: 'thursday',
  },
  {
    id: 'thursday-signature-drinks',
    item: 'All signature drinks',
    price: '$4 off',
    day: 'thursday',
  },

  // FRIDAY
  {
    id: 'friday-fish-n-chips',
    item: 'Fish N Chips',
    price: 10,
    day: 'friday',
  },
  {
    id: 'friday-michelada',
    item: 'Michelada',
    price: 6,
    day: 'friday',
  },
  {
    id: 'friday-chicken-parm-sandwich',
    item: 'Chicken Parm Sandwich',
    price: 10,
    day: 'friday',
  },

  // SATURDAY
  {
    id: 'saturday-domestic-drafts-22oz',
    item: 'Domestic Drafts 22oz',
    price: 4.5,
    day: 'saturday',
  },
  {
    id: 'saturday-mozz-sticks-fried-pickles',
    item: 'Mozz Sticks or Fried Pickles',
    price: 6,
    day: 'saturday',
  },
  {
    id: 'saturday-bloodys',
    item: "Bloody's",
    price: 7,
    day: 'saturday',
  },
  {
    id: 'saturday-mimosa',
    item: 'Mimosa',
    price: 5,
    day: 'saturday',
  },
  {
    id: 'saturday-loaded-waffle-fries',
    item: 'Loaded Waffle Fries',
    price: 8,
    day: 'saturday',
  },
];

export const getDailySpecials = (day: DailySpecial['day']) => {
  return dailySpecials.filter((special) => special.day === day);
};

/**
 * Get the current day of the week in EST/EDT timezone
 */
const getCurrentDayInEST = (): DailySpecial['day'] => {
  const now = new Date();
  const estFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'long',
  });
  const dayName = estFormatter.format(now).toLowerCase() as DailySpecial['day'];
  return dayName;
};

export const getCurrentDaySpecials = () => {
  const today = getCurrentDayInEST();
  return getDailySpecials(today);
};

export const getCurrentDayName = (): DailySpecial['day'] => {
  return getCurrentDayInEST();
};
