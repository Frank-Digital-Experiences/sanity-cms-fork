export default {
  title: 'Price',
  name: 'price',
  type: 'object',

  fields: [
    {
      title: 'Currency Code',
      name: 'currencyCode',
      type: 'currencyCode',
    },
    {
      title: 'Amount',
      name: 'amount',
      type: 'number',
    },
    {
      title: 'Compare To Price',
      description: 'This field holds the original price if it has been discounted',
      name: 'compareToPrice',
      type: 'number',
    },
    {
      title: 'Price includes tax?',
      name: 'priceInclTax',
      type: 'boolean',
      initialValue: false,
    },
  ],

  options: { collapsible: true },
};
