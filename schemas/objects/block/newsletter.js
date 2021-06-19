import { FaNewspaper } from 'react-icons/fa';

export const LISTS = {
  'main-newsletter': 'Main newsletter'
};

export default {
  title: 'Newsletter',
  name: 'block.newsletter',
  type: 'object',
  icon: FaNewspaper,

  fields: [
    {
      title: 'Newsletter list',
      name: 'newsletterList',
      type: 'string',
      options: {
        list: Object.keys(LISTS).map(l => ({ title: LISTS[l], value: l })),
      },
      validation: Rule => Rule.required(),
    },
  ],
};
