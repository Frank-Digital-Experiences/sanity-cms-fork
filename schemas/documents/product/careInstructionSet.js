import { keyValueList } from "../../../utils/common";

export const WASHING = {
  '40': 'Wash 40 Normal',
  '40_mild': 'Wash 40 Mild',
  '30': 'Wash 30 Normal',
  'hand': 'Hand Wash',
  'no': 'Do Not Wash',
};

export const BLEACHING = {
  'oxygene': 'Only Non-Chlorine Bleach',
  'no': 'Do Not Bleach'
};

export const DRYING = {
  'line': 'Line Drying',
};

export const TUMBLE_DRYING = {
  'one': 'Tumble drying at Low Temperature',
  'two': 'Tumble drying at Normal Temperature',
  'no': 'Do Not Tumble dry',
};

export const IRONING = {
  'one': 'Iron at Max 110 degrees',
  'two': 'Iron at Max 150 degrees',
  'no': 'No Not Iron',
};

export const PROFESSIONAL = {
  'f': 'Dry Clean in Hydrocarbons, Normal',
  'p': 'Dry Clean in Tetrachloroethene, Normal',
  'no': 'Do Not Dry Clean',
};

const careInstructionSet = {
  title: 'Care Instruction Set',
  name: 'careInstructionSet',
  description: 'A set of Care Instructions.',
  type: 'document',

  fields: [
    {
      title: "Title",
      description: "Only used internally to easily refer to the Set",
      type: "string",
      name: "title",
    },
    {
      title: 'Washing',
      name: 'washing',
      type: 'string',
      options: {
        list: keyValueList(WASHING),
      },
    },
    {
      title: 'Bleaching',
      name: 'bleaching',
      type: 'string',
      options: {
        list: keyValueList(BLEACHING),
      },
    },
    {
      title: 'Drying',
      name: 'drying',
      type: 'string',
      options: {
        list: keyValueList(DRYING),
      },
    },
    {
      title: 'Tumble drying',
      name: 'tumbleDrying',
      type: 'string',
      options: {
        list: keyValueList(TUMBLE_DRYING),
      },
    },
    {
      title: 'Ironing',
      name: 'ironing',
      type: 'string',
      options: {
        list: keyValueList(IRONING),
      },
    },
    {
      title: 'Dry Clean',
      name: 'dryClean',
      type: 'string',
      options: {
        list: keyValueList(PROFESSIONAL),
      },
    },
    {
      title: 'Professional',
      name: 'professional',
      type: 'string',
      options: {
        list: keyValueList(PROFESSIONAL),
      },
    },
    {
      title: 'Extra Instructions',
      name: 'extraInstructions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'careInstructionItem' },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title.en',
    },
  },
};

export default careInstructionSet;
