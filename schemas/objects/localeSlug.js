import { supportedLanguages } from "../languages";

const localeSlug = {
  title: 'Localized slug',
  name: 'localeSlug',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    source: (doc, options) => {
      return doc.title ? doc.title[leng.id] : null;
    },
    type: 'slug',
    fieldset: lang.isDefault ? null : 'translations'
  })),
};

export default localeSlug;
