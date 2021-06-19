import { FaComment } from 'react-icons/fa';

export default {
  title: 'Story Index',
  description: 'A page section to browse all published stories',
  name: 'pageSections.storyIndex',
  type: 'object',
  icon: FaComment,

  fields: [
    {
      title: 'Stories per page',
      name: 'storiesPerPage',
      type: 'number',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],

  preview: {
    select: {
      storiesPerPage: 'storiesPerPage',
    },
    prepare(selection) {
      const { storiesPerPage = 0 } = selection;

      return {
        title: "Story Index",
        subtitle: `${storiesPerPage} Stories`
      };
    },
  },
};
