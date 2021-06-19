import { FaTshirt } from 'react-icons/fa';

export const PRODUCT_FILTERS = {
//  'all-products':   'All products',
  'bestsellers':    'Bestsellers',
  'new-products':   'New products',
  'profiling-friendly': 'Profiling friendly',
  'from-list': 'From List',
};

export default {
  title: 'Product Index',
  description: 'A page section to browse all published products',
  name: 'pageSections.productIndex',
  type: 'object',
  icon: FaTshirt,

  fields: [
    {
      title: 'Product Filter',
      name: 'productFilter',
      type: 'string',
      options: {
        list: Object.keys(PRODUCT_FILTERS).map(value => ({ value, title: PRODUCT_FILTERS[value] })),
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Product List',
      description: 'Product Filter must be set to "From List" for this list to be used.',
      name: 'productList',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productPageVariant' },
          ],
        },
      ],
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],

  preview: {
    select: {
      productFilter: 'productFilter',
    },
    prepare(selection) {
      const { productFilter } = selection;

      return {
        title: 'Product Index',
        subtitle: `Filter: ${PRODUCT_FILTERS[productFilter]}`,
      };
    },
  },
};
