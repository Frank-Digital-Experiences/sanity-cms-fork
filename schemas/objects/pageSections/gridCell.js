import { FaCell } from "react-icons/fa";

import FieldsetTabs from "../../../src/components/FieldsetTabs";
import { colorDescription } from "../../documents/colors/index";

export default {
  title: 'Grid Cell',
  description: 'A cell in a Grid Page Section.',
  name: 'pageSections.gridCell',
  type: 'object',
  icon: FaCell,
  inputComponent: FieldsetTabs,

  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "images", title: "Images", options: { sortOrder: 15 } },
    { name: "layout", title: "Layout", options: { sortOrder: 20 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Page Representation',
      description: 'Use a pre-defined Page Representation to fill the content of the cell',
      name: 'pageRepresentation',
      type: 'reference',
      to: [
        { type: 'pageRepresentation' },
      ],
      fieldset: 'content',
    },
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
    },
    {
      title: 'Header',
      name: 'header',
      type: 'localeString',
      fieldset: 'content',
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
    {
      title: 'Cell Layout (Responsive)',
      description: 'If left blank, defaults to the layout set in the Grid section',
      name: 'cellLayout',
      type: 'responsive.cellLayout',
      fieldset: 'layout',
    },
    {
      title: 'Image Ratio (Responsive)',
      description: 'The image ratio to be used in the cell. Only applies to layouts that uses images.',
      name: 'imageRatio',
      type: 'responsive.imageRatio',
      fieldset: 'layout',
    },
    {
      title: 'Content placement (Responsive)',
      description: 'Where the content is placed inside the cell. Only applies to layouts that includes content. Defaults to "Center" for both horizontal and vertical',
      name: 'contentPlacement',
      type: 'responsive.placement',
      fieldset: 'layout',
    },
    {
      title: 'Cell padding (Responsive)',
      description: 'Can be used in combination with content placement to push content in from the edges.',
      name: 'cellPadding',
      type: 'responsive.padding',
      fieldset: 'layout',
    },
  ],
  preview: {
    select: {
      pageRepHeader: 'pageRepresentation.header.en',
      cellHeader: 'header.en',
      pageRepSlug: 'pageRepresentation.page.pageConfig.slug.current',
      cellSlug: 'page.pageConfig.slug.current',
      pageRepImage: 'pageRepresentation.mainImage',
      cellImage: 'mainImage',
    },
    prepare(selection) {
      const { pageRepHeader, cellHeader, pageRepSlug, cellSlug, pageRepImage, cellImage } = selection;

      return {
        ...selection,
        title: cellHeader || pageRepHeader,
        subtitle: cellSlug|| pageRepSlug,
        media: cellImage || pageRepImage,
      };
    }
  },
};
