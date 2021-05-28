import React from 'react';
import { FaTshirt } from 'react-icons/fa';

import PriceListComponent from "../../../src/components/PriceListComponent";

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  icon: FaTshirt,
  //__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 

  fieldsets: [
    {
      title: 'Shopify Product Fields',
      name: 'shopifyProductFields',
      options: { collapsible: true },
    },
    {
      title: 'Sizes',
      name: 'sizes',
      options: { collapsible: true },
    },
    {
      title: 'Status',
      name: 'status',
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: 'Code',
      name: 'code',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'localeText',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Category',
      name: 'productCategory',
      type: 'reference',
      to: [
        { type: 'productCategory' },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: 'Sub-Category',
      name: 'productSubCategory',
      type: 'reference',
      to: [
        { type: 'productSubCategory' },
      ],
      options: {
        filter({ document, path, parentPath }) {
          const { productCategory } = document;

          return {
            filter: `references($productCategory)`,
            params: { productCategory: productCategory?._ref },
          };
        }
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      fieldset: 'status',
    },
    {
      title: 'Discontinued',
      name: 'discontinued',
      type: 'boolean',
      fieldset: 'status',
    },
    {
      title: 'Colorways',
      description: 'The Colourways this product comes in',
      name: 'productColorways',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productColorway' },
          ],
        },
      ],
    },
    {
      title: 'Size Standard',
      name: 'productSizeStandard',
      fieldset: 'sizes',
      type: 'reference',
      to: [
        { type: 'productSizeStandard' },
      ],
    },
    {
      title: 'Sizes',
      description: 'The Sizes this product comes in',
      name: 'productSizes',
      fieldset: 'sizes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productSize' },
          ],
          options: {
            filter({ document, path, parentPath }) {
              const { productSizeStandard } = document;

              return {
                filter: `references($sizeStandard)`,
                params: { sizeStandard: productSizeStandard?._ref },
              };
            }
          },
        },
      ],
    },
    {
      title: 'Variants',
      description: 'The combined data of both the product and variant received from the Shopify Webhook. Should not be edited manually since it will be overridden by subsequent updates in Shopify',
      name: 'productVariants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'productVariant' },
          ],
        },
      ],
    },
    {
      title: 'Product Images',
      name: 'productImages',
      type: 'array',
      of: [
        { type: 'scoped.productImage' },
      ],
    },
    {
      title: 'Product Descriptions',
      name: 'productDescriptions',
      description: 'References a set of product descriptions. Can be scoped if there should be a specific set for a certain options (i.e. size, color, etc.)',
      type: 'array',
      of: [
        { type: 'scoped.productDescriptionSet' },
      ],
    },
    {
      title: "Prices",
      name: "prices",
      type: "array",
      of: [
        { type: 'scoped.productPrice' },
      ],
      inputComponent: PriceListComponent,
    },
    {
      title: 'External References',
      name: 'externalReferences',
      type: 'array',
      of: [
        { type: 'shopify.productReference' },
      ],
    },
    {
      title: 'Product ID',
      name: 'product_id',
      type: 'number',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Body (HTML)',
      name: 'body_html',
      type: 'text',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Vendor',
      name: 'vendor',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Product Type',
      name: 'product_type',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Created At',
      name: 'created_at',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Handle',
      name: 'handle',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Updated At',
      name: 'updated_at',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Template Suffix',
      name: 'template_suffix',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Published Scope',
      name: 'published_scope',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
    {
      title: 'Admin GraphQL Api ID',
      name: 'admin_graphql_api_id',
      type: 'string',
      fieldset: 'shopifyProductFields',
    },
  ],

  preview: {
    select: {
      code: 'code',
      name: 'name',
      media: 'productImages.0.productPhoto.image',
      status: 'status',
      extRefs1: 'externalReferences.0.shopName',
      extRefs2: 'externalReferences.1.shopName',
      extRefs3: 'externalReferences.2.shopName',
    },
    prepare(selection) {
      const { code, name, status, media, extRefs1, extRefs2, extRefs3 } = selection;
      const shopNames = [extRefs1, extRefs2, extRefs3].filter(Boolean);
      const isSynced = shopNames.indexOf('depalma-workwear') >= 0;

      return {
        ...selection,
        title: `${code} ${name}`,
        subtitle: status ? status : `Shopify: ${isSynced ? "✅" : "❌"}`,
        media: media ? media : () => status === 'DISCONTINUED' ? <FaTshirt style={{color: '#ccc'}} /> : <FaTshirt />,
      };
    },
  },

  orderings: [
    {
      title: 'By Code',
      by: [
        { field: 'code', direction: 'asc' },
      ],
    },
  ],
};
