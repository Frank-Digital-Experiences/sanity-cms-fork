import { keyValueList } from "../../../utils/common";

export const TAGS = {
  'a':    'Links <a>',
};

export default {
  title: 'Theme Element',
  name: 'theme.element',
  type: 'object',

  fields: [
    {
      title: 'Tag',
      name: 'tag',
      type: 'string',
      options: {
        list: keyValueList(TAGS),
      },
    },
    {
      title: 'Class Names',
      name: 'classNames',
      type: 'string',
    }
  ],

  preview: {
    select: {
      title: 'tag',
      subtitle: 'classNames',
    },
  },
};
