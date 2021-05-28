import S from '@sanity/desk-tool/structure-builder'
import { FaTshirt } from 'react-icons/fa';

export function buildProductsStructure() {
  return S.listItem()
    .title('Products & Variants')
    .icon(FaTshirt)
    .child(
      S.list()
        .title('Products & Variants')
        .items([
          S.documentTypeListItem('product')
            .title('Products'),
          S.documentTypeListItem('productVariant')
            .title('Variants / SKUs'),
          S.documentTypeListItem('productColorway')
            .title('Colorways'),
          S.listItem()
            .title('Sizes')
            .child(
              S.list()
                .title('Sizes')
                .items([
                  S.documentTypeListItem('productSizeStandard')
                    .title('Size Standards'),
                  S.documentTypeListItem('productSize')
                    .title('List of Sizes'),
                ])
            ),
          S.listItem()
            .title('Categories')
            .child(
              S.list()
                .title('Categories')
                .items([
                  S.documentTypeListItem('productCategory')
                    .title('Main Categories'),
                  S.documentTypeListItem('productSubCategory')
                    .title('Sub-Categories'),
                ])
            ),
        ]),
    );
}
