import { colorDescription } from "../../documents/colors/index";

import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: "Page Representation",
  name: "pageRepresentation",
  descripton: "A document that represents an actual page on the website. This document does not handle anything design or layout related, it is only content focused. This content can then be taken and used in a layout in multiple ways.",
  type: "document",
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "images", title: "Images", options: { sortOrder: 20 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

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
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Header',
      name: 'header',
      type: 'localeString',
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'localeString',
      fieldset: 'content',
    },
    {
      title: 'CTA Text',
      name: 'ctaText',
      type: 'localeString',
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'localeText',
      fieldset: 'content',
    },
    {
      title: 'Content Block',
      name: 'contentBlock',
      type: 'localeBlockContent',
      fieldset: 'content',
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'images',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Alternative Image',
      name: 'altImage',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'images',
    },
    {
      title: 'Text Color',
      name: 'textColor',
      description: colorDescription,
      type: 'color',
      options: { collapsible: true },
      fieldset: 'design',
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
        title: `${header} | ${eyebrow || '-'} | ${ctaText}`,
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
