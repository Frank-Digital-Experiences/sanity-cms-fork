import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Form',
  description: 'A form section to add a Form to the page',
  name: 'pageSections.form',
  type: 'object',
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Grid Content", options: { sortOrder: 10 } },
    { name: "design", title: "Section Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Form',
      name: 'netlifyForm',
      type: 'reference',
      to: [
        { type: 'netlifyForm' },
      ],
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Incl. Title',
      name: 'inclTitle',
      type: 'boolean',
      fieldset: 'content',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
      fieldset: 'design',
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
