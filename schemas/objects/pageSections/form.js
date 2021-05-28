export default {
  title: 'Form',
  description: 'A form section to add a Netlify Form to the page',
  name: 'pageSections.form',
  type: 'object',

  fields: [
    {
      title: 'Netlify Form',
      name: 'netlifyForm',
      type: 'reference',
      to: [
        { type: 'netlifyForm' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Incl. Title',
      name: 'inclTitle',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      subtitle: 'netlifyForm.title.en',
    },
    prepare(selection) {
      return {
        ...selection,
        title: 'Netlify Form',
      };
    },
  },
};
