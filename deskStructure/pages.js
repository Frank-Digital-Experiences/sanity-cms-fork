import S from '@sanity/desk-tool/structure-builder'
import { MdLibraryBooks } from 'react-icons/md';

export function buildPagesStructure() {
  return S.listItem()
    .title('Pages')
    .icon(MdLibraryBooks)
    .child(
      S.list()
        .title('Pages')
        .items([
          S.documentTypeListItem('page')
            .title('Design Page'),
          S.documentTypeListItem('productPage')
            .title('Product Pages'),
            S.documentTypeListItem('productPageVariant')
            .title('Product Page Variants'),
          S.documentTypeListItem('productCategoryPage')
            .title('Product Category Pages'),
          S.documentTypeListItem('story')
            .title('Story Pages'),
          S.divider(),
          S.documentTypeListItem('pageRepresentation')
            .title('Page Representations'),
          S.divider(),
          S.documentTypeListItem('redirect')
            .title('Redirects'),
        ]),
    );
}
