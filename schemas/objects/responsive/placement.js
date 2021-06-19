import FieldsetTabs from "../../../src/components/FieldsetTabs";
import { keyValueList} from "../../../utils/common";

export const PLACEMENT_LIST = {
  'start': 'Start',
  'center': 'Center',
  'end': 'End',
};

const list = keyValueList(PLACEMENT_LIST);

export default {
  title: 'Placement (Responsive)',
  description: 'Configures content placement.',
  name: 'responsive.placement',
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
      title: 'Horizontal (XS)',
      name: 'xsHorizontal',
      type: 'string',
      fieldset: 'xs',
      options: { list },
    },
    {
      title: 'Horizontal (SM)',
      name: 'smHorizontal',
      type: 'string',
      fieldset: 'sm',
      options: { list },
    },
    {
      title: 'Horizontal (MD)',
      name: 'mdHorizontal',
      type: 'string',
      fieldset: 'md',
      options: { list },
    },
    {
      title: 'Horizontal (LG)',
      name: 'lgHorizontal',
      type: 'string',
      fieldset: 'lg',
      options: { list },
    },
    {
      title: 'Horizontal (XL)',
      name: 'xlHorizontal',
      type: 'string',
      fieldset: 'xl',
      options: { list },
    },
    {
      title: 'Vertical (XS)',
      name: 'xsVertical',
      type: 'string',
      fieldset: 'xs',
      options: { list },
    },
    {
      title: 'Vertical (SM)',
      name: 'smVertical',
      type: 'string',
      fieldset: 'sm',
      options: { list },
    },
    {
      title: 'Vertical (MD)',
      name: 'mdVertical',
      type: 'string',
      fieldset: 'md',
      options: { list },
    },
    {
      title: 'Vertical (LG)',
      name: 'lgVertical',
      type: 'string',
      fieldset: 'lg',
      options: { list },
    },
    {
      title: 'Vertical (XL)',
      name: 'xlVertical',
      type: 'string',
      fieldset: 'xl',
      options: { list },
    },
  ],
};
