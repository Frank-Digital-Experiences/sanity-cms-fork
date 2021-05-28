import { FaTable } from 'react-icons/fa';
import { baseLanguage } from "../../languages";

export default {
  title: 'Grid',
  description: 'A responsive page section with a configurable number of columns and rows based on screen width.',
  name: 'pageSections.grid',
  type: 'object',
  icon: FaTable,
  fields: [
    {
      title: 'Page Impressions',
      name: 'pageImpressions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'pageImpression' },
          ],
        },
      ],
    },
    {
      title: 'No. of Columns',
      name: 'noOfCols',
      description: 'Comma separated list of no. of columns for each screen width: <640, <768, <1024, <1280, >=1280. Example: "2,2,3,4,4"',
      type: 'string',
      validation: Rule => Rule.required(),
    }
  ],
  preview: {
    select: {
      title1: 'pageImpressions.0.pageRepresentation.header.en',
      title2: 'pageImpressions.1.pageRepresentation.header.en',
      title3: 'pageImpressions.2.pageRepresentation.header.en',
    },
    prepare(selection) {
      const { title1, title2, title3 } = selection;
      const subtitle = [title1, title2, title3].filter(Boolean).join(' | ');

      return {
        ...selection,
        title: 'Grid Section',
        subtitle,
      };
    },
  },
};
