const productSize = {
  title: 'Product Size',
  name: 'productSize',
  description: 'Represents one specific size that a product might come in.',
  type: 'document',

  fields: [
    {
      title: 'Abbreviation',
      name: 'abbreviation',
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Code',
      description: 'Internal code that can be used to uniquely identify each Size. This code will be used to build barcodes, etc.',
      name: 'code',
      type: 'string',
    },
    {
      title: 'Position',
      description: 'Is used by the size standard to order each size that has a reference to it',
      name: 'position',
      type: 'number',
    },
    {
      title: 'Size Standard',
      name: 'productSizeStandard',
      type: 'reference',
      to: [
        { type: 'productSizeStandard' },
      ],
    },
  ],

  preview: {
    select: {
      code: 'code',
      abbreviation: 'abbreviation',
      subtitle: 'productSizeStandard.title.en',
    },
    prepare(selection, viewOptions = {}) {
      const { code, abbreviation } = selection;

      return {
        ...selection,
        title: viewOptions.ordering?.name === 'byCode' ? `${code}: ${abbreviation}` : `${abbreviation} (${code})`,
      };
    }
  },

  orderings: [
    {
      title: 'By Size Code',
      name: 'byCode',
      by: [
        { field: 'code', direction: 'asc' },
      ],
    },
    {
      title: 'By Size Standard & Position',
      name: 'bySizeStandardPosition',
      by: [
        { field: 'productSizeStandard.title.en', direction: 'asc' },
        { field: 'position', direction: 'asc' },
      ],
    },
  ],
};

export default productSize;
