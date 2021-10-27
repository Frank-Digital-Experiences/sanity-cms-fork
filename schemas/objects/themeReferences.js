export default {
  title: 'Theme References',
  name: 'themeReferences',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        { type: 'theme' },
      ],
    },
  ],
};
