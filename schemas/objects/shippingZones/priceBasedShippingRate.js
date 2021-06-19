export default {
  title: 'Price based shipping rate',
  name: 'priceBasedShippingRate',
  type: 'object',

  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'number',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
    },
    {
      title: 'Shipping Zone ID',
      name: 'shipping_zone_id',
      type: 'number',
    },
    {
      title: 'Min Order Subtotal',
      name: 'min_order_subtotal',
      type: 'string',
    },
    {
      title: 'Max Order Subtotal',
      name: 'max_order_subtotal',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'name',
      min: 'min_order_subtotal',
      max: 'max_order_subtotal',
    },
    prepare(selection) {
      const { min, max } = selection;

      return {
        ...selection,
        subtitle: `Min: ${min || '-'}, Max: ${max || '-'}`
      };
    },
  },
};
