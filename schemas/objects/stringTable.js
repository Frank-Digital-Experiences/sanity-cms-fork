import TableInput from "../../src/components/TableInput";


export default {
  title: 'String Table',
  description: 'A two dimensional table array of strings',
  name: 'stringTable',
  type: 'object',
  inputComponent: TableInput,
  options: {
    defaultValues: {
      noOfCols: 5,
      noOfRows: 5,
    },
  },

  fields: [
    {
      title: 'No. of Rows',
      name:  'noOfRows',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'No. of Cols',
      name:  'noOfCols',
      type: 'number',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Corner Label',
      name: 'cornerLabel',
      type: 'string',
    },
    {
      title: 'Row Labels',
      name: 'rowLabels',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Col Labels',
      name: 'colLabels',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 1',
      name: 'tableContent0',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 2',
      name: 'tableContent1',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 3',
      name: 'tableContent2',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 4',
      name: 'tableContent3',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 5',
      name: 'tableContent4',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 6',
      name: 'tableContent5',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 7',
      name: 'tableContent6',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 8',
      name: 'tableContent7',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 9',
      name: 'tableContent8',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
    {
      title: 'Table Content - Row 10',
      name: 'tableContent9',
      type: 'array',
      of: [
        { type: 'string' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      storyTitle: 'story.pageConfig.pageSeo.title.en',
      image: 'image',
      storyImage: 'story.pageConfig.pageSeo.image',
    },
    prepare(selection) {
      const { title, storyTitle, image, storyImage } = selection;

      return {
        title: title || storyTitle,
        media: image || storyImage,
      };
    },
  },
};
