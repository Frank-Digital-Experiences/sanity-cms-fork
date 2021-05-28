import { FaParagraph } from 'react-icons/fa';
import { baseLanguage } from "../../languages";

export default {
  title: 'Paragraph',
  description: 'A paragraph section',
  name: 'pageSections.paragraph',
  type: 'object',
  icon: FaParagraph,
  fields: [
    {
      title: 'Section Content',
      name: 'sectionContent',
      type: 'localeBlockContent',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
    },
  ],
  preview: {
    select: {
      sectionContent: `sectionContent.${baseLanguage.id}`,
    },
    prepare(selection) {
      const { sectionContent } = selection;
      const block = sectionContent.find(({ _type }) => _type === 'block');
      const children = block?.children || [];
      const subtitle = children.find(({ text }) => text)?.text;

      return {
        title: "Paragraph",
        subtitle,
      };
    }
  }
};
