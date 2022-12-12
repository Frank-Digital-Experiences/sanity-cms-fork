import { useMemo } from 'react';
import axios from 'axios';
import { FaShopify } from "react-icons/fa";
import client from 'part:@sanity/base/client';
import { nanoid } from "nanoid";

import { useConfirmLogDialog } from "../../utils/actions";

const token = process.env.SANITY_STUDIO_NETLIFY_AUTH;
const host = process.env.SANITY_STUDIO_NETLIFY_HOST;
const SHOP_NAME = 'depalma-workwear';
const SHOP_PRICE_LIST_CODE = '002';

function colorwayOption(productColorway) {
  if (productColorway) {
    return productColorway.name.en;
  }
}

function sizeOption(productSize) {
  if (productSize) {
    return productSize.abbreviation;
  }
}

function getExternalReference(externalReferences, shopName = SHOP_NAME) {
  return (externalReferences || []).find(ref => ref._type?.match('^shopify') && ref.shopName === shopName);
}

function scopeMatchFunc(limitBy) {
  return item => {
    // Group the productScope by type
    const idsByType = (item.productScope || []).reduce(
      (acc, { _type, _id }) => ({
        ...acc,
        [_type]: acc[_type] ? [...acc[_type], _id] : [_id],
      }),
      {}
    );

    // Returns true if at least one scope for each type, was also present in +limitBy+
    return Object.values(idsByType).every(ids => {
      return limitBy?.find && limitBy.find(s => ids.indexOf(s._id || s._ref) > -1);
    });
  };
}

function getFirstScoped(selectFrom, limitBy) {
  if (selectFrom.find) {
    return selectFrom.find(scopeMatchFunc(limitBy));
  }
  return null;
}

function pushToShopify(body) {
  const headers = { Authorization: `Bearer ${btoa(token)}` };

  return axios.post(`${host}/.netlify/functions/shopifyProductsCreate`, body, { headers });
}

function patchArray(doc, arrayFieldName, appendItem) {
  let patcher = client.patch(doc._id);

  if (doc[arrayFieldName]?.find(i => i._key === appendItem._key)) {
      patcher = patcher.unset([`${arrayFieldName}[_key=="${appendItem._key}"]`]);
  }
  patcher
    .setIfMissing({ [arrayFieldName]: [] })
    .append(arrayFieldName, [appendItem])
    .commit()
}

function jsonStringValue(obj) {
  return JSON.stringify(Object.keys(obj).reduce((acc, k) => k[0] === '_' ? acc : ({ ...acc, [k]: obj[k] }), {}));
}

