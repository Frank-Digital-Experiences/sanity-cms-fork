import S from '@sanity/desk-tool/structure-builder'
import { FaCamera } from 'react-icons/fa';

export function buildPhotosStructure() {
  return S.listItem()
    .title('Photos')
    .icon(FaCamera)
    .child(
      S.list()
        .title('Photos')
        .items([
          S.documentTypeListItem('productPhoto')
            .title('Product Photos'),
        ]),
    );
}
