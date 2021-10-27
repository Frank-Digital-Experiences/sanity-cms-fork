import { baseLanguage } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";


export default {
  title: "Page Section Template",
  name: "pageSectionTemplate",
  type: "document",
  // inputComponent: FieldsetTabs,
  //
  // fieldsets: [
  //   {
  //     title: 'Content',
  //     name: 'content',
  //     options: { sortOrder: 10 },
  //   },
  //   {
  //     title: 'Config',
  //     name: 'config',
  //     options: { sortOrder: 20 },
  //   },
  //   {
  //     title: 'Design',
  //     name: 'design',
  //     options: { sortOrder: 30 },
  //   },
  // ],

  fields: [
    {
      title: 'Name',
      type: 'string',
      name: 'name'
    },
    {
      title: "Page Sections",
      type: "pageSections",
      name: "pageSections",
    },
  ],

  preview: {
    select: {
      title: `name`,
      subtitle: 'pageSections.0._type',
    },
  },
};
