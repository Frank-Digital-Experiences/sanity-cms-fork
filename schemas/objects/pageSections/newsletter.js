import { FaNewspaper } from 'react-icons/fa';

import { LISTS } from "../block/newsletter";

export default {
  title: 'Newsletter',
  description: 'A custom page section for newsletter signup.',
  name: 'pageSections.newsletter',
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
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],
  preview: {
    select: {
      newsletterList: 'newsletterList',
    },
    prepare(selection) {
      const { newsletterList } = selection;

      return {
        ...selection,
        title: "Newsletter",
        subtitle: `List: ${LISTS[newsletterList] || 'N/A'}`,
      };
    }
  }
};
