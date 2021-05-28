const productSizeStandard = {
  title: 'Product Size Standard',
  name: 'productSizeStandard',
  description: 'Represents one specific set of sizes, i.e. S - XL, Inch Waist Sizes, etc.',
  type: 'document',

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Notes',
      description: 'Notes for internal purposes of explaining what type of sizes this standard refers to',
      name: 'notes',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'notes',
    },
  },
};

export default productSizeStandard;
