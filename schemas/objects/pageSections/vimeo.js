import { FaVimeo } from 'react-icons/fa';

export default {
  title: 'Vimeo',
  description: 'A page section with an embeded Vimeo video.',
  name: 'pageSections.vimeo',
  type: 'object',
  icon: FaVimeo,

  fields: [
    {
      title: 'Vimeo Video ID',
      description: 'Enter the ID of the video, looks something like "381324108". The easiest way of retrieving this is to look in the Video URL.',
      name: 'videoID',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],

  preview: {
    select: {
      subtitle: 'title.en',
    },
    prepare(selection) {
      return {
        ...selection,
        title: "Vimeo",
      }
    },
  },
};
