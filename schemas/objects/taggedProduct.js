export default {
  title: 'tagged Product',
  name: 'taggedProduct',
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
      title: 'Colorway',
      name: 'productColorway',
      type: 'reference',
      to: [
        { type: 'productColorway' },
      ],
    },
    {
      title: 'Size',
      name: 'productSize',
      type: 'reference',
      to: [
        { type: 'productSize' },
      ],
    },
  ],

  preview: {
    select: {
      productCode: 'product.code',
      productName: 'product.name',
      colorwayCode: 'productColorway.code',
      colorwayName: 'productColorway.name.en',
      sizeAbbreviation: 'productSize.abbreviation',
    },
    prepare(selection) {
      const { productCode, productName, colorwayCode, colorwayName, sizeAbbreviation } = selection;

      return {
        ...selection,
        title: `${productCode} ${productName}`,
        subtitle: `Color: ${colorwayCode ? `${colorwayCode} ${colorwayName}` : 'N/A'} | Size: ${sizeAbbreviation ? sizeAbbreviation : 'N/A'}`
      }
    }
  },
};
