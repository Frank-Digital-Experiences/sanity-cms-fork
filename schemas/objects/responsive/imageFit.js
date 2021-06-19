import FieldsetTabs from "../../../src/components/FieldsetTabs";

export const FIT_LIST = {
  'object-contain': 'Contain - Scale up or down to make entire image fit',
  'object-cover': 'Cover - Scale up or down and crop excess to fill available space',
  'object-fill': 'Fill - Stretches the image to fill available space',
  'object-none': 'None - Dsiplays image as is without resizing or cropping',
  'object-scale-down': 'Scale down if necessary but not up, to make entire image fit',
};

const list = Object.keys(FIT_LIST).map(k => ({ title: FIT_LIST[k], value: k }));

export default {
  title: 'Image Fit (Responsive)',
  description: 'Sets the Image Ratio that should be used when displaying an image. Defaults to none (display image as is).',
  name: 'responsive.imageFit',
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
