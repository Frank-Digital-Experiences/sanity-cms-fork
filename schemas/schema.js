// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blocks             from './objects/block/index';
import blockContent       from './objects/blockContent';
import countryMemberships from './objects/countryMemberships';
import currency           from './objects/currencyCode';
import designTheme        from './objects/designTheme';
import formFields         from './objects/form/index';
import height             from './objects/height';
import languages          from './objects/languages';
import localeObjects      from './objects/locale/index';
import multiCurrencyPrice from './objects/multiCurrencyPrice';
import navItems           from './objects/navItems/index';
import padding            from './objects/padding';
import pageConfig         from './objects/pageConfig';
import pageDesign         from './objects/pageDesign';
import pageSections       from './objects/pageSections/index';
import pageSeo            from './objects/pageSeo';
import paymentMethods     from './objects/paymentMethods';
import price              from './objects/price';
import priceListPrice     from './objects/priceListPrice';
import productImage       from './objects/productImage';
import scoped             from './objects/scoped/index';
import shippingZones      from './objects/shippingZones/index';
import shopify            from './objects/shopify';
import siteScope          from './objects/siteScope';
import storyPreview       from './objects/storyPreview';
import stringTable        from './objects/stringTable';
import responsive         from './objects/responsive';
import taggedProduct      from './objects/taggedProduct';
import themeObjects       from './objects/theme';
import themeReferences    from './objects/themeReferences';
import webImage           from './objects/webImage';

import colors             from './documents/colors/index';
import country            from './documents/country';
import fittingModel       from './documents/fittingModel';
import nav                from './documents/nav';
import netlifyForm        from './documents/netlifyForm';
import priceList          from './documents/priceList';
import productDocs        from './documents/product/index';
import pages              from './documents/pages/index';
import productPhoto       from './documents/productPhoto';
import region             from './documents/region';
import shippingZone       from './documents/shippingZone';
import site               from './documents/site';
import sizeGuide          from './documents/sizeGuide';
import theme              from './documents/theme';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    ...blocks,
    blockContent,
    countryMemberships,
    currency,
    designTheme,
    ...formFields,
    height,
    languages,
    ...localeObjects,
    multiCurrencyPrice,
    ...navItems,
    padding,
    pageConfig,
    pageDesign,
    ...pageSections,
    pageSeo,
    paymentMethods,
    price,
    priceListPrice,
    productImage,
    ...scoped,
    ...shippingZones,
    ...shopify,
    siteScope,
    storyPreview,
    stringTable,
    ...responsive,
    taggedProduct,
    ...themeObjects,
    themeReferences,
    webImage,

    // The following are document types which will appear
    // in the studio. 
    //
    // Tip: Add them in the order you want them to
    // be displayed.
    site,
    nav,
    netlifyForm,
    ...pages,
    priceList,
    ...productDocs,
    ...colors,
    fittingModel,
    country,
    productPhoto,
    region,
    shippingZone,
    sizeGuide,
    theme,
  ]),
})
