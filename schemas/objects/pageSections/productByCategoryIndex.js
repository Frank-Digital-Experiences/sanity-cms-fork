import { FaTshirt } from 'react-icons/fa';

export const PRODUCT_FILTERS = {
  'all-products':   'All products',
  'bestsellers':    'Bestsellers',
  'new-products':   'New products',
};

export default {
  title: 'Product By Category Index',
  description: 'A page section to browse all published products by category',
  name: 'pageSections.productByCategoryIndex',
  type: 'object',
  icon: FaTshirt,

  fields: [
    {
      title: 'Placeholder',
      name: 'placeholder',
      description: 'A section must have at least one attribute to be saved.',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],

  preview: {
    prepare(selection) {
      return {
        title: 'Product By Category Index',
      };
    },
  },
};
