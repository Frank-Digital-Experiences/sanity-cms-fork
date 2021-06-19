import { supportedLanguages } from "../languages";

export default {
  title: 'Languages',
  name: 'languages',
  type: 'object',
  
  fieldsets: [
    {
      title: 'List of Languages',
      name: 'listOfLanguages',
      options: { collapsible: true }
    }
  ],

  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'boolean',
    fieldset: 'listOfLanguages',
  })),
};
