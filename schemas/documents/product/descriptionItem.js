import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default {
  name: 'productDescriptionItem',
  type: 'document',
  title: 'Product Description Item',

  fields: [
    {
      title: "Description",
      type: "localeString",
      name: "description",
    },
  ],

  preview: {
    select: {
      title: 'description.en',
      sv: 'description.sv',
      en: 'description.en',
    },
    prepare(selection) {
      const { sv, en } = selection;

      const color = en ? ([sv].filter(Boolean).length == 1 ? 'green' : 'orange') : 'red';

      return {
        ...selection,
        media: () => <span style={{color}}><FaCheckCircle /></span>,
        subtitle: ['en', 'sv'].filter(l => Boolean(selection[l])).join(', '),
      };
    },
  },

  orderings: [
    {
      title: 'By Description',
      by: [
        { field: 'description.en', direction: 'asc' },
      ],
    }
  ]
};
