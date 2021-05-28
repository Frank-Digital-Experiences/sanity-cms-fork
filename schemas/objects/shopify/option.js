export default {
  type: 'object',
  name: 'shopify.option',
  title: "Option",
  
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID',
    },
    {
      name: 'product_id',
      type: 'number',
      title: 'Product ID',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'position',
      type: 'number',
      title: 'Position',
    },
    {
      name: 'values',
      type: 'array',
      title: 'Values',
      of: [
        { type: 'string' },
      ]
    },
  ]
};
