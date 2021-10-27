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
      title: 'To Url',
      name: 'toUrl',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'fromSlug.current',
      subtitle: 'toUrl',
    },
  },

  orderings: [
    {
      title: 'From Slug, Asc',
      name: 'fromSlugAsc',
      by: [
        {field: 'fromSlug.current', direction: 'asc'},
      ],
    },
    {
      title: 'To URL, Asc',
      name: 'toUrlAsc',
      by: [
        {field: 'toUrl', direction: 'asc'},
      ],
    },
  ]
};
