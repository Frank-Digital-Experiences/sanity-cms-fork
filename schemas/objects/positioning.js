export default {
  title: 'Positioning',
  name: 'positioning',
  type: 'object',
  options: { collapsible: true },

  fields: [
    {
      title: 'Top',
      name: 'top',
      type: 'number',
    },
    {
      title: 'Bottom',
      name: 'bottom',
      type: 'number',
    },
    {
      title: 'Left',
      name: 'left',
      type: 'number',
    },
    {
      title: 'Right',
      name: 'right',
      type: 'number',
    },
  ],

  preview: {
    select: {
      top: 'top',
      bottom: 'bottom',
      left: 'left',
      right: 'right',
    },
    prepare(selection) {
      const { top, bottom, left, right } = selection;

      return {
        ...selection,
        title: `Top: ${top}, Bottom: ${bottom}, Left: ${left}, Right: ${right}`,
      };
    }
  }
};
