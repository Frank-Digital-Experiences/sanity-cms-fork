export default {
  title: 'Currency Code',
  name: 'currencyCode',
  type: 'string',
  options: {
    layout: 'radio',
    direction: 'horizontal',
    list: [
      { title: 'EUR', value: 'EUR' },
      { title: 'GBP', value: 'GBP' },
      { title: 'SEK', value: 'SEK' },
      { title: 'USD', value: 'USD' },
    ],
  },
};
