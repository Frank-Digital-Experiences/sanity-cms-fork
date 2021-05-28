import defaultResolve from 'part:@sanity/base/document-actions';

import { pushProduct } from './shopify/pushProduct.js';

export default function resolveDocumentActions(props) {
  return [
    ...defaultResolve(props),
    pushProduct,
  ]
}
