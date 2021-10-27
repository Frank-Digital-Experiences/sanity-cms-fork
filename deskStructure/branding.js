import S from '@sanity/desk-tool/structure-builder'
import { FaPaintBrush } from 'react-icons/fa';

export function buildBrandingStructure() {
  return S.listItem()
    .title('Branding')
    .icon(FaPaintBrush)
    .child(
      S.list()
        .title('Branding')
        .items([
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
            S.documentTypeListItem('theme')
              .title('Themes'),
        ]),
    );
}