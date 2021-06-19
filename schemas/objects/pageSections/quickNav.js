import { Nav } from "react-icons/md";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Quick Nav',
  description: 'A page section for an inline menu for quick page navigation',
  name: 'pageSections.quickNav',
  type: 'object',
  icon: Nav,
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Items',
      name: 'items',
      description: 'Add items manually or use existing page representations. The only item fields that are used in this Quick Nav is the Page config slug, Main image and Title',
      type: 'array',
      of: [
        { type: 'pageSections.gridCell' },
      ],
      fieldset: 'content',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
      fieldset: 'design',
    },
  ],

  preview: {
    prepare(selection) {
      return {
        title: 'Quick Nav',
      };
    },
  },
};
