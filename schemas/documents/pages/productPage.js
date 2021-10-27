import { FaTshirt } from 'react-icons/fa';
import FieldsetTabs from '../../../src/components/FieldsetTabs';

export default {
  name: 'productPage',
  type: 'document',
  title: 'Product Page',
  icon: FaTshirt,
  inputComponent: FieldsetTabs,

  fieldsets: [
    {
      title: 'Content',
      name: 'content',
      options: { sortOrder: 10 },
    },
    {
      title: 'Config',
      name: 'config',
      fieldset: 'config',
      options: { sortOrder: 20 },
    },
    {
      title: 'Design',
      name: 'design',
      options: { sortOrder: 30 },
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
      title: "Product",
      name: "product",
      type: "reference",
      to: [
        { type: "product" },
      ],
      validation: Rule => Rule.required(),
      fieldset: 'content',
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
      subtitle: 'pageConfig.slug.current',
      media: 'pageConfig.pageSeo.image',
    },
    prepare(selection) {
      const { productCode, productName } = selection;

      return {
        ...selection,
        title: `${productCode} ${productName}`,
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
    {
      title: 'Product Name',
      by: [
        { field: 'product.name', direction: 'asc' },
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
