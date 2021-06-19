import { FaTruck } from 'react-icons/fa';

export default {
  name: 'shippingZone',
  type: 'document',
  title: 'Shipping Zone',
  icon: FaTruck,

  fields: [
    {
      title: "ID",
      type: "number",
      name: "id",
      validation: Rule => Rule.required(),
    },
    {
      title: "Name",
      type: "string",
      name: "name",
      validation: Rule => Rule.required(),
    },
    {
      title: "Profile ID",
      type: "string",
      name: "profile_id",
      validation: Rule => Rule.required(),
    },
    {
      title: "Location Group ID",
      type: "string",
      name: "location_group_id",
      validation: Rule => Rule.required(),
    },
    {
      title: "Admin Graphql Api ID",
      type: "string",
      name: "admin_graphql_api_id",
      validation: Rule => Rule.required(),
    },
    {
      title: "Price based shipping rates",
      type: "array",
      name: "price_based_shipping_rates",
      of: [
        { type: 'priceBasedShippingRate' },
      ],
    },
    {
      title: "Weight based shipping rates",
      type: "array",
      name: "weight_based_shipping_rates",
      of: [
        { type: 'weightBasedShippingRate' },
      ],
    },
    {
      title: "Countries",
      type: "array",
      name: "countries",
      of: [
        { type: 'shippingZoneCountry' },
      ],
    },
    {
      title: "Carrier Shipping Rate Providers",
      type: "array",
      name: "carrier_shipping_rate_providers",
      of: [
        { type: 'carrierShippingRateProvider' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'name',
      updatedAt: '_updatedAt'
    },
    prepare(selection) {
      const { updatedAt } = selection;

      return {
        ...selection,
        subtitle: updatedAt ? (new Date(updatedAt).toLocaleDateString()) : null,
      };
    }
  },
};
