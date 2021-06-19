export default {
  title: 'Story Preview',
  description: 'A preview of a Story',
  name: 'storyPreview',
  type: 'object',

  fields: [
    {
      title: 'Story',
      name:  'story',
      type: 'reference',
      to: [
        { type: 'story' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'localeBlockContent',
    },
    {
      title: "Image",
      type: 'webImage',
      name: 'image',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      storyTitle: 'story.pageConfig.pageSeo.title.en',
      image: 'image',
      storyImage: 'story.pageConfig.pageSeo.image',
    },
    prepare(selection) {
      const { title, storyTitle, image, storyImage } = selection;

      return {
        title: title || storyTitle,
        media: image || storyImage,
      };
    },
  },
};
