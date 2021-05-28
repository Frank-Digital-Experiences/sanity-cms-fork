import { FaImages } from 'react-icons/fa';

export default {
  title: 'Two Images',
  description: 'A responsive page section with two columns. Each column displays one image.',
  name: 'pageSections.twoImages',
  type: 'object',
  icon: FaImages,
  fields: [
    {
      title: 'Left Image',
      name: 'leftImage',
      type: 'webImage',
    },
    {
      title: 'Right Image',
      name: 'rightImage',
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
      media: 'leftImage',
    },
    prepare(selection) {
      return {
        ...selection,
        title: "Two Images",
      };
    }
  }
};
