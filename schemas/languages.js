export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'sv', title: 'Swedish' }
];

export const baseLanguage = supportedLanguages.find(l => l.isDefault);

export const getListOfLanguages = () => (
  supportedLanguages.map(({ id, title }) => ({ title, value: id }))
);
