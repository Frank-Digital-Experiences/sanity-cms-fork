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
  title: 'Product Image',
  name: 'productImage',
  type: 'image',
  options: { hotspot: true },

  fields: [
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
  ],
};
