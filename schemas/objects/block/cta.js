export default {
  title: 'Call To Action',
  name: 'block.cta',
  type: 'object',

  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    // {
    //   title: "Page",
    //   type: "reference",
    //   name: "page",
    //   to: [
    //     { type: 'page' },
    //     { type: 'productCategoryPage' },
    //     { type: 'productPage' },
    //     { type: 'productPageVariant' },
    //     { type: 'story' },
    //   ],
    //   validation: Rule => Rule.required(),
    // },
    {
      title: 'Theme',
      name: 'theme',
      type: 'string',
      options: {
        list: [
          { title: 'Ghost', value: 'ghost' },
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
          { title: 'Royal Blue', value: 'royal' },
          { title: 'Success Green', value: 'success' },
        ],
      },
      validation: Rule => Rule.required(),
    },
  ],
};
