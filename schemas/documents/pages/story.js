import { MdChatBubbleOutline } from 'react-icons/md';

import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon: MdChatBubbleOutline,
  inputComponent: FieldsetTabs,

  fieldsets: [
    {
      title: 'Content',
      name: 'content',
      options: { sortOrder: 10 },
    },
    {
      title: 'Preview',
      name: 'preview',
      options: { sortOrder: 20 },
    },
    {
      title: 'Config',
      name: 'config',
      fieldset: 'config',
      options: { sortOrder: 30 },
    },
    {
      title: 'Design',
      name: 'design',
      options: { sortOrder: 40 },
    },
  ],

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: {
        collapsible: true,
      },
      fieldset: 'config',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      fieldset: 'content',
    },
    {
      name: 'pageSections',
      title: 'Story Sections',
      type: 'pageSections.story',
      fieldset: 'content',
    },
    {
      title: 'Preview Title',
      name: 'previewTitle',
      type: 'localeString',
      fieldset: 'preview',
    },
    {
      title: 'Preview Summary',
      name: 'previewSummary',
      type: 'localeBlockContent',
      fieldset: 'preview',
    },
    {
      title: 'Preview Image',
      name: 'previewImage',
      type: 'webImage',
      fieldset: 'preview',
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
      title: 'pageConfig.pageSeo.title.en',
      subtitle: 'pageConfig.pageSeo.description.en',
      media: 'pageConfig.pageSeo.image',
    },
  },

  initialValue: {
    pageConfig: {
      _type: "pageConfig",
      siteScope: {
        _type: 'siteScope',
        allSites: true,
      },
    }
  },
}
