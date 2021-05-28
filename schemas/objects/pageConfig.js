export default {
  title: 'Page Config',
  name: 'pageConfig',
  type: 'object',

  fields: [
    {
      title: 'Site Scope',
      name: 'siteScope',
      type: 'siteScope',
      validation: Rule => Rule.required(),
    },
    {
      title: "Parent Page",
      type: "reference",
      name: "parentPage",
      description: "This can reference any document that in turn has a 'pageConfig' field.",
      to: [
        { type: 'page' },
        { type: 'productPage' },
        { type: 'productPageVariant' },
        { type: 'story' },
      ]
    },
    {
      title: "Slug",
      type: "slug",
      name: "slug",
      validation: Rule => Rule.required(),
    },
    {
      title: "SEO",
      type: "pageSeo",
      name: "pageSeo",
      options: { collapsible: true },
      validation: Rule => Rule.required(),
    },
  ],
};
