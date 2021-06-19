import { FaParagraph } from 'react-icons/fa';
import { baseLanguage } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  title: 'Lead Paragraph',
  description: 'A lead paragraph section',
  name: 'pageSections.leadParagraph',
  type: 'object',
  icon: FaParagraph,
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "design", title: "Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Section Content',
      name: 'sectionContent',
      type: 'localeBlockContent',
      fieldset: 'content',
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
      sectionContent: `sectionContent.${baseLanguage.id}`,
    },
    prepare(selection) {
      const { sectionContent } = selection;
      const block = sectionContent.find(({ _type }) => _type === 'block');
      const children = block?.children || [];
      const subtitle = children.find(({ text }) => text)?.text;

      return {
        title: "Lead Paragraph",
        subtitle,
      };
    }
  }
};
