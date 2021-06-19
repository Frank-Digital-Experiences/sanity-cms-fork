export default {
  title: 'Form Select',
  name: 'formSelect',
  description: 'Field where you select from a set number of options',
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
          { title: 'Select', value: 'select' },
          { title: 'Radio', value: 'radio' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [
        { type: 'formSelectOption' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Default Option',
      name: 'defaultOption',
      type: 'string',
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
        subtitle: `Form Select: ${fieldType}`,
      };
    }
  },
};
