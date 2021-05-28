export default {
  title: 'Multi Currency Price',
  name: 'multiCurrencyPrice',
  type: 'object',

  fields: [
    {
      title: 'EUR',
      name: 'eur',
      type: 'price',
    },
    {
      title: 'GBP',
      name: 'gbp',
      type: 'price',
    },
    {
      title: 'SEK',
      name: 'sek',
      type: 'price',
    },
    {
      title: 'USD',
      name: 'usd',
      type: 'price',
    },
  ],

  options: { collapsible: true },
};
