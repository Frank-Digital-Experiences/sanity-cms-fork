import { colorDescription } from "../../documents/colors/index";

export const JUSTIFY_CONTENT_LIST = {
  'justify-start': 'At Start',
  'justify-end': 'At End',
  'justify-center': 'In Center',
  'justify-between': 'Set Space between',
  'justify-around': 'Set Space around',
  'justify-evenly': 'Set Space evenly',
};

export const ALIGN_ITEMS_LIST = {
  'items-start': 'At Start',
  'items-end': 'At End',
  'items-center': 'At Center',
  'items-baseline': 'On Baseline',
  'items-stretch': 'Stretch out',
};

export default {
  title: 'Design',
  name: 'pageSections.design',
  type: 'object',
  options: { collapsible: true },

  fieldsets: [
    {
      title: 'Background Image',
      name: 'backgroundImage',
      options: { collapsible: true },
    },
    {
      title: 'Theme',
      name: 'theme',
      options: { collapsible: true },
    },
    {
      title: 'Positioning',
      name: 'positioning',
      options: { collapsible: true },
    },
    {
      title: 'Sizing',
      name: 'sizing',
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
      fieldset: 'backgroundImage',
      options: { hotspot: true },
    },
    {
      title: 'Themes',
      name: 'themeReferences',
      type: 'themeReferences',
      fieldset: 'theme',
    },
    {
      title: 'Background Color',
      name: 'bgColor',
      description: colorDescription,
      type: 'color',
      fieldset: 'theme',
    },
    {
      title: 'Text Color',
      name: 'textColor',
      description: colorDescription,
      type: 'color',
      fieldset: 'theme',
    },
    {
      title: 'Background placed inside Container',
      description: 'Defaults to False, which means it will line up with the window edges',
      name: 'bgInsideContainer',
      type: 'boolean',
      fieldset: 'positioning',
    },
    {
      title: 'Content placed inside Container',
      description: 'Defaults to True, which means it will be contained within the container width (differs according to responsive configuration)',
      name: 'contentInsideContainer',
      type: 'boolean',
      fieldset: 'positioning',
    },
    {
      title: 'Justify Content',
      description: 'Controls how the content is positioned within the section. Defaults to "At Start"',
      name: 'justifyContent',
      type: 'string',
      options: {
        list: Object.keys(JUSTIFY_CONTENT_LIST).map(k => ({ title: JUSTIFY_CONTENT_LIST[k], value: k })),
      },
      fieldset: 'positioning',
    },
    {
      title: 'Align Items',
      description: "Controls how the items inside are positioned along a container's cross axis",
      name: 'alignItems',
      type: 'string',
      options: {
        list: Object.keys(ALIGN_ITEMS_LIST).map(k => ({ title: ALIGN_ITEMS_LIST[k], value: k })),
      },
      fieldset: 'positioning',
    },
    {
      title: 'Height',
      name: 'height',
      type: 'responsive.height',
      fieldset: 'sizing',
    },
    {
      title: 'Padding',
      name: 'padding',
      type: 'responsive.padding',
      fieldset: 'sizing',
    },
  ],
};
