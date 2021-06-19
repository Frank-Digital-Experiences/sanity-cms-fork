import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Padding (Responsive)',
  description: 'Defaults to 2.5rem top and bottom. If one responsive padding is missing, it defaults to the lower screen width, meaning if only the smallest is set, it always applies to all',
  name: 'responsive.padding',
  type: 'object',
  options: {
    collapsible: true,
    includeDescriptionAboveTabs: true,
    includeTitleAboveTabs: true,
  },
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "xs", title: "Default", options: { sortOrder: 10 } },
    { name: "sm", title: "> 640", options: { sortOrder: 20 } },
    { name: "md", title: "> 768", options: { sortOrder: 30 } },
    { name: "lg", title: "> 1024", options: { sortOrder: 40 } },
    { name: "xl", title: "> 1280", options: { sortOrder: 50 } },
  ],

  fields: [
    {
      title: 'XS',
      name: 'xs',
      type: 'padding',
      fieldset: 'xs',
    },
    {
      title: 'SM',
      name: 'sm',
      type: 'padding',
      fieldset: 'sm',
    },
    {
      title: 'MD',
      name: 'md',
      type: 'padding',
      fieldset: 'md',
    },
    {
      title: 'LG',
      name: 'lg',
      type: 'padding',
      fieldset: 'lg',
    },
    {
      title: 'XL',
      name: 'xl',
      type: 'padding',
      fieldset: 'xl',
    },
  ],
};
