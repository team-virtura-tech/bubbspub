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
    item: '16ct Boneless Wings',
    price: 14,
    day: 'sunday',
  },
  {
    id: 'sunday-traditional-wings',
    item: '16ct Traditional Wings',
    price: 14,
    day: 'sunday',
  },
  {
    id: 'sunday-bear-down-bloody',
    item: 'Bear Down Bloody',
    price: 7,
    day: 'sunday',
  },
  {
    id: 'sunday-beermosa',
    item: 'Beermosa',
    price: 6,
    day: 'sunday',
  },
  {
    id: 'sunday-mimosa',
    item: 'Mimosa',
    price: 6,
    day: 'sunday',
  },
  {
    id: 'sunday-domestic-buckets',
    item: 'Domestic Buckets',
    price: 12,
    day: 'sunday',
  },
  {
    id: 'sunday-gameday-buckets',
    item: 'Gameday Buckets- Sunday only',
    price: 'Domestic-$10 Import-$14',
    day: 'sunday',
  },

  // MONDAY
  {
    id: 'monday-domestic-draft-pints',
    item: 'Domestic Draft Pints',
    price: 2.5,
    day: 'monday',
  },
  {
    id: 'monday-busch-tall-cans',
    item: 'Busch tall cans',
    price: 2,
    day: 'monday',
  },
  {
    id: 'monday-burgers',
    item: 'Burgers',
    price: 9,
    day: 'monday',
  },
  {
    id: 'monday-apps',
    item: 'Apps- $2 off',
    price: '$2 off',
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
    id: 'tuesday-kids-eat-free',
    item: 'Kids Eat Free***',
    price: 'Free',
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
    item: '16ct Boneless Wings w/fries',
    price: 14,
    day: 'wednesday',
  },
  {
    id: 'wednesday-traditional-wings',
    item: '16ct Traditional Wings w/fries',
    price: 14,
    day: 'wednesday',
  },
  {
    id: 'wednesday-old-fashioned-house',
    item: 'Old Fashioned-House',
    price: 6,
    day: 'wednesday',
  },
  {
    id: 'wednesday-wine-any',
    item: 'Wine-any-$5 glass',
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
    id: 'thursday-steak-dinner',
    item: 'Steak Dinner',
    price: 15.99,
    day: 'thursday',
  },
  {
    id: 'thursday-high-noon',
    item: 'High Noon',
    price: 3.5,
    day: 'thursday',
  },
  {
    id: 'thursday-white-claw',
    item: 'White Claw',
    price: 3.5,
    day: 'thursday',
  },
  {
    id: 'thursday-u-call-it',
    item: 'U Call It- $5',
    price: 5,
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
    id: 'friday-buffalo-mac',
    item: 'Buffalo Mac',
    price: 14,
    day: 'friday',
  },
  {
    id: 'friday-michelada',
    item: 'Michelada',
    price: 6,
    day: 'friday',
  },
  {
    id: 'friday-crown-apple',
    item: 'Crown Apple',
    price: 5,
    day: 'friday',
  },
  {
    id: 'friday-crown-peach',
    item: 'Crown Peach',
    price: 4.5,
    day: 'friday',
  },
  {
    id: 'friday-signature-shots',
    item: 'Signature Shots-$2 off',
    price: '$2 off',
    day: 'friday',
  },

  // SATURDAY
  {
    id: 'saturday-domestic-drafts-22oz',
    item: 'Domestic Drafts 22oz',
    price: 4,
    day: 'saturday',
  },
  {
    id: 'saturday-mozz-sticks-fried-pickles',
    item: 'Mozz Sticks or Fried Pickles',
    price: 6,
    day: 'saturday',
  },
  {
    id: 'saturday-bear-down-bloody',
    item: 'Bear Down Bloody',
    price: 7,
    day: 'saturday',
  },
  {
    id: 'saturday-mimosa',
    item: 'Mimosa',
    price: 6,
    day: 'saturday',
  },
  {
    id: 'saturday-beermosa',
    item: 'Beermosa',
    price: 6,
    day: 'saturday',
  },
  {
    id: 'saturday-all-salads',
    item: 'All Salads-$2 Off',
    price: '$2 Off',
    day: 'saturday',
  },
];

export const getDailySpecials = (day: DailySpecial['day']) => {
  return dailySpecials.filter((special) => special.day === day);
};

export const getCurrentDaySpecials = () => {
  const days: DailySpecial['day'][] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const today = new Date().getDay();
  return getDailySpecials(days[today]);
};
