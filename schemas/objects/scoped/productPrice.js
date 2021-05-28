export default {
  title: 'Product Price',
  name: 'scoped.productPrice',
  type: 'object',

  fields: [
    {
      title: 'Price List',
      name: 'priceList',
      type: 'reference',
      to: [
        { type: 'priceList' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Price',
      name: 'price',
      type: 'price',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Only applies to ...',
      description: 'Leave blank if the same set applies to all Variants',
      name: 'productScope',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productColorway' },
            { type: 'productSize' },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'price.amount',
      subtitle: 'priceList.name',
    },
  },
};
