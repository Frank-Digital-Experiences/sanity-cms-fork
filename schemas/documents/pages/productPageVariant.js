import React from "react";

import { baseLanguage } from "../../languages";
import { ColorPreview } from "../colors/index";

export default {
  title: 'Product Page Variant',
  name: 'productPageVariant',
  type: 'document',
  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
      validation: Rule => Rule.required(),
    },
    {
      title: "Main Page",
      name: "mainPage",
      type: "reference",
      to: [
        { type: "productPage" },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: "Product",
      name: "product",
      type: "reference",
      to: [
        { type: "product" },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: "Colorway",
      name: "productColorway",
      type: "reference",
      to: [
        { type: "productColorway" },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bestseller',
      name: 'bestseller',
      type: 'boolean',
    },
    {
      title: 'New Product',
      name: 'newProduct',
      type: 'boolean',
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
      subtitle: 'pageConfig.slug.current',
    },
    prepare(selection) {
      const { productCode, productName, colorwayCode, colorwayColor, colorwayImage, colorwayName } = selection;

      return {
        ...selection,
        title: `${productCode} ${productName} - ${colorwayCode} ${colorwayName}`,
        media: colorwayImage ? colorwayImage : (colorwayColor ? () => <ColorPreview color={colorwayColor} /> : null),
      };
    }
  },

  orderings: [
    {
      title: 'By Product & Colorway Codes',
      by: [
        { field: 'product.code', direction: 'asc' },
        { field: 'productColorway.code', direction: 'asc' },
      ],
    },
    {
      title: 'By Product & Colorway Names',
      by: [
        { field: 'product.name', direction: 'asc' },
        { field: `productColorway.name.${baseLanguage.id}`, direction: 'asc' },
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
