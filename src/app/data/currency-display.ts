import { ICurrencyDisplay } from '../models/currency-display';

export const currencies: ICurrencyDisplay[] = [
  {
    title: 'USD',
    imageLink: 'https://i.ibb.co/r6GDmmN/icons8-usa-48px-1.png',
    buyPrice: 0,
    sellPrice: 0,
    currencyCode: 840,
  },
  {
    title: 'EUR',
    imageLink: 'https://i.ibb.co/DWLXdDL/icons8-euro-48px-1.png',
    buyPrice: 0,
    sellPrice: 0,
    currencyCode: 978,
  },
];

export const UAH: ICurrencyDisplay[] = [
  {
    title: 'UAH',
    imageLink: 'https://i.ibb.co/rx9JxjJ/icons8-ukraine-80px-1-1.png',
    buyPrice: 1,
    sellPrice: 1,
    currencyCode: 980,
  },
];
