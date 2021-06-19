import { MdSettings } from 'react-icons/md';
import { supportedLanguages } from "../languages";

export default {
  name: 'site',
  type: 'document',
  title: 'Site',
  icon: MdSettings,
  //__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 

  fieldsets: [
    {
      title: 'E-Commerce',
      name: 'ecommerce',
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Languages',
      name: 'languages',
      type: 'languages',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Default Currency',
      name: 'defaultCurrencyCode',
      type: 'currencyCode',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Shopify Shop',
      name: 'shopifyShopName',
      type: 'shopify.shopName',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      documentId: '_id',
    },
    prepare(selection) {
      const { documentId } = selection;

      return {
        title: `Site: #${documentId}`,
      }
    },
  },
};
