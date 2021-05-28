export default {
  title: "Page Representation",
  name: "pageRepresentation",
  descripton: "A document that represents an actual page on the website. This document does not handle anything design or layout related, it is only content focused. This content can then be taken and used in a layout in multiple ways.",
  type: "document",

  fields: [
    {
      title: "Page",
      type: "reference",
      name: "page",
      to: [
        { type: 'page' },
        { type: 'productCategoryPage' },
        { type: 'productPage' },
        { type: 'productPageVariant' },
        { type: 'story' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'localeString',
    },
    {
      title: 'CTA Text',
      name: 'ctaText',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'localeText',
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Alternative Image',
      name: 'altImage',
      type: 'image',
    },
  ],

  preview: {
    select: {
      header: 'header.en',
      eyebrow: 'eyebrow.en',
      ctaText: 'ctaText.en',
      slug: 'page.pageConfig.slug.current',
      media: 'mainImage',
    },
    prepare(selection) {
      const { header, eyebrow, ctaText } = selection;

      return {
        ...selection,
        title: `${header} | ${eyebrow} | ${ctaText}`,
      };
    }
  },
  
  orderings: [
    {
      title: 'Page Slug, Asc',
      name: 'slugAsc',
      by: [
        {field: 'page.pageConfig.slug.current', direction: 'asc'},
      ],
    },
  ],
};
