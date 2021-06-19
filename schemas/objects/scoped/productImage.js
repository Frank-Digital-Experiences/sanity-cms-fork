import { CATEGORIES, SUB_CATEGORIES, IMAGES_TYPES } from "../productImage";

export default {
  title: 'Scoped Product Image',
  name: 'scoped.productImage',
  type: 'object',

  fields: [
    {
      title: 'Product Photo',
      name: 'productPhoto',
      type: 'reference',
      to: [
        { type: 'productPhoto' },
      ],
    },
    {
      title: 'Only applies to ...',
      description: 'Leave blank if the same set applies to all Variants',
      name: 'productScope',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productColorway' },
            { type: 'productSize' },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      category: 'productPhoto.category',
      subCategory: 'productPhoto.subCategory',
      imageType: 'productPhoto.imageType',
      code1: 'productScope.0.code',
      code2: 'productScope.1.code',
      code3: 'productScope.2.code',
      subtitle: 'productPhoto.altText',
      media: 'productPhoto.image',
    },
    prepare(selection) {
      const { category, subCategory, imageType, code1, code2, code3 } = selection;

      const codes = [code1, code2, code3].filter(Boolean);
      
      return {
        ...selection,
        title: `Img for: ${codes.length === 0 ? 'All Colorways' : codes.join(', ')}`,
        subtitle: [CATEGORIES[category], SUB_CATEGORIES[subCategory], IMAGES_TYPES[imageType]].filter(Boolean).join(', '),
      };
    },
  },
};
