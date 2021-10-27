import { FaTable } from 'react-icons/fa';

import { keyValueList } from "../../../utils/common";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

export const GRID_LAYOUTS = {
  'grid-4-responsive': '4-cell grid (Responsive)',
};

export default {
  title: 'Grid',
  description: 'A responsive page section with a configurable number of columns and rows based on screen width.',
  name: 'pageSections.grid',
  type: 'object',
  icon: FaTable,
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Grid Content", options: { sortOrder: 10 } },
    { name: "layout", title: "Grid Layout", options: { sortOrder: 20 } },
    { name: "design", title: "Section Design", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      title: 'Grid Cells',
      name: 'gridCells',
      type: 'array',
      of: [
        { type: 'pageSections.gridCell' },
      ],
      fieldset: 'content',
    },
    {
      title: 'Pre-defined Grid Layout',
      name: 'gridLayout',
      type: 'string',
      options: { list: keyValueList(GRID_LAYOUTS) },
      fieldset: 'layout',
    },
    {
      title: 'No. of Columns',
      name: 'noOfCols',
      description: 'Comma separated list of no. of columns for each screen width: <640, <768, <1024, <1280, >=1280. Example: "2,2,3,4,4"',
      type: 'string',
      fieldset: 'layout',
    },
    {
      title: 'Grid Gap',
      name: 'gridGap',
      description: 'The space between each cell',
      type: 'number',
      fieldset: 'layout',
    },
    {
      title: 'Default Cell Layout',
      name: 'defaultCellLayout',
      description: 'The default layout to use in all cells unless set indiviudally',
      type: 'responsive.cellLayout',
      fieldset: 'layout',
    },
    {
      title: 'Default Cell Box Ratio',
      description: 'The default box ratio to be used in all cells unless set individually. Only applies to layouts that uses images.',
      name: 'defaultBoxRatio',
      type: 'responsive.boxRatio',
      fieldset: 'layout',
    },
    {
      title: 'Section Design',
      name: 'sectionDesign',
      type: 'pageSections.design',
      fieldset: 'design',
    },
  ],
  preview: {
    select: {
      title1: 'gridCells.0.pageRepresentation.header.en',
      title2: 'gridCells.1.pageRepresentation.header.en',
      title3: 'gridCells.2.pageRepresentation.header.en',
    },
    prepare(selection) {
      const { title1, title2, title3 } = selection;
      const subtitle = [title1, title2, title3].filter(Boolean).join(' | ');

      return {
        ...selection,
        title: 'Grid Section',
        subtitle,
      };
    },
  },
};
