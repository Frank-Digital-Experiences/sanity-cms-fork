// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent       from './objects/blockContent';
import currency           from './objects/currencyCode';
import formAddress        from './objects/formAddress';
import formInput          from './objects/formInput';
import formSelect         from './objects/formSelect';
import formSelectOption   from './objects/formSelectOption';
import formToggle         from './objects/formToggle';
import languages          from './objects/languages';
import localeBlockContent from './objects/localeBlockContent';
import localeSlug         from './objects/localeSlug';
import localeString       from './objects/localeString';
import localeText         from './objects/localeText';
import multiCurrencyPrice from './objects/multiCurrencyPrice';
import navItems           from './objects/navItems/index';
import pageConfig         from './objects/pageConfig';
import pageSections       from './objects/pageSections/index';
import pageSeo            from './objects/pageSeo';
import positioning        from './objects/positioning';
import price              from './objects/price';
import priceListPrice     from './objects/priceListPrice';
import productImage       from './objects/productImage';
import scoped             from './objects/scoped/index';
import shopify            from './objects/shopify';
import siteScope          from './objects/siteScope';
import taggedProduct      from './objects/taggedProduct';
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
import site               from './documents/site';


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    currency,
    formAddress,
    formInput,
    formSelect,
    formSelectOption,
    formToggle,
    languages,
    localeBlockContent,
    localeSlug,
    localeString,
    localeText,
    multiCurrencyPrice,
    ...navItems,
    pageConfig,
    ...pageSections,
    pageSeo,
    positioning,
    price,
    priceListPrice,
    productImage,
    ...scoped,
    ...shopify,
    siteScope,
    taggedProduct,
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
  ]),
})
