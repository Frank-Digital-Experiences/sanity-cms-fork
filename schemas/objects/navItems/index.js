import navItemsPage from "./page";
import navItemsUrl from "./url";

const navItems = {
  title: 'Nav Items',
  description: 'A list of navigation items.',
  name: 'navItems',
  type: 'array',
  of: [
    { type: 'navItems.page' },
    { type: 'navItems.url' },
  ],
};

export default [
  navItems,

  navItemsPage,
  navItemsUrl,
];
