const productCategory = {
  title: 'Product Category',
  name: 'productCategory',
  description: 'Categories for Products.',
  type: 'document',

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title.en',
    },
  },
};

export default productCategory;
