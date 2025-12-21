export type HappyHourItem = {
  id: string;
  item: string;
  price: number;
  category: 'drinks' | 'food';
};

export type HappyHourSchedule = {
  days: string;
  hours: string;
};

export const happyHourSchedule: HappyHourSchedule = {
  days: 'Mon-Fri',
  hours: '2PM-5PM',
};

export const happyHourDrinks: HappyHourItem[] = [
  {
    id: 'hh-domestic-draft-pints',
    item: 'Domestic Draft Pints',
    price: 2,
    category: 'drinks',
  },
  {
    id: 'hh-craft-beer',
    item: 'All craft beer $2 off',
    price: 2,
    category: 'drinks',
  },
  {
    id: 'hh-crown-reg',
    item: 'Crown reg',
    price: 3,
    category: 'drinks',
  },
  {
    id: 'hh-crown-peach-apple',
    item: 'Crown Peach & apple',
    price: 3,
    category: 'drinks',
  },
  {
    id: 'hh-don-julio-blanco',
    item: 'Don julio Blanco',
    price: 4,
    category: 'drinks',
  },
  {
    id: 'hh-wine-by-glass',
    item: 'Wine by glass',
    price: 4,
    category: 'drinks',
  },
  {
    id: 'hh-patron-silver',
    item: 'Patron Silver',
    price: 3.5,
    category: 'drinks',
  },
  {
    id: 'hh-jameson',
    item: 'Jameson',
    price: 3.5,
    category: 'drinks',
  },
  {
    id: 'hh-white-claw',
    item: 'White Claw',
    price: 3.5,
    category: 'drinks',
  },
];

export const happyHourFood: HappyHourItem[] = [
  {
    id: 'hh-fried-pickles',
    item: 'Fried Pickles',
    price: 5,
    category: 'food',
  },
  {
    id: 'hh-jalapeno-poppers',
    item: 'Jalapeno Poppers',
    price: 5,
    category: 'food',
  },
  {
    id: 'hh-chips-salsa',
    item: 'Chips & Salsa',
    price: 5,
    category: 'food',
  },
  {
    id: 'hh-flatbread',
    item: 'Flatbread',
    price: 8,
    category: 'food',
  },
  {
    id: 'hh-beef-tacos',
    item: 'Beef Tacos',
    price: 2,
    category: 'food',
  },
  {
    id: 'hh-chicken-tacos',
    item: 'Chicken Tacos',
    price: 2,
    category: 'food',
  },
];

export const happyHourItems: HappyHourItem[] = [
  ...happyHourDrinks,
  ...happyHourFood,
];

export const getHappyHourByCategory = (category: 'drinks' | 'food') => {
  return happyHourItems.filter((item) => item.category === category);
};
