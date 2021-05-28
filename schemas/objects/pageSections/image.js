import { FaImage } from 'react-icons/fa';

export default {
  title: 'Image',
  description: 'A page section with one column in full container width. One image is dislayed inside the column.',
  name: 'pageSections.image',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      title: 'Image Placement',
      name: 'imagePlacement',
      type: 'string',
      options: {
        list: [
          { title: 'Full Container Width (Default)', value: 'fullContainerWidth' },
          { title: 'Half Container Width, Centered. Full on small screens', value: 'halfContainerWidth' },
        ],
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'webImage',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],

  preview: {
    select: {
      media: 'image',
      subtitle: 'imagePlacement',
    },
    prepare(selection) {
      return {
        ...selection,
        title: "Image",
      }
    },
  },
};
