export type Notice = {
  id: string;
  text: string;
};

export const menuNotices: Notice[] = [
  {
    id: 'raw-food-warning',
    text: 'CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS, ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.',
  },
  {
    id: 'allergy-notice',
    text: 'Please communicate any food allergies to an employee of this establishment and that employee shall communicate that food allergy information to the Person In Charge or Certified Food Protection Manager on duty at this establishment.',
  },
  {
    id: 'service-charge',
    text: 'Service charge of 20% will be added to all parties of 6 or more*',
  },
  {
    id: 'price-disclaimer',
    text: 'Prices are subject to change.',
  },
];
