import { MdLibraryBooks } from 'react-icons/md';

import { baseLanguage } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";


export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: MdLibraryBooks,
  inputComponent: FieldsetTabs,


  fieldsets: [
    {
      title: 'Content',
      name: 'content',
      options: { sortOrder: 10 },
    },
    {
      title: 'Config',
      name: 'config',
      options: { sortOrder: 20 },
    },
    {
      title: 'Design',
      name: 'design',
      options: { sortOrder: 30 },
    },
  ],

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
      fieldset: 'config',
      validation: Rule => Rule.required(),
    },
    {
      title: "Page Sections",
      type: "pageSections",
      name: "pageSections",
      fieldset: 'content',
    },
    {
      title: "Page Design",
      type: "pageDesign",
      name: "pageDesign",
      fieldset: 'design',
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
