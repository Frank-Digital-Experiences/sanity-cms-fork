import { FaArrowsAltV } from 'react-icons/fa';
import { HEIGHT_LIST } from '../height';

export default {
  title: 'Margin',
  name: 'block.verticalSpace',
  type: 'object',
  icon: FaArrowsAltV,

  fields: [
    {
      title: 'Height',
      name: 'height',
      type: 'height',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      height: 'height',
    },
    prepare(selection) {
      const { height } = selection;

      return {
        ...selection,
        title: HEIGHT_LIST[height] || 'N/A',
      };
    },
  },
};
