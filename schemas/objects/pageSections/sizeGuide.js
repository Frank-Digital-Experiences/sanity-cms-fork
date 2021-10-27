import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Size Guide',
  description: 'A page section to display a size guide',
  name: 'pageSections.sizeGuide',
  type: 'object',
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Size Guide',
      name: 'sizeGuide',
      type: 'reference',
      to: [
        { type: 'sizeGuide' },
      ],
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
      title: `sizeGuide.title`,
    },
  },
};
