import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdLanguage } from 'react-icons/md';
import { FaFlag } from 'react-icons/fa';

export function buildSitesStructure() {
  return S.listItem()
    .title('Site Configuration')
    .icon(MdSettings)
    .child(
      S.list()
        .title('Site Configuration')
        .items([
          S.listItem()
            .title('Site Settings')
            .child(
              S.list()
                .title('Site Settings')
                .items([
                  S.listItem()
                    .title('Global')
                    .icon(MdLanguage)
                    .child(
                      S.editor()
                        .schemaType('site')
                        .documentId('global')
                    ),
                  S.listItem()
                    .title('EU')
                    .child(
                      S.editor()
                        .schemaType('site')
                        .documentId('eu')
                    ),
                  S.listItem()
                    .title('SE')
                    .child(
                      S.editor()
                        .schemaType('site')
                        .documentId('se')
                    ),
                ]),
            ),
            S.documentTypeListItem('country')
              .title('Countries')
              .icon(FaFlag),
        ])
    );
}
