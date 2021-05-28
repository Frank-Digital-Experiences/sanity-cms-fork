export default {
  name: 'productCategoryPage',
  type: 'document',
  title: 'Product Category Page',

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
      validation: Rule => Rule.required(),
    },
    {
      title: "Product Category",
      name: "productCategory",
      type: "reference",
      to: [
        { type: "productCategory" },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: "Product Sub-Category",
      name: "productSubCategory",
      type: "reference",
      to: [
        { type: "productSubCategory" },
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: "Page Sections",
      type: "pageSections.productCategory",
      name: "pageSections",
    },
  ],

  preview: {
    select: {
      category: 'productCategory.title.en',
      subCategory: 'productSubCategory.title.en',
      subtitle: 'pageConfig.slug.current',
    },
    prepare(selection) {
      const { category, subCategory } = selection;

      return {
        ...selection,
        title: `${category} - ${subCategory}`,
      };
    }
  },

  orderings: [
    {
      title: 'Slug, Asc',
      name: 'slugAsc',
      by: [
        {field: 'pageConfig.slug.current', direction: 'asc'},
      ],
    },
    {
      title: 'Category & Sub-Category, Asc',
      name: 'byCategorySubCategoryAsc',
      by: [
        {field: 'productCategory.title.en', direction: 'asc'},
        {field: 'productSubCategory.title.en', direction: 'asc'},
      ],
    },
  ],

  initialValue: {
    pageConfig: {
      _type: 'pageConfig',
      siteScope: {
        _type: 'siteScope',
        allSites: true,
      }
    }
  },
};
