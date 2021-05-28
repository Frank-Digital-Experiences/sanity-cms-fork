export default {
  title: 'Site Scope',
  name: 'siteScope',
  type: 'object',
  
  fieldsets: [
    {
      title: 'List of Sites',
      name: 'listOfSites',
      options: { collapsible: true }
    }
  ],

  fields: [
    {
      title: 'All Sites',
      name: 'allSites',
      type: 'boolean',
    },
    {
      title: 'Global',
      name: 'global',
      type: 'boolean',
      fieldset: 'listOfSites',
    },
    {
      title: 'EU',
      name: 'eu',
      type: 'boolean',
      fieldset: 'listOfSites',
    },
    {
      title: 'SE',
      name: 'se',
      type: 'boolean',
      fieldset: 'listOfSites',
    },
  ],
};
