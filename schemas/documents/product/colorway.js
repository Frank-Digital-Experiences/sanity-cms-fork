import React from 'react';
import { FaPaintBrush } from "react-icons/fa";

import { ColorPreview } from "../colors/index";

const productColorway = {
  title: 'Product Colorway',
  name: 'productColorway',
  description: 'Represents one color or colorcombination that a product comes in.',
  type: 'document',
  icon: FaPaintBrush,

  fields: [
    {
      title: 'Category',
      name: 'colorCategory',
      type: 'reference',
      to: [
        { type: 'colorCategory' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Code',
      name: 'code',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Color',
      name: 'color',
      type: 'reference',
      to: [
        { type: 'brandColor' },
        { type: 'colorCombo' },
      ],
    },
    {
      title: 'Image Preview',
      name: 'image',
      type: 'webImage',
    },
  ],

  preview: {
    select: {
      code: 'code',
      name: 'name.en',
      color: 'color.color.hex',
      image: 'image',
      subtitle: 'colorCategory.title.en',
    },
    prepare(selection) {
      const { code, name, color, image } = selection;

      return {
        ...selection,
        title: `${code} ${name}`,
        media: image ? image : (color ? () => <ColorPreview color={color} /> : null),
      };
    },
  },

  orderings: [
    {
      title: 'By Code',
      name: 'byCode',
      by: [
        { field: 'code', direction: 'asc' },
      ]
    },
  ],
};

export default productColorway;
