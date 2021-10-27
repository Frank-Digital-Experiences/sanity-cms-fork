import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Height (Responsive)',
  description: 'Defaults to "auto". 1rem = 16px. If one responsive height is missing, it defaults to the lower screen width, meaning if only the smallest is set, it applies to all.',
  name: 'responsive.height',
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
      title: 'XS (< 640)',
      name: 'xs',
      type: 'height',
      fieldset: 'xs',
    },
    {
      title: 'SM (< 768)',
      name: 'sm',
      type: 'height',
      fieldset: 'sm',
    },
    {
      title: 'MD (< 1024)',
      name: 'md',
      type: 'height',
      fieldset: 'md',
    },
    {
      title: 'LG (< 1280)',
      name: 'lg',
      type: 'height',
      fieldset: 'lg',
    },
    {
      title: 'XL (>= 1280)',
      name: 'xl',
      type: 'height',
      fieldset: 'xl',
    },
  ],
};
