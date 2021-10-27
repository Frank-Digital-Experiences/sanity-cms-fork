export default {
  name: 'theme',
  type: 'document',
  title: 'Theme',

  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
      validation: Rule => Rule.required(),
    },
    {
      title: 'Elements',
      name: 'elements',
      type: 'array',
      of: [
        { type: 'theme.element' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      elementTag1: 'elements.0.elementTag',
      elementClassNames1: 'elements.0.classNames',
    },
    prepare(selection) {
      const { elementTag1, elementClassNames1 } = selection;

      const subtitle = [elementTag1, elementClassNames1].filter(Boolean).join(' ');
      return {
        ...selection,
        subtitle,
      };
    }
  },
};
