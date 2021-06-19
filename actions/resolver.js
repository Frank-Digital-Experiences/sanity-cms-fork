import defaultResolve from 'part:@sanity/base/document-actions';

import { pushProduct } from './shopify/pushProduct';
import { buildNetlify } from './netlify/build';

export default function resolveDocumentActions(props) {
  return [
    ...defaultResolve(props),
    pushProduct,
    buildNetlify,
  ];
}
