import { FaYoutube } from 'react-icons/fa';

export default {
  title: 'YouTube',
  description: 'A page section with an embeded YouTube video.',
  name: 'pageSections.youtube',
  type: 'object',
  icon: FaYoutube,

  fields: [
    {
      title: 'YouTube Video ID',
      description: 'Enter the ID of the video, looks something like "5aB73e9SD_k". The easiest way of retrieving this is to look in the Video URL.',
      name: 'videoID',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
  ],

  preview: {
    select: {
      subtitle: 'title.en',
    },
    prepare(selection) {
      return {
        ...selection,
        title: "YouTube",
      }
    },
  },
};
