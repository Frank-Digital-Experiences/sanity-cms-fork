import { MdLibraryBooks } from 'react-icons/md';

import { baseLanguage } from "../../languages";


export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: MdLibraryBooks,
  // fieldsets: supportedLanguages.map(({ title, id }) => ({
  //   title,
  //   name: id,
  //   options: { collapsible: true },
  // })),

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
      validation: Rule => Rule.required(),
    },
    {
      title: "Page Sections",
      type: "pageSections",
      name: "pageSections"
    },
  ],

  preview: {
    select: {
      title: `pageConfig.pageSeo.title.${baseLanguage.id}`,
      subtitle: 'pageConfig.slug.current',
      media: 'pageConfig.pageSeo.image',
    },
  },
  
  orderings: [
    {
      title: 'Slug, Asc',
      name: 'slugAsc',
      by: [
        {field: 'pageConfig.slug.current', direction: 'asc'},
      ],
    },
  ],

  initialValue: {
    pageConfig: {
      _type: 'pageConfig',
      siteScope: {
        _type: 'siteScope',
        allSites: true,
      }
    }
  },
};
