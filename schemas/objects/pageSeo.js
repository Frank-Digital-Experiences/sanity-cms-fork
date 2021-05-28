export default {
  title: 'Page SEO',
  name: 'pageSeo',
  type: 'object',

  fields: [
    {
      title: "Title",
      type: "localeString",
      name: "title",
      validation: Rule => Rule.required(),
    },
    {
      title: "Description",
      type: "localeText",
      name: "description",
    },
    {
      title: "Image",
      type: 'webImage',
      name: 'image',
    },    
  ],
};
