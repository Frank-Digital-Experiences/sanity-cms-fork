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

  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'boolean',
      fieldset: 'listOfLanguages',
    },
    {
      title: 'Swedish',
      name: 'sv',
      type: 'boolean',
      fieldset: 'listOfLanguages',
    },
  ],
};
