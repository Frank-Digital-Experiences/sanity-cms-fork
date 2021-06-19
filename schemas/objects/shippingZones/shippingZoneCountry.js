import React from 'react';

export default {
  title: 'Shipping Zone Country',
  name: 'shippingZoneCountry',
  type: 'object',

  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'number',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Code',
      name: 'code',
      type: 'string',
    },
    {
      title: 'Tax',
      name: 'tax',
      type: 'number',
    },
    {
      title: 'Tax Name',
      name: 'tax_name',
      type: 'string',
    },
    {
      title: 'Provinces',
      name: 'provinces',
      type: 'array',
      of: [
        { type: 'shippingZoneProvince' },
      ],
    },
    {
      title: 'Shipping Zone ID',
      name: 'shipping_zone_id',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'name',
      code: 'code',
    },
    prepare(selection) {
      const { code } = selection;

      return {
        ...selection,
        media: () => code ? <img src={`https://www.countryflags.io/${code.toLowerCase()}/flat/32.png`} alt={code} /> : null,
      };
    },
  },
};
