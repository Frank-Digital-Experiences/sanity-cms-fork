import { FaImage } from 'react-icons/fa';

import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Hero',
  description: 'A page section with one or several big hero images.',
  name: 'pageSections.hero',
  type: 'object',
  icon: FaImage,
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "layout", title: "Layout", options: { sortOrder: 20 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        { type: 'pageSections.gridCell' },
      ],
      fieldset: 'content',
    },
    {
      title: 'Default Slide Layout',
      name: 'defaultCellLayout',
      description: 'The default layout to use in all slides unless set indiviudally',
      type: 'responsive.cellLayout',
      fieldset: 'layout',
    },
    {
      title: 'Default Slide Image Ratio',
      description: 'The default image ratio to be used in all slides unless set individually. Only applies to layouts that uses images.',
      name: 'defaultImageRatio',
      type: 'responsive.imageRatio',
      fieldset: 'layout',
    },
    {
      title: 'Hero Theme (Defaults to DePalma Black)',
      name: 'heroTheme',
      description: 'Can be used to switch to white color for things like the arrows',
      type: 'designTheme',
      fieldset: 'design',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
      fieldset: 'design',
    },
  ],

  preview: {
    select: {
      media: 'images.0',
    },
    prepare(selection) {
      return {
        ...selection,
        title: "Hero Image(s)",
      }
    },
  },
};
