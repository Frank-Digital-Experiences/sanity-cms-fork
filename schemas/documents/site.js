import { MdSettings } from 'react-icons/md';
import FieldsetTabs from '../../src/components/FieldsetTabs';
import { supportedLanguages } from "../languages";

export default {
  name: 'site',
  type: 'document',
  title: 'Site',
  icon: MdSettings,
  //__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  inputComponent: FieldsetTabs,

  fieldsets: [
    { title: 'Config', name: 'config', options: { sortOrder: 10 } },
    { title: 'E-Commerce', name: 'eCommerce', options: { sortOrder: 40 } },
    { title: 'Design', name: 'design', options: { sortOrder: 90 } },
  ],

  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      fieldset: 'config',
    },
    {
      title: 'Languages',
      name: 'languages',
      type: 'languages',
      fieldset: 'config',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Default Currency',
      name: 'defaultCurrencyCode',
      type: 'currencyCode',
      fieldset: 'eCommerce',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Shopify Shop',
      name: 'shopifyShopName',
      type: 'shopify.shopName',
      fieldset: 'eCommerce',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Themes',
      name: 'themeReferences',
      type: 'themeReferences',
      fieldset: 'design',
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
