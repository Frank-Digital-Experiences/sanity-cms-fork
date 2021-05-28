export default {
  name: "netlifyForm",
  type: "document",
  title: "Netlify Form",

  fields: [
    {
      name: "formId",
      type: "slug",
      title: "Form ID",
      validation: Rule => Rule.required(),
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
      validation: Rule => Rule.required(),
    },
    {
      title: 'Form Fields',
      name: 'formFields',
      type: 'array',
      of: [
        { type: 'formAddress' },
        { type: 'formInput' },
        { type: 'formSelect' },
        { type: 'formToggle' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Submit Text',
      name: 'submitText',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title.en",
      subtitle: 'formId.current',
    },
  },
};
