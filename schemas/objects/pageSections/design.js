export default {
  title: 'Design',
  name: 'pageSections.design',
  type: 'object',
  options: { collapsible: true },

  fieldsets: [
    {
      title: 'Background',
      name: 'background',
      options: { collapsible: true },
    }
  ],

  fields: [
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
      fieldset: 'background',
      options: { hotspot: true },
    },
    {
      title: 'Background Color',
      name: 'bgColor',
      description: 'DePalma Blue: #2c313d, DePalma Red: #a02a23',
      type: 'color',
      fieldset: 'background',
    },
    {
      title: 'Background placed inside Container',
      description: 'Defaults to False, which means it will line up with the window edges',
      name: 'bgInsideContainer',
      type: 'boolean',
    },
    {
      title: 'Content placed inside Container',
      description: 'Defaults to True, which means it will be contained within the container width (differs according to responsive configuration)',
      name: 'contentInsideContainer',
      type: 'boolean',
    },
    {
      title: 'Text Color',
      name: 'textColor',
      description: 'DePalma Blue: #2c313d, DePalma Red: #a02a23',
      type: 'color',
    },
    {
      title: 'Padding',
      description: 'Defaults to 10 units top and bottom (each unit is 4px)',
      name: 'padding',
      type: 'positioning',
    },
  ],
};
