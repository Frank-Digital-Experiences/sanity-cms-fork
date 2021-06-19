import { FaGlobe } from 'react-icons/fa';

export default {
  name: 'region',
  type: 'document',
  title: 'Region',
  icon: FaGlobe,

  fields: [
    {
      title: "Name",
      type: "localeString",
      name: "name",
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'name.en',
    },
  },
};
