import FieldsetTabs from "../../src/components/FieldsetTabs";
import { keyValueList } from "../../utils/common";

const TARGETS = {
  'netlify': 'Netlify',
  'drip': 'Drip',
};

export default {
  name: "netlifyForm",
  type: "document",
  title: "Form",
  inputComponent: FieldsetTabs,
  fieldsets: [
    { name: "content", title: "Content", options: { sortOrder: 10 } },
    { name: "config", title: "Config", options: { sortOrder: 30 } },
  ],

  fields: [
    {
      name: "target",
      type: "string",
      title: "Target",
      description: "Sets the receiving service of the form. (Defaults to Netlify)",
      options: {
        list: keyValueList(TARGETS),
      },
      fieldset: 'config',
      validation: Rule => Rule.required(),
    },
    {
      name: "formId",
      type: "slug",
      title: "Form ID",
      description: "Only required when target is Netlify.",
      fieldset: 'config',
    },
    {
      name: "dripFormId",
      type: "number",
      title: "Drip Form ID",
      description: 'Only required when target is Drip. The Form ID can be found in the URL when you are viewing the form from your Drip Account. I.e. https://www.getdrip.com/[ACCOUNT_ID]/forms/[FORM_ID]/edit',
      fieldset: 'config',
    },
    {
      name: "title",
      type: "localeString",
      title: "Title",
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Form Fields',
      name: 'formFields',
      type: 'array',
      of: [
        { type: 'formAddress' },
        { type: 'formAttachment' },
        { type: 'formInput' },
        { type: 'formSelect' },
        { type: 'formToggle' },
      ],
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Submit Text',
      name: 'submitText',
      type: 'localeString',
      fieldset: 'content',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title.en",
      subtitle: 'formId.current',
    },
  },
};
