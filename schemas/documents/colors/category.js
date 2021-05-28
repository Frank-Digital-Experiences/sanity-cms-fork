export default {
  name: "colorCategory",
  type: "document",
  title: "Color Category",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};
