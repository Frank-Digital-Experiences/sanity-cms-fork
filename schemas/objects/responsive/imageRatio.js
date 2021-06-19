import FieldsetTabs from "../../../src/components/FieldsetTabs";

export const RATIO_LIST = {
  '3:4': '3:4',
  'square': 'Square',
  '4:3': '4:3',
  '16:9': '16:9',
  'panorama': 'Panorama',
};

const list = Object.keys(RATIO_LIST).map(k => ({ title: RATIO_LIST[k], value: k }));

export default {
  title: 'Ratio (Responsive)',
  description: 'Sets the Ratio that should be used for an Image.',
  name: 'responsive.imageRatio',
  type: 'object',
  options: {
    collapsible: true,
    includeDescriptionAboveTabs: true,
    includeTitleAboveTabs: true,
  },
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "xs", title: "< 640", options: { sortOrder: 50 } },
    { name: "sm", title: "< 768", options: { sortOrder: 40 } },
    { name: "md", title: "< 1024", options: { sortOrder: 30 } },
    { name: "lg", title: "< 1280", options: { sortOrder: 20 } },
    { name: "xl", title: "Default", options: { sortOrder: 10 } },
  ],

  fields: [
    {
      title: 'XS',
      name: 'xs',
      type: 'string',
      fieldset: 'xs',
      options: { list },
    },
    {
      title: 'SM',
      name: 'sm',
      type: 'string',
      fieldset: 'sm',
      options: { list },
    },
    {
      title: 'MD',
      name: 'md',
      type: 'string',
      fieldset: 'md',
      options: { list },
    },
    {
      title: 'LG',
      name: 'lg',
      type: 'string',
      fieldset: 'lg',
      options: { list },
    },
    {
      title: 'XL',
      name: 'xl',
      type: 'string',
      fieldset: 'xl',
      options: { list },
    },
  ],
};
