import S from '@sanity/desk-tool/structure-builder'

import { buildBrandingStructure } from "./deskStructure/branding";
import { buildSitesStructure } from "./deskStructure/sites";
import { buildPagesStructure } from "./deskStructure/pages";
import { buildPhotosStructure } from "./deskStructure/photos";
import { buildProductsStructure } from "./deskStructure/products";
import { buildProductSpecStructure } from "./deskStructure/productSpec";

export default () => {
  const documentTypeListItems = S.documentTypeListItems();

  return S.list()
    .title('Base')
    .items([
      // // First we add the site schema
      buildSitesStructure(),

      // Add a visual divider (optional)
      S.divider(),

      // Add Pages document type
      buildPagesStructure(),

      // Add Products document type
      buildProductsStructure(),

      // Add Product Specification types
      buildProductSpecStructure(),

      // Add Photos types
      buildPhotosStructure(),

      // Add Theme types
      buildBrandingStructure(),

      // List out the rest of the document types, but filter out the config type already handled
      ...documentTypeListItems
        .filter(listItem => ![
          'brandColor',
          'careInstructionItem',
          'careInstructionSet',
          'colorCategory',
          'colorCombo',
          'country',
          'page',
          'pageImpression',
          'pageRepresentation',
          'product',
          'productCategory',
          'productCategoryPage',
          'productColorway',
          'productDescriptionItem',
          'productDescriptionSet',
          'productPage',
          'productPageVariant',
          'productPhoto',
          'productSize',
          'productSizeStandard',
          'productSubCategory',
          'productVariant',
          'redirect',
          'region',
          'shippingZone',
          'site',
          'sizeGuide',
          'story',
          'theme',
        ].includes(listItem.getId())),
    ])
}
