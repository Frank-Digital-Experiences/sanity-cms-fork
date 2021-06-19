import { supportedLanguages } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

const localeString = {
  title: 'Localized Block Content',
  name: 'localeBlockContent',
  type: 'object',
  options: {
    collapsible: true,
    includeDescriptionAboveTabs: true,
    includeTitleAboveTabs: true,
  },
  inputComponent: FieldsetTabs,
  fieldsets: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
  })),

  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.id,
  }))
}

export default localeString;
