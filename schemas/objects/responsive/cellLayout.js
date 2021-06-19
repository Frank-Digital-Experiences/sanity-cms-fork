import FieldsetTabs from "../../../src/components/FieldsetTabs";
import { keyValueList } from "../../../utils/common";

export const CELL_LAYOUTS = {
  'image-only': 'Image only',
  'text-on-image:header': 'Text on Image, Header',
  'text-on-image:eyebrow-header-cta': 'Text on Image, Eyebrow / Header / CTA',
  'text-on-image:eyebrow-header-cta-summary': 'Text on Image, Eyebrow / Header / CTA / Summary',
  'text-on-image:contentBlock': 'Text on Image, Content Block',
};

const list = keyValueList(CELL_LAYOUTS);

export default {
  title: 'Layout (Responsive)',
  description: 'If one responsive height is missing, it defaults to the lower screen width, meaning if only the smallest is set, it applies to all.',
  name: 'responsive.cellLayout',
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
      type: 'string',
      fieldset: 'xs',
      options: { list },
    },
    {
      title: 'SM (< 768)',
      name: 'sm',
      type: 'string',
      fieldset: 'sm',
      options: { list },
    },
    {
      title: 'MD (< 1024)',
      name: 'md',
      type: 'string',
      fieldset: 'md',
      options: { list },
    },
    {
      title: 'LG (< 1280)',
      name: 'lg',
      type: 'string',
      fieldset: 'lg',
      options: { list },
    },
    {
      title: 'XL (>= 1280)',
      name: 'xl',
      type: 'string',
      fieldset: 'xl',
      options: { list },
    },
  ],
};
