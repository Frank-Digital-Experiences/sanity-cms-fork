/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

import design from "./design";
import form from "./form";
import grid from "./grid";
import gridCell from "./gridCell";
import hero from "./hero";
import image from "./image";
import imgAndText from './imgAndText';
import leadParagraph from './leadParagraph';
import newsletter from './newsletter';
import paragraph from './paragraph';
import productByCategoryIndex from './productByCategoryIndex';
import productIndex from './productIndex';
import promotedStories from './promotedStories';
import quickNav from './quickNav';
import storyIndex from "./storyIndex";
import twoImages from './twoImages';
import vimeo from './vimeo';
import youtube from './youtube';

const pageSections = {
  title: 'Page Sections',
  description: 'A list of page sections.',
  name: 'pageSections',
  type: 'array',
  of: [
    {type: 'pageSections.grid'},
    {type: 'pageSections.form'},
    {type: 'pageSections.hero'},
    {type: 'pageSections.image'},
    {type: 'pageSections.imgAndText'},
    {type: 'pageSections.leadParagraph'},
    {type: 'pageSections.newsletter'},
    {type: 'pageSections.paragraph'},
    {type: 'pageSections.productIndex'},
    {type: 'pageSections.promotedStories'},
    {type: 'pageSections.quickNav'},
    {type: 'pageSections.storyIndex'},
    {type: 'pageSections.twoImages'},
    {type: 'pageSections.vimeo'},
    {type: 'pageSections.youtube'},
  ],
};

const productCategorySections = {
  title: 'Page Sections',
  description: 'A list of page sections.',
  name: 'pageSections.productCategory',
  type: 'array',
  of: [
    {type: 'pageSections.grid'},
    {type: 'pageSections.form'},
    {type: 'pageSections.hero'},
    {type: 'pageSections.image'},
    {type: 'pageSections.imgAndText'},
    {type: 'pageSections.leadParagraph'},
    {type: 'pageSections.newsletter'},
    {type: 'pageSections.paragraph'},
    {type: 'pageSections.productByCategoryIndex'},
    {type: 'pageSections.promotedStories'},
    {type: 'pageSections.quickNav'},
    {type: 'pageSections.storyIndex'},
    {type: 'pageSections.twoImages'},
    {type: 'pageSections.vimeo'},
    {type: 'pageSections.youtube'},
  ],
};

const storySections = {
  title: 'Page Sections (Story)',
  description: 'A list of page sections applicable to a Story.',
  name: 'pageSections.story',
  type: 'array',
  of: [
    {type: 'pageSections.grid'},
    {type: 'pageSections.hero'},
    {type: 'pageSections.image'},
    {type: 'pageSections.imgAndText'},
    {type: 'pageSections.leadParagraph'},
    {type: 'pageSections.paragraph'},
    {type: 'pageSections.twoImages'},
    {type: 'pageSections.vimeo'},
    {type: 'pageSections.youtube'},
  ],
};

export default [
  pageSections,
  productCategorySections,
  storySections,

  design,
  form,
  grid,
  gridCell,
  hero,
  image,
  imgAndText,
  leadParagraph,
  newsletter,
  paragraph,
  productByCategoryIndex,
  productIndex,
  promotedStories,
  quickNav,
  storyIndex,
  twoImages,
  vimeo,
  youtube,
];
