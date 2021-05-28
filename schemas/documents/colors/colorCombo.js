export default {
  name: "colorCombo",
  type: "document",
  title: "Color Combo",
  //icon: FaPaintBrush,

  fields: [
    {
      title: 'Brand Colors',
      name: 'brandColors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'brandColor' },
          ],
        },
      ],
    }
  ],
  preview: {
    select: {
      code1: 'brandColors.0.code',
      code2: 'brandColors.1.code',
      code3: 'brandColors.2.code',
      title1: 'brandColors.0.title.en',
      title2: 'brandColors.1.title.en',
      title3: 'brandColors.2.title.en',
    },
    prepare(selection) {
      const { code1, code2, code3, title1, title2, title3 } = selection;

      const codes = [code1, code2, code3].filter(Boolean);
      const titles = [title1, title2, title3].filter(Boolean);

      return {
        title: codes.length === 0 ? 'No Codes' : codes.join(' / '),
        subtitle: titles.length === 0 ? '' : titles.join(' / '),
      };
    },
  }
};
