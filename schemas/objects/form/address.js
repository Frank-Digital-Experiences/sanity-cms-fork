export default {
  title: 'Form Address',
  name: 'formAddress',
  description: 'Set of inputs fields for an address.',
  type: 'object',

  fields: [
    {
      title: 'Field ID',
      name: 'fieldId',
      type: 'slug',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Label',
      name: 'label',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Required',
      name: 'required',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      title: 'label.en',
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: 'Form Address',
      };
    }
  },
};
