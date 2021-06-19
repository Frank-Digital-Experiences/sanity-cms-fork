export default {
  title: 'Form Toggle',
  name: 'formToggle',
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
          { title: 'Checkbox', value: 'checkbox' },
          // { title: 'Button', value: 'button' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Value when Active',
      description: 'Defaults to "true"',
      name: 'valueActive',
      type: 'string',
    },
    {
      title: 'Value when Inactive',
      description: 'Defaults to "false"',
      name: 'valueInactive',
      type: 'string',
    },
    {
      title: 'Active by default?',
      name: 'defaultActive',
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
        subtitle: `Form Toggle: ${fieldType}`,
      };
    }
  },
};
