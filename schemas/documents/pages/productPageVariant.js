import React from "react";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

import { baseLanguage } from "../../languages";
import { ColorPreview } from "../colors/index";

export default {
  title: 'Product Page Variant',
  name: 'productPageVariant',
  type: 'document',
  inputComponent: FieldsetTabs,

  fieldsets: [
    {
      title: 'Product',
      name: 'product',
      options: { sortOrder: 10 },
    },
    {
      title: 'Content',
      name: 'content',
      options: { sortOrder: 20 },
    },
    {
      title: 'Config',
      name: 'config',
      fieldset: 'config',
      options: { sortOrder: 30 },
    },
    {
      title: 'Design',
      name: 'design',
      options: { sortOrder: 40 },
    },
  ],

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
      validation: Rule => Rule.required(),
      fieldset: 'config',
    },
    {
      title: "Main Page",
      name: "mainPage",
      type: "reference",
      to: [
        { type: "productPage" },
      ],
      validation: Rule => Rule.required(),
      fieldset: 'product',
    },
    {
      title: "Product",
      name: "product",
      type: "reference",
      to: [
        { type: "product" },
      ],
      validation: Rule => Rule.required(),
      fieldset: 'product',
    },
    {
      title: "Colorway",
      name: "productColorway",
      type: "reference",
      to: [
        { type: "productColorway" },
      ],
      validation: Rule => Rule.required(),
      fieldset: 'product',
    },
    {
      title: 'Bestseller',
      name: 'bestseller',
      type: 'boolean',
      fieldset: 'product',
    },
    {
      title: 'New Product',
      name: 'newProduct',
      type: 'boolean',
      fieldset: 'product',
    },
    {
      title: 'Discontinued',
      name: 'discontinued',
      type: 'boolean',
      fieldset: 'product',
    },
    {
      title: 'Hidden',
      name: 'hidden',
      type: 'boolean',
      fieldset: 'product',
    },
    {
      title: "Page Sections",
      type: "pageSections",
      name: "pageSections",
      fieldset: 'content',
    },
    {
      title: "Page Design",
      type: "pageDesign",
      name: "pageDesign",
      fieldset: 'design',
    },
  ],

  preview: {
    select: {
      productCode: 'product.code',
      productName: 'product.name',
      colorwayCode: 'productColorway.code',
      colorwayColor: 'productColorway.color.color.hex',
      colorwayName: `productColorway.name.${baseLanguage.id}`,
      colorwayImage: 'productColorway.image',
      slug: 'pageConfig.slug.current',
      discontinued: 'discontinued',
      hidden: 'hidden',
    },
    prepare(selection) {
      const { discontinued, hidden, productCode, productName, colorwayCode, colorwayColor, colorwayImage, colorwayName, slug } = selection;
      
      const subtitle = [
        discontinued ? 'DISCONTINUED' : null,
        hidden ? 'HIDDEN' : null,
      ].filter(Boolean).join(', ');

      return {
        ...selection,
        title: `${productCode} ${productName} - ${colorwayCode} ${colorwayName}`,
        subtitle: subtitle || slug,
        media: colorwayImage ? colorwayImage : (colorwayColor ? () => <ColorPreview color={colorwayColor} /> : null),
      };
    }
  },

  orderings: [
    {
      title: 'Product & Colorway Codes',
      by: [
        { field: 'product.code', direction: 'asc' },
        { field: 'productColorway.code', direction: 'asc' },
      ],
    },
    {
      title: 'Product & Colorway Names',
      by: [
        { field: 'product.name', direction: 'asc' },
        { field: `productColorway.name.${baseLanguage.id}`, direction: 'asc' },
      ],
    },
    {
      title: 'Slug',
      by: [
        { field: 'pageConfig.slug.current', direction: 'asc' },
      ],
    },
  ],

  initialValue: {
    pageConfig: {
      _type: 'pageConfig',
      siteScope: {
        _type: 'siteScope',
        allSites: true,
      }
    }
  },
};
