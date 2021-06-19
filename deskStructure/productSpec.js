import S from '@sanity/desk-tool/structure-builder'
import { FaPaperclip, FaPaintBrush, FaList } from 'react-icons/fa';

export function buildProductSpecStructure() {
  return S.listItem()
    .title('Product Specifications')
    .icon(FaPaperclip)
    .child(
      S.list()
        .title('Product Specifications')
        .items([
          S.listItem()
            .title('Product Descriptions')
            .icon(FaList)
            .child(
              S.list()
                .title('Product Descriptions')
                .items([
                  S.documentTypeListItem('productDescriptionItem')
                    .title('Descriptions')
                    .icon(FaList),
                  S.documentTypeListItem('productDescriptionSet')
                    .title('Sets / Groups of Descriptions'),
                ])
            ),
          S.listItem()
            .title('Care Instructions')
            .icon(FaList)
            .child(
              S.list()
                .title('Care Instructions')
                .items([
                  S.documentTypeListItem('careInstructionItem')
                    .title('Items')
                    .icon(FaList),
                  S.documentTypeListItem('careInstructionSet')
                    .title('Sets of Care Instructions'),
                ])
            ),
          S.listItem()
            .title('Colors')
            .icon(FaPaintBrush)
            .child(
              S.list()
                .title('Colors')
                .items([
                  S.documentTypeListItem('brandColor'),
                  S.documentTypeListItem('colorCombo')
                    .title('Color Combos'),
                  S.documentTypeListItem('colorCategory')
                    .title('Color Categories'),
                ])
            ),
        ]),
    );
}
