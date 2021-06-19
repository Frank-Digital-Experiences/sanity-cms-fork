import { Nav } from "react-icons/md";

export default {
  name: "navItems.page",
  type: "object",
  title: "Page",
  icon: Nav,
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title"
    },
    {
      name: "navItemPage",
      title: 'Page',
      type: "reference",
      to: [
        { type: 'page' },
      ],
    },
    {
      title: 'Child Items',
      name: 'childItems',
      type: 'navItems',
    }
  ],
  preview: {
    select: {
      title: "title.en",
      pageTitle: "navItemPage.pageConfig.pageSeo.title.en",
      subtitle: "navItemPage.pageConfig.slug.current"
    },
    prepare(selection) {
      const { title, pageTitle } = selection;
      return {
        ...selection,
        title: title || pageTitle,
      };
    },
  }
};
