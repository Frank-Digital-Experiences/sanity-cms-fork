export default {
  name: 'sizeGuide',
  type: 'document',
  title: 'Size Guide',

  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
      validation: Rule => Rule.required(),
    },
    {
      title: "Unit of measure",
      type: "string",
      name: "unitOfMeasure",
      validation: Rule => Rule.required(),
    },
    {
      title: 'Measurements',
      name: 'measurements',
      type: 'stringTable',
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'unitOfMeasure'
    },
  },
};
