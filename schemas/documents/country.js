import { FaFlag } from 'react-icons/fa';

export default {
  name: 'country',
  type: 'document',
  title: 'Country',
  icon: FaFlag,

  fieldsets: [
    {
      title: 'Options & Policies',
      name: 'optionsAndPolicies',
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: "Name",
      description: "The local name of that country",
      type: "string",
      name: "name",
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Site',
      name: 'site',
      type: 'reference',
      to: [
        { type: 'site' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Currency',
      name: 'currencyCode',
      type: 'currencyCode',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Default Language',
      name: 'defaultLanguage',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Svenska', value: 'sv' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Defective Product Policy',
      name: 'defectiveProductPolicy',
      type: 'string',
      options: {
        list: [
          { title: 'Repair or Replace Guarantee', value: 'repair-replace' },
        ],
      },
      fieldset: 'optionsAndPolicies',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Shipping & Return Policy',
      name: 'shippingReturnPolicy',
      type: 'string',
      options: {
        list: [
          { title: 'Free Shipping & Free Returns', value: 'free-shipping-free-returns' },
        ],
      },
      fieldset: 'optionsAndPolicies',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Payment Options',
      name: 'paymentOptions',
      type: 'string',
      options: {
        list: [
          { title: 'Safe and secure payment with Klarna', value: 'safe-secure-klarna' },
          { title: 'Safe and secure payment with Shopify', value: 'safe-secure-shopify' },
        ],
      },
      fieldset: 'optionsAndPolicies',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'name',
      site: 'site._id',
    },
    prepare(selection) {
      const { site } = selection;

      return {
        ...selection,
        subtitle: `Site: ${site}`,
      };
    },
  },
};
