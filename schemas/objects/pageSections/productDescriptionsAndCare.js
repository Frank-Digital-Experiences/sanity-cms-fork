export default {
  title: 'Product Descriptions & Care Instructions',
  description: 'A page section to show the product descriptions and care instructions for a Product',
  name: 'pageSections.productDescriptionsAndCare',
  type: 'object',

  fields: [
    {
      title: 'Incl. Descriptions',
      name: 'inclDescriptions',
      type: 'boolean',
    },
    {
      title: 'Incl. Care Instructions',
      name: 'inclCare',
      type: 'boolean',
    },
  ],

  preview: {
    select: {
      inclDescriptions: 'inclDescriptions',
      inclCare: 'inclCare',
    },
    prepare(selection) {
      const { inclDescriptions, inclCare } = selection;
      return {
        title: 'Product Descriptions & Care Instructions',
        subtitle: `Product Descriptions: ${inclDescriptions ? "✅" : "❌"}, Care Instructions: ${inclCare ? "✅" : "❌"}`,
      };
    },
  },
};
