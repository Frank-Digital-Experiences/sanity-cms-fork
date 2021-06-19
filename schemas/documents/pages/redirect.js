import { FaSitemap } from "react-icons/fa";

export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  icon: FaSitemap,

  fields: [
    {
      title: 'From Slug',
      name: 'fromSlug',
      type: 'slug',
      validation: Rule => Rule.required(),
    },
    {
      title: 'To Slug',
      name: 'toSlug',
      type: 'slug',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'fromSlug.current',
      subtitle: 'toSlug.current',
    },
  },
};
