import { colorDescription } from "../documents/colors/index";

export default {
  title: 'Page Design',
  name: 'pageDesign',
  type: 'object',

  fields: [
    {
      title: 'Start content at',
      name: 'startContentAt',
      description: 'Configures where the content starts. By default it will start below the header, but when Hero sections are used, it is useful to let it start at the top of the window',
      type: 'string',
      options: {
        list: [
          { title: 'Below header (default)', value: 'below-header' },
          { title: 'Top of window', value: 'top-of-window' },
        ],
      },
    },
    {
      title: 'Header Theme (Defaults to DePalma Black)',
      name: 'headerTheme',
      description: 'Can be used to switch to white color when using hero images that contrasts better with another color',
      type: 'designTheme',
    },
    {
      title: 'Themes',
      name: 'themeReferences',
      type: 'themeReferences',
    },
  ],
};
