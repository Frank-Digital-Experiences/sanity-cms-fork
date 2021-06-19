export default {
  title: 'Scoped Care Instr. Set',
  name: 'scoped.careInstructionSet',
  type: 'object',

  fields: [
    {
      title: 'Care Instruction Set',
      name: 'careInstructionSet',
      type: 'reference',
      to: [
        { type: 'careInstructionSet' },
      ],
    },
    {
      title: 'Only applies to ...',
      description: 'Leave blank if the same set applies to all Variants',
      name: 'productScope',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productColorway' },
            { type: 'productSize' },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'careInstructionSet.title',
      value1: 'productScope.0.code',
      value2: 'productScope.1.code',
      value3: 'productScope.2.code',
    },
    prepare(selection) {
      const { value1, value2, value3 } = selection;

      const values = [value1, value2, value3].filter(Boolean);

      return {
        ...selection,
        subtitle: `For: ${values.length === 0 ? 'All Variants' : values.join(', ')}`,
      };
    },
  },
};
