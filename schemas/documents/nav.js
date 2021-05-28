import { MdMenu } from 'react-icons/md';

export default {
  name: "nav",
  type: "document",
  title: "Navigation",
  icon: MdMenu,
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "navId",
      type: "string",
      title: "Nav ID",
    },
    {
      name: "navItems",
      type: "navItems",
      title: "Navigation items",
    }
    // {
    //   name: "navItems",
    //   type: 'array',
    //   of: [
    //     { type: 'navItems.page' },
    //     { type: 'navItems.url' },
    //   ],
    // },
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "navId"
    }
  }
};
