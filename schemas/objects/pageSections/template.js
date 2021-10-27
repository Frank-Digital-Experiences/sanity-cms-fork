export default {
  title: 'Template',
  description: 'A page section with a reference to a Page Section Template',
  name: 'pageSections.template',
  type: 'object',

  fields: [
    {
      title: 'Template',
      name: 'template',
      type: 'reference',
      to: [
        { type: 'pageSectionTemplate' },
      ],
    },
  ],

  preview: {
    select: {
      templateName: `template.name`,
      subtitle: `template.pageSections.0._type`,
    },
    prepare(selectors) {
      const { templateName } = selectors;

      return {
        ...selectors,
        title: `Template: ${templateName}`,
      };
    },
  },
};
