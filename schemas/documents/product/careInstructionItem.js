const careInstructionItem = {
  title: 'Care Instruction Item',
  name: 'careInstructionItem',
  type: 'document',

  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title.en',
    },
  },
};

export default careInstructionItem;
