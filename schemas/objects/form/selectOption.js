export default {
  title: 'Form Select Option',
  name: 'formSelectOption',
  type: 'object',

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'value',
    },
  },
};
