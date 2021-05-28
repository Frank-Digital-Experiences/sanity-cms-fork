export const IMPRESSION_LAYOUTS = {
  'hero-3:4': 'Hero, Tall (3:4)',
  'hero-16:9': 'Hero, Landscape (16:9)',
};

export default {
  title: 'Page Impression',
  name: 'pageImpression',
  type: 'document',

  fields: [
    {
      title: "Page Representation",
      name: 'pageRepresentation',
      type: "reference",
      to: [
        { type: 'pageRepresentation' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: "Layout",
      name: 'layout',
      type: "string",
      options: {
        list: Object.keys(IMPRESSION_LAYOUTS).map(value => ({ value, title: IMPRESSION_LAYOUTS[value] })),
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Text Color',
      name: 'textColor',
      type: 'color',
      options: { collapsible: true },
    },
  ],

  preview: {
    select: {
      layout: 'layout',
      header: 'pageRepresentation.header.en',
      eyebrow: 'pageRepresentation.eyebrow.en',
      ctaText: 'pageRepresentation.ctaText.en',
      media: 'pageRepresentation.mainImage',
    },
    prepare(selection) {
      const { header, eyebrow, ctaText, layout } = selection;

      return {
        ...selection,
        title: `${header} | ${eyebrow} | ${ctaText}`,
        subtitle: `Layout: ${IMPRESSION_LAYOUTS[layout]}`,
      };
    },
  },
};
