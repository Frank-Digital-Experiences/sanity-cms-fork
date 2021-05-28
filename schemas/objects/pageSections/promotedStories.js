import { FaComment } from 'react-icons/fa';

export default {
  title: 'Promoted Stories',
  description: 'A page section to preview and link to stories',
  name: 'pageSections.promotedStories',
  type: 'object',
  icon: FaComment,

  fields: [
    {
      title: 'Promoted Stories',
      name: 'promotedStories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'story' },
          ]
        },
      ]
    },
  ],

  preview: {
    select: {
      title: `promotedStories.0.pageConfig.pageSeo.title.en`,
      promotedStories: `promotedStories`,
      media: `promotedStories.0.pageConfig.pageSeo.image`,
    },
    prepare(selection) {
      const { promotedStories } = selection;

      const noOfStories = Object.keys(promotedStories).reduce((acc, key) => {
        const i = parseInt(key);
        return i >= acc ? i+1 : acc;
      }, 0);

      return {
        ...selection,
        subtitle: `Number of stories: ${noOfStories}`,
      };
    }
  }
};
