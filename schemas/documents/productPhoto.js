import { FaTshirt } from "react-icons/fa";

export const CATEGORIES = {
  'S': 'Studio',
  'L': 'Lifestyle',
};

export const SUB_CATEGORIES = {
  'M': 'Model',
  'H': 'Hanging',
  'F': 'Flat',
};

export const IMAGES_TYPES = {
  'F': 'Front',
  'B': 'Back',
  'L': 'Left',
  'R': 'Right',
  'T': 'Top',
  'U': 'Bottom',
  'D': 'Detail',
  'P': 'Packaging',
  'C': 'Care',
  'A': 'Alternative',
  'O': 'Other',
};

export default {
  title: 'Product Photo',
  name: 'productPhoto',
  type: 'document',
  icon: FaTshirt,

  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Alt Text',
      name: 'altText',
      type: 'localeString',
    },
    {
      title: 'Fitting Model',
      name: 'fittingModel',
      type: 'reference',
      to: [
        { type: 'fittingModel' },
      ],
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: Object.keys(CATEGORIES).map(c => ({ title: `${CATEGORIES[c]} (${c})`, value: c })),
      },
    },
    {
      title: 'Sub-Category',
      name: 'subCategory',
      type: 'string',
      options: {
        list: Object.keys(SUB_CATEGORIES).map(c => ({ title: `${SUB_CATEGORIES[c]} (${c})`, value: c })),
      },
    },
    {
      title: 'Type',
      name: 'imageType',
      type: 'string',
      options: {
        list: Object.keys(IMAGES_TYPES).map(c => ({ title: `${IMAGES_TYPES[c]} (${c})`, value: c })),
      },
    },
    {
      title: 'Tagged Product(s)',
      name: 'taggedProducts',
      type: 'array',
      of: [
        { type: 'taggedProduct' },
      ],
    },
  ],

  preview: {
    select: {
      altText: 'altText.en',
      title: 'image.asset.originalFilename',
      media: 'image',
      tagged1product:         'taggedProducts.0.product.name',
      tagged1productColorway: 'taggedProducts.0.productColorway.name.en',
      tagged1productSize:     'taggedProducts.0.productSize.abbreviation',
      tagged2product:         'taggedProducts.1.product.name',
      tagged2productColorway: 'taggedProducts.1.productColorway.name.en',
      tagged2productSize:     'taggedProducts.1.productSize.abbreviation',
      tagged3product:         'taggedProducts.2.product.name',
      tagged3productColorway: 'taggedProducts.2.productColorway.name.en',
      tagged3productSize:     'taggedProducts.2.productSize.abbreviation',
    },
    prepare(selection) {
      const { altText, tagged1product, tagged1productColorway, tagged1productSize, tagged2product, tagged2productColorway, tagged2productSize, tagged3product, tagged3productColorway, tagged3productSize } = selection;

      const tagged1 = [tagged1product, tagged1productColorway, tagged1productSize].filter(Boolean).join(', ');
      const tagged2 = [tagged2product, tagged2productColorway, tagged2productSize].filter(Boolean).join(', ');
      const tagged3 = [tagged3product, tagged3productColorway, tagged3productSize].filter(Boolean).join(', ');

      const tagged = [tagged1, tagged2, tagged3].filter(s => s !== '').map(s => `"${s}"`).join(' | ');

      return {
        ...selection,
        subtitle: tagged === '' ? 'Not tagged' : `Tagged: ${tagged}`,
      };
    },
  },

  orderings: [
    {
      title: 'By Orig. Filename',
      by: [
        { field: 'image.asset.originalFilename', direction: 'asc' },
      ],
    },
  ],
};
