import {} from 'react-icons/fa';

export default {
  name: 'productDescriptionSet',
  type: 'document',
  title: 'Product Description Set',

  fields: [
    {
      title: "Title",
      description: "Only used internally to easily refer to a set of product descriptions",
      type: "string",
      name: "title",
    },
    {
      title: "Notes",
      description: "Optional internal notes if needed",
      type: "text",
      name: "notes",
    },
    {
      title: "Product Description Items",
      type: "array",
      name: "productDescriptionItems",
      of: [
        {
          type: "reference",
          to: [
            { type: "productDescriptionItem" },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      notes: 'notes',
      code1: 'productDescriptionItems.0.description.en',
      code2: 'productDescriptionItems.1.description.en',
      code3: 'productDescriptionItems.2.description.en',
      code4: 'productDescriptionItems.3.description.en',
      code5: 'productDescriptionItems.4.description.en',
      code6: 'productDescriptionItems.5.description.en',
      code7: 'productDescriptionItems.6.description.en',
      code8: 'productDescriptionItems.7.description.en',
      code9: 'productDescriptionItems.8.description.en',
      code10: 'productDescriptionItems.9.description.en',
    },
    prepare(selection) {
      const { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, notes } = selection;

      const codes = code10 ? '9+' : [code1, code2, code3, code4, code5, code6, code7, code8, code9].filter(Boolean).length;
      const subtitle = (notes ? notes : code1 || '').substr(0, 30);

      return {
        ...selection,
        subtitle: `${subtitle}... ${codes} items`,
      };
    },
  },
};
