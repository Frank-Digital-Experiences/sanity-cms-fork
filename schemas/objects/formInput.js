export default {
  title: 'Form Input',
  name: 'formInput',
  description: 'Input type form fields',
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
      title: 'Field Type',
      name: 'fieldType',
      type: 'string',
      options: {
        list: [
          { title: 'Email', value: 'email' },
          { title: 'Phone', value: 'phone' },
          { title: 'Text', value: 'text' },
          { title: 'Textarea', value: 'textarea' },
        ],
      },
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
      fieldType: 'fieldType',
    },
    prepare(selection) {
      const { fieldType } = selection;

      return {
        ...selection,
        subtitle: `Form Input: ${fieldType}`,
      };
    }
  },
};
