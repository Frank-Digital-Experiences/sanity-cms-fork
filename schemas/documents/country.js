import React from 'react';
import { FaFlag } from 'react-icons/fa';

import FieldsetTabs from "../../src/components/FieldsetTabs";
import { supportedLanguages } from "../languages";

export default {
  name: 'country',
  type: 'document',
  title: 'Country',
  icon: FaFlag,
  inputComponent: FieldsetTabs,

  fieldsets: [
    {
      title: 'Details',
      name: 'details',
      options: { collapsible: true },
    },
    {
      title: 'Options & Policies',
      name: 'optionsAndPolicies',
      options: { collapsible: true },
    },
    {
      title: 'Shopping',
      name: 'shopping',
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: "Name",
      type: "localeString",
      name: "name",
      fieldset: 'details',
      validation: Rule => Rule.required(),
    },
    {
      title: "Sort by",
      type: "string",
      name: "sortBy",
      fieldset: 'details',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      fieldset: 'details',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Region',
      name: 'region',
      type: 'reference',
      to: [
        { type: 'region' },
      ],
      fieldset: 'details',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Site',
      name: 'site',
      type: 'reference',
      to: [
        { type: 'site' },
      ],
      fieldset: 'details',
    },
    {
      title: 'Languages',
      name: 'languages',
      type: 'languages',
      fieldset: 'details',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Default Language',
      name: 'defaultLanguage',
      type: 'string',
      options: {
        list: supportedLanguages.map(lang => ({
          title: lang.title,
          value: lang.id,
        })),
      },
      fieldset: 'details',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Sovereignity',
      name: 'sovereignity',
      type: 'string',
      fieldset: 'details',
    },
    {
      title: 'Shipping Zone',
      name: 'shippingZone',
      type: 'reference',
      to: [
        { type: 'shippingZone' },
      ],
      fieldset: 'details',
    },
    {
      title: 'Member Of',
      name: 'memberOf',
      type: 'countryMemberships',
      fieldset: 'details',
    },
    {
      title: 'Currency',
      description: 'The currency we are selling in to this country',
      name: 'currencyCode',
      type: 'currencyCode',
      fieldset: 'shopping',
      validation: Rule => Rule.required(),
    },
    {
      title: 'VAT Rate',
      description: 'Input the VAT Rate as a decimal value representing the percentage',
      name: 'vatRate',
      type: 'number',
      fieldset: 'shopping',
    },
    {
      title: 'Payment Methods',
      name: 'paymentMethods',
      type: 'paymentMethods',
      fieldset: 'shopping',
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
    },
  ],

  preview: {
    select: {
      title: 'name.en',
      shippingZone: 'shippingZone.name',
      site: 'site._id',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { site, slug, shippingZone } = selection;

      return {
        ...selection,
        subtitle: `Site: ${site || 'N/A'}, Zone: ${shippingZone || 'N/A'}`,
        media: () => <img src={`https://www.countryflags.io/${slug}/flat/32.png`} alt={slug} />
      };
    },
  },

  orderings: [
    {
      title: 'Configured Sort Order',
      by: [
        { field: 'sortBy', direction: 'asc' },
      ],
    },
  ],
};
