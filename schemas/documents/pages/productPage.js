import { FaTshirt } from 'react-icons/fa';

import { baseLanguage } from "../../languages";


export default {
  name: 'productPage',
  type: 'document',
  title: 'Product Page',
  icon: FaTshirt,

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
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
      title: "Page Variants",
      type: "array",
      name: 'pageVariants',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productPageVariant' },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      productCode: 'product.code',
      productName: 'product.name',
      title: `pageConfig.pageSeo.title.${baseLanguage.id}`,
      subtitle: 'pageConfig.slug.current',
      media: 'pageConfig.pageSeo.image',
    },
    prepare(selection) {
      const { productCode, productName } = selection;

      return {
        ...selection,
        title: selection.title || `${productCode} ${productName}`,
      };
    },
  },

  orderings: [
    {
      title: 'Slug, Asc',
      name: 'slugAsc',
      by: [
        {field: 'pageConfig.slug.current', direction: 'asc'},
      ],
    },
    {
      title: 'Product Code, Asc',
      name: 'byProductCodeAsc',
      by: [
        {field: 'product.code', direction: 'asc'},
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
