import React from 'react';
import { FaBarcode } from "react-icons/fa";

import { baseLanguage } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

const productVariant = {
  title: 'Product Variant',
  name: 'productVariant',
  description: 'Represents a product variant that can be purchased from Shopify.',
  type: 'document',
  icon: FaBarcode,
  inputComponent: FieldsetTabs,
  
  fieldsets: [
    { title: 'Product Data', name: 'productData', options: { sortOrder: 10 } },
    { title: 'E-Commerce', name: 'eCommerce', options: { sortOrder: 40 } },
  ],

  fields: [
    {
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [
        { type: 'product' },
      ],
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Colorway',
      name: 'productColorway',
      type: 'reference',
      to: [
        { type: 'productColorway' },
      ],
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Size',
      name: 'productSize',
      type: 'reference',
      to: [
        { type: 'productSize' },
      ],
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Old SKU',
      name: 'oldSku',
      type: 'string',
      fieldset: 'productData',
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      fieldset: 'status',
      fieldset: 'productData',
    },
    {
      title: 'Inventory Status',
      name: 'inventoryStatus',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in-stock' },
          { title: 'Low Stock', value: 'low-stock' },
          { title: 'Out of Stock', value: 'out-of-stock' },
          { title: 'Incoming Stock', value: 'incoming-stock' },
        ],
      },
      fieldset: 'eCommerce',
    },
    {
      title: 'Discontinued',
      name: 'discontinued',
      type: 'boolean',
      fieldset: 'productData',
    },
    {
      title: 'EAN Barcode',
      name: 'eanBarcode',
      type: 'string',
      fieldset: 'productData',
    },
    {
      title: 'HS Code',
      name: 'hsCode',
      type: 'string',
      fieldset: 'productData',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'multiCurrencyPrice',
      fieldset: 'eCommerce',
    },
    {
      title: 'Vendor Code',
      name: 'vendorCode',
      type: 'number',
      fieldset: 'productData',
    },
    {
      title: 'Vendor Name',
      name: 'vendorName',
      type: 'string',
      fieldset: 'productData',
    },
    {
      title: 'External References',
      name: 'externalReferences',
      type: 'array',
      of: [
        { type: 'shopify.variantReference' },
      ],
      fieldset: 'eCommerce',
    },
    {
      title: 'Product ID',
      description: 'Tracks the Product ID of the product record in Shopify',
      name: 'product_id',
      type: 'number',
      fieldset: 'eCommerce',
    },
    {
      title: 'Variant ID',
      description: 'Tracks the Product Variant ID of the product variant record in Shopify',
      name: 'variant_id',
      type: 'number',
      fieldset: 'eCommerce',
    },
    {
      title: 'Image ID',
      description: 'Tracks the Image ID of the image record in Shopify',
      name: 'image_id',
      type: 'number',
      fieldset: 'eCommerce',
    },
    {
      title: 'Asset ID',
      description: 'Tracks the Sanity Asset ID of the Product Image record in Sanity that should be synced to Shopify',
      name: 'asset_id',
      type: 'string',
      fieldset: 'eCommerce',
    },
  ],

  preview: {
    select: {
      productCode: 'product.code',
      productName: 'product.name',
      colorwayCode: 'productColorway.code',
      colorwayName: `productColorway.name.${baseLanguage.id}`,
      size: 'productSize.abbreviation',
      sku: 'sku',
      status: 'status',
      extRefs1: 'externalReferences.0.shopName',
      extRefs2: 'externalReferences.1.shopName',
      extRefs3: 'externalReferences.2.shopName',
    },
    prepare(selection) {
      const { productCode, productName, colorwayCode, colorwayName, size, sku, status, extRefs1, extRefs2, extRefs3 } = selection;
      const shopNames = [extRefs1, extRefs2, extRefs3].filter(Boolean);
      const isSynced = shopNames.indexOf('depalma-workwear') >= 0;

      return {
        ...selection,
        title: `${productCode} ${productName} - ${colorwayCode} ${colorwayName} / ${size}`,
        subtitle: status ? status : `SKU: ${sku || 'N/A'} | Shopify: ${isSynced ? "✅" : "❌"}`,
        media: () => <FaBarcode style={{color: status === 'DISCONTINUED' ? '#ccc' : '#000'}} />
      };
    },
  },

  orderings: [
    {
      title: 'By Product / Colorway / Size',
      name: 'byProductColorwaySize',
      by: [
        { field: 'product.code', direction: 'asc' },
        { field: 'productColorway.code', direction: 'asc' },
        { field: 'productSize.abbreviation', direction: 'asc' },
      ],
    },
    {
      title: 'By SKU',
      name: 'bySku',
      by: [
        { field: 'sku', direction: 'asc' },
      ],
    },
  ],
};

export default productVariant;
