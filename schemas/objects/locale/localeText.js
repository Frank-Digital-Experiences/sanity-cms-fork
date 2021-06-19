import { supportedLanguages } from "../../languages";
import FieldsetTabs from "../../../src/components/FieldsetTabs";

const localeText = {
  title: 'Localized Text',
  name: 'localeText',
  type: 'object',
  options: {
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
    type: 'text',
    fieldset: lang.id,
  }))
}

export default localeText;