export function pushProduct(props) {
  const { type, draft, published, onComplete } = props;
  const {
    name,
    description,
    summary,
    productVariants: productVariantRefs = [],
    productColorways: productColorwayRefs = [],
    productSizes: productSizeRefs = [],
    productSubCategory: productSubCategoryRef,
    productImages = [],
    prices = [],
    externalReferences = [],
  } = published || {};

  const externalReference = useMemo(() => getExternalReference(externalReferences), [externalReferences]);
  const existsInShopify = !!externalReference;

  const { dialog, onHandle } = useConfirmLogDialog({
    message: 'This will push the product to Shopify. Are you sure?',
    onComplete,

    onConfirm: (log) => {
      log("Loading all product variants...");

      // Fetch the productPhotos and the referensed asset documents
      const productPhotoRefs = productImages.map(pi => pi['productPhoto']);
      const productPhotoIds = productPhotoRefs.map(d => `"${d._ref}"`).join(', ');
      const fetchProductPhotos = client.fetch(`*[_id in [${productPhotoIds}]] { _id, _type, image { asset->{ _id, url }, hotspot, crop } }`);

      // Fetch the necessary documents referensed by the product
      const productScopeIds = [...productVariantRefs, ...productColorwayRefs, ...productSizeRefs, productSubCategoryRef].map(d => `"${d._ref}"`).join(', ');
      const fetchProductRefs = client.fetch(`*[_id in [${productScopeIds}]]`);

      // Fetch all non-draft price lists
      const fetchPriceLists = client.fetch(`*[_type == "priceList" && !(_id in path("drafts.**"))]`);

      Promise
        .all([fetchProductPhotos, fetchProductRefs, fetchPriceLists])

        // Now we have fetched all we need from Sanity and it is time to start constructing the
        // data that will be sent to Shopify.
        .then(([productPhotos, productRefs, priceLists]) => {
          log("DONE\nPushing product and variants to Shopify...");

          const docsById = productRefs.reduce((acc, d) => ({ ...acc, [d._id]: d }), {});

          const photosById = productPhotos.reduce((acc, d) => ({ ...acc, [d._id]: d }), {});
          const imagesWithScope = productImages.map(productImage => ({
            ...productImage,
            productScope: productImage.productScope ? (productImage.productScope.map(scope => docsById[scope._ref])) : [],
          }));

          const productVariants   = productVariantRefs.map(ref => docsById[ref._ref]);

          const priceList = priceLists.find(d => d.code === SHOP_PRICE_LIST_CODE);
          const price = prices.find(p => p['priceList'] && p['priceList']['_ref'] === priceList['_id'])?.price;
          if (!price || !price.amount) {
            throw(`No price found found for price list ${SHOP_PRICE_LIST_CODE}!`);
          }

          // Build up a list of all the variants that will be added. But because the variant object needs an image_id
          // to reference which asset should be used to preview, we must first create/update the main product with all
          // the photos, so that we can get the image_id from them.
          // But before that, we go through all the productVariants to determine which images needs to be added to the
          // product.
          const variants = productVariants.filter(({ status }) => status !== 'DISCONTINUED').map(productVariant => {
            const {
              externalReferences: externalVariantReferences = [],
              productColorway,
              productSize,
            } = productVariant;

            const { amount, compareToPrice } = price;

            const productImage = getFirstScoped(imagesWithScope, [productVariant.productColorway, productVariant.productSize]);
            const productPhoto = productImage ? photosById[productImage.productPhoto?._ref] : null;
            const externalVariantReference = getExternalReference(externalVariantReferences);

            const colorwayDoc = docsById[productColorway?._ref];
            const colorLabel = colorwayOption(colorwayDoc);
            const sizeLabel = sizeOption(docsById[productSize?._ref]);
            // let metafields = [
            //   {
            //     key: "colorName",
            //     value: jsonStringValue(colorwayDoc?.name),
            //     value_type: 'json_string',
            //     namespace: 'depalma',
            //   },
            // ];

            // if (productPhoto) {
            //   metafields = [
            //     ...metafields,
            //     {
            //       key: "sanityImage",
            //       value: jsonStringValue(productPhoto.image),
            //       value_type: 'json_string',
            //       namespace: 'depalma',
            //     },
            //   ];
            // }

            const variant = {
              ...(externalVariantReference ? { id: externalVariantReference.variant_id } : {}),
              option1:  colorLabel,
              option2:  sizeLabel,
              sku:      productVariant.sku,
              barcode:  productVariant.eanBarcode,
              price:    amount,
              compare_to_price: compareToPrice,
              inventory_management: null,
              // metafields,
            };

            return [variant, productVariant, externalVariantReference, productPhoto];
          });

          // Build up an object where the values are the unique photos used to referense all
          // the product variants. If the photo have been added to Shopify before, we referense
          // it by id, otherwise we pass the sanity url as src.
          const imagesObj = variants.reduce((acc, [variant, productVariant, externalVariantReference, productPhoto]) => {
            if (!productPhoto || acc[productPhoto._id]?.id)
              return acc;

            if (externalVariantReference && externalVariantReference.asset_id === productPhoto.image.asset._id) {
              return { ...acc, [productPhoto._id]: { id: externalVariantReference.image_id } };
            }

            return { ...acc, [productPhoto._id]: { src: productPhoto.image.asset.url } };
          }, {});

          // Now we build the product object that will be pushed to Shopify. At this point we
          // do not include the variants, because we might not yet have all the necessary data
          // to push (image_id). This also means that we cannot specify options at this stage,
          // because if this is a new product, then Shopify will create a default hidden variant,
          // and a variant must have a value for any options specified. So we hold off on sending
          // the options until we also save the variants.
          const product = {
            ...(externalReference ? {id: externalReference.product_id } : null),
            title: [name, description?.en].filter(Boolean).join(' - '),
            body_html: summary?.en,
            product_type: docsById[published.productSubCategory?._ref]?.title?.en,
            images: Object.values(imagesObj),
            // metafields: [
            //   {
            //     key: "description",
            //     value: jsonStringValue(description),
            //     value_type: 'json_string',
            //     namespace: 'depalma',
            //   },
            // ],
          };

          const pushProduct = pushToShopify({ product });
          return Promise.all([pushProduct, variants, imagesObj, docsById]);
        })

        // Now we have the initial response from Shopify where the main product have
        // been updated and the options and images have been saved. Now we can finalize
        // the variants and push one more time.
        .then(([response, variants, imagesObj, docsById]) => {
          log("DONE\nUpdating Sanity documents with Shopify IDs\nProduct...");

          const { data: { product: shopifyProduct } } = response;
          const { images } = shopifyProduct;
          const imageIds = Object.keys(imagesObj);

          const productColorways  = productColorwayRefs.map(ref => docsById[ref._ref]);
          const productSizes      = productSizeRefs.map(ref => docsById[ref._ref]);

          // Update the list of Variants so that all externalVariantReferences contain the asset id
          // of the sanity image and the image_id of the Shopify image. After this, we no longer
          // need the productPhoto, so we omit if from the new array.
          // At this point, we also make sure that externalVariantReference is always present by building
          // a new if it was not present from before.
          const variantsWithExtRef = variants.map(([variant, productVariant, externalVariantReference, productPhoto]) => {
            let newExtRef = {
              _key: externalVariantReference?._key || nanoid(),
              _type: 'shopify.variantReference',
              shopName: SHOP_NAME,
              product_id: shopifyProduct.id,
              variant_id: externalVariantReference?.variant_id,
            };

            if (productPhoto) {
              const imageIdx = imageIds.indexOf(productPhoto._id);
              const shopifyImage = images[imageIdx];

              newExtRef = {
                ...newExtRef,
                asset_id: shopifyImage ? productPhoto.image.asset._id : null,
                image_id: shopifyImage?.id,
              };
            }
            return [variant, productVariant, newExtRef];
          });

          log("DONE\nVariants...");

          // Now be construct the product record again, but only with
          // the variants attribute this time.
          const product = {
            id: shopifyProduct.id,
            options: [
              { name: "Colorway", values: productColorways.map(colorwayOption) },
              { name: "Size",     values: productSizes.map(sizeOption) },
            ],
            variants: variantsWithExtRef.map(([shopifyVariant, productVariant, extVariantRef]) => ({
              ...shopifyVariant,
              image_id: extVariantRef.image_id,
            })),
          };

          const pushProduct = pushToShopify({ product });
          return Promise.all([pushProduct, variantsWithExtRef]);
        })

        // Now we have the second response from Shopify where all the variants have
        // been updated as well. All that remains is to save the variant_id's from
        // Shopify in the external references for each variant.
        .then(([response, variants]) => {
          const { data: { product: shopifyProduct } } = response;

          shopifyProduct.variants.map((shopifyVariant, i) => {
            const [variant, productVariant, externalVariantReference] = variants[i];

            const updExtRef = {
              ...externalVariantReference,
              variant_id: shopifyVariant.id
              // presentment_prices: shopifyVariant.presentment_prices,
            };

            patchArray(productVariant, 'externalReferences', updExtRef);
            log(".");
          });

          // Now we update the product in Sanity with the product_id from Shopify by setting an externalReference
          const { asset_id, image_id } = variants[0][2];

          const updExternalReference = {
            _key: externalReference?._key || nanoid(),
            _type: 'shopify.productReference',
            shopName: SHOP_NAME,
            product_id: shopifyProduct.id,
            asset_id,
            image_id
            // presentment_prices: shopifyProduct.variants[0].presentment_prices,
          };

          patchArray(published, 'externalReferences', updExternalReference);

          log(" DONE!");
          setTimeout(onComplete, 3000);
        })
        .catch(error => {
          console.error(error);
          log(`\n${JSON.stringify(error)}`);
        });
    },
  });

  if (type !== 'product')
    return null;

  return {
    label: existsInShopify ? 'Update Product' : 'Add Product',
    icon: FaShopify,
    disabled: !host || draft || published?.status === 'DISCONTINUED',

    // Opens the confirm dialog with a message
    onHandle,

    // The confirm/modal dialog based on the latest state
    dialog,
  }
}
