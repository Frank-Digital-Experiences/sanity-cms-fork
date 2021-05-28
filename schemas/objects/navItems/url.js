import { Nav } from "react-icons/md";

export default {
  name: "navItems.url",
  type: "object",
  title: "URL",
  icon: Nav,
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title"
    },
    {
      name: "navItemUrl",
      type: "url",
      title: "URL"
    },
    {
      title: 'Child Items',
      name: 'childItems',
      type: 'navItems',
    }
  ],
  preview: {
    select: {
      title: "text.en",
      subtitle: "navItemUrl"
    }
  }
};
