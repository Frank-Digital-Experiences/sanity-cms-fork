import { MdChatBubbleOutline } from 'react-icons/md';

export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon: MdChatBubbleOutline,

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: {
        collapsible: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'pageSections',
      title: 'Story Sections',
      type: 'pageSections.story',
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
