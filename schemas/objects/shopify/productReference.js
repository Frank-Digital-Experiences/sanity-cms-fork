import { FaShopify } from "react-icons/fa";

export default {
  type: 'object',
  name: 'shopify.productReference',
  title: "Product Reference",
  options: { collapsible: true },
  icon: FaShopify,
  
  fields: [
    {
      title: 'Shop name',
      description: 'Refers to the specific Shopify shop that this reference belongs to',
      name: 'shopName',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Product ID',
      description: 'Tracks the Product ID of the product record in Shopify',
      name: 'product_id',
      type: 'number',
    },
    {
      title: 'Image ID',
      description: 'Tracks the Image ID of the image record in Shopify',
      name: 'image_id',
      type: 'number',
    },
    {
      title: 'Asset ID',
      description: 'Tracks the Sanity Asset ID of the Product Image record in Sanity that should be synced to Shopify',
      name: 'asset_id',
      type: 'string',
    },
  ],

  preview: {
    select: {
      shopName: 'shopName',
      presentment_prices: 'presentment_prices',
    },
    prepare(selection) {
      const { shopName, presentment_prices } = selection;

      const prices = presentment_prices.reduce((acc, p) => ({ ...acc, [p.price.currency_code]: p.price.amount }), {});

      return {
        ...selection,
        title: `Store: ${shopName}`,
        subtitle: Object.keys(prices).map(currencyCode => `${currencyCode}: ${prices[currencyCode]}`).join(' | '),
      }
    }
  },
};
