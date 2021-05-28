import { FaDollarSign } from 'react-icons/fa';

import { uniqueInSchema } from "../../src/validations";

export default {
  name: 'priceList',
  type: 'document',
  title: 'Price List',
  icon: FaDollarSign,

  fields: [
    {
      title: "Code",
      type: "string",
      name: "code",
      validation: Rule => Rule.required().custom(uniqueInSchema('priceList', 'code')),
    },
    {
      title: "Name",
      type: "string",
      name: "name",
      validation: Rule => Rule.required(),
    },
    {
      title: 'Main Currency',
      name: 'mainCurrencyCode',
      type: 'currencyCode',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      code: 'code',
      name: 'name',
      subtitle: 'mainCurrencyCode',
    },
    prepare(selection) {
      const { code, name } = selection;

      return {
        ...selection,
        title: `${code} - ${name}`,
      };
    },
  },

  orderings: [
    {
      title: 'By Code',
      by: [
        { field: 'code', direction: 'asc' },
      ],
    },
  ],
};
