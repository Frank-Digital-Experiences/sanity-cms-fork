import React from 'react';
import { FaTshirt } from 'react-icons/fa';

import PriceListComponent from "../../../src/components/PriceListComponent";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  icon: FaTshirt,
  inputComponent: FieldsetTabs,
  //__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 

  fieldsets: [
    { title: 'Product Data', name: 'productData', options: { sortOrder: 10 } },
    { title: 'Variants', name: 'variants', options: { sortOrder: 20 } },
    { title: 'Images', name: 'images', options: { sortOrder: 30 } },
    { title: 'E-Commerce', name: 'eCommerce', options: { sortOrder: 40 } },
  ],

  fields: [
    {
      title: 'Code',
      name: 'code',
      type: 'string',
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString',
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'localeText',
      fieldset: 'productData',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      fieldset: 'productData',
    },
    {
      title: 'Category',
      name: 'productCategory',
      type: 'reference',
      to: [
        { type: 'productCategory' },
      ],
      fieldset: 'productData',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Sub-Category',
      name: 'productSubCategory',
      type: 'reference',
      to: [
        { type: 'productSubCategory' },
      ],
      fieldset: 'productData',
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
      fieldset: 'productData',
    },
    {
      title: 'Discontinued',
      name: 'discontinued',
      type: 'boolean',
      fieldset: 'productData',
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
      fieldset: 'variants',
    },
    {
      title: 'Size Standard',
      name: 'productSizeStandard',
      type: 'reference',
      to: [
        { type: 'productSizeStandard' },
      ],
      fieldset: 'variants',
    },
    {
      title: 'Sizes',
      description: 'The Sizes this product comes in',
      name: 'productSizes',
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
      fieldset: 'variants',
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
      fieldset: 'variants',
    },
    {
      title: 'Product Images',
      name: 'productImages',
      type: 'array',
      of: [
        { type: 'scoped.productImage' },
      ],
      fieldset: 'images',
    },
    {
      title: 'Product Descriptions',
      name: 'productDescriptions',
      description: 'References a set of product descriptions. Can be scoped if there should be a specific set for a certain options (i.e. size, color, etc.)',
      type: 'array',
      of: [
        { type: 'scoped.productDescriptionSet' },
      ],
      fieldset: 'productData',
    },
    {
      title: 'Care Instructions',
      name: 'careInstructions',
      description: 'References a set of care instructions. Can be scoped if there should be a specific set for a certain options (i.e. size, color, etc.)',
      type: 'array',
      of: [
        { type: 'scoped.careInstructionSet' },
      ],
      fieldset: 'productData',
    },
    {
      title: "Prices",
      name: "prices",
      type: "array",
      of: [
        { type: 'scoped.productPrice' },
      ],
      inputComponent: PriceListComponent,
      fieldset: 'eCommerce',
    },
    {
      title: 'External References',
      name: 'externalReferences',
      type: 'array',
      of: [
        { type: 'shopify.productReference' },
      ],
      fieldset: 'eCommerce',
    },
    {
      title: 'Profiling Friendly',
      name: 'profilingFriendly',
      type: 'boolean',
      fieldset: 'productData',
    },
    {
      title: 'Product ID',
      name: 'product_id',
      type: 'number',
      fieldset: 'eCommerce',
    },
    {
      title: 'Body (HTML)',
      name: 'body_html',
      type: 'text',
      fieldset: 'eCommerce',
    },
    {
      title: 'Vendor',
      name: 'vendor',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Product Type',
      name: 'product_type',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Created At',
      name: 'created_at',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Handle',
      name: 'handle',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Updated At',
      name: 'updated_at',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Template Suffix',
      name: 'template_suffix',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Published Scope',
      name: 'published_scope',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'string',
      fieldset: 'eCommerce',
    },
    {
      title: 'Admin GraphQL Api ID',
      name: 'admin_graphql_api_id',
      type: 'string',
      fieldset: 'eCommerce',
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
      title: 'Code',
      by: [
        { field: 'code', direction: 'asc' },
      ],
    },
    {
      title: 'Name',
      by: [
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
};
