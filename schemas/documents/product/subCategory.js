const productCategory = {
  title: 'Product Sub-Category',
  name: 'productSubCategory',
  description: 'Sub-Categories for Products.',
  type: 'document',

  fields: [
    {
      title: 'Main Category',
      name: 'productCategory',
      type: 'reference',
      to: [
        { type: 'productCategory' },
      ],
      validation: Rule => Rule.required(),
    },
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
      subtitle: 'productCategory.title.en',
    },
  },
};

export default productCategory;
