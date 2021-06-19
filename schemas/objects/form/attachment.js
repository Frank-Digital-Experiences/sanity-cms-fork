export default {
  title: 'Form Attachment',
  name: 'formAttachment',
  description: 'File type form fields',
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
      title: 'Multiple?',
      description: 'Allow multiple files to be uploaded?',
      name: 'multiple',
      type: 'boolean',
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
