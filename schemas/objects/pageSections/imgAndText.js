import { FaImage } from 'react-icons/fa';
import { baseLanguage } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Image and Text',
  description: 'A responsive page section with two columns. One column displays the block content and the other shows the selected image.',
  name: 'pageSections.imgAndText',
  type: 'object',
  icon: FaImage,
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "image", title: "Image", options: { sortOrder: 20 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Section Header',
      name: 'sectionHeader',
      type: 'localeString',
      description: 'A text that is always displayed at the start of the section on small screens, but displayed at the start of (inside) the content column for large screens. Leave blank if no Header is needed.',
      fieldset: 'content',
    },
    {
      title: 'Section Content',
      name: 'sectionContent',
      type: 'localeBlockContent',
      description: 'The text part of the section. Can also include images but those would simply appear in the content flow (no responsive logic)',
      fieldset: 'content',
    },
    {
      title: 'Section Image',
      name: 'sectionImage',
      type: 'webImage',
      fieldset: 'image',
    },
    {
      title: 'Place Image on the Right',
      name: 'imgOnRight',
      type: 'boolean',
      description: 'If "True", the image column will be on the right side instad of the left on larger screens. On small screens, the image always comes before the content.',
      fieldset: 'image',
    },
    {
      title: 'Box Ratio (Responsive)',
      name: 'boxRatio',
      type: 'responsive.boxRatio',
      fieldset: 'image',
    },
    {
      title: 'Image Fit (Responsive)',
      name: 'imageFit',
      type: 'responsive.imageFit',
      fieldset: 'image',
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
      media: 'sectionImage',
      sectionContent: `sectionContent.${baseLanguage.id}`,
    },
    prepare(selection) {
      const { media, sectionContent } = selection;
      const block = sectionContent.find(({ _type }) => _type === 'block');
      const children = block?.children || [];
      const subtitle = children.find(({ text }) => text)?.text;
      return {
        title: "Image and Text",
        subtitle,
        media,
      };
    }
  }
};
