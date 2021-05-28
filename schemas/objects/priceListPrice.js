export default {
  title: 'Price (in list)',
  name: 'priceList.price',
  type: 'object',

  fields: [
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [
        { type: 'product' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'price',
      validation: Rule => Rule.required(),
    },
  ],

  options: { collapsible: true },

  preview: {
    select: {
      productCode: 'product.code',
      productName: 'product.name',
      subtitle: 'price.amount',
    },
    prepare(selection) {
      const { productCode, productName } = selection;

      return {
        ...selection,
        title: `${productCode} ${productName}`,
      };
    },
  },
};
