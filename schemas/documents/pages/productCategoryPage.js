import FieldsetTabs from "../../../src/components/FieldsetTabs";

export default {
  name: 'productCategoryPage',
  type: 'document',
  title: 'Product Category Page',
  inputComponent: FieldsetTabs,

  fieldsets: [
    {
      title: 'Content',
      name: 'content',
      options: { sortOrder: 10 },
    },
    {
      title: 'Config',
      name: 'config',
      fieldset: 'config',
      options: { sortOrder: 20 },
    },
    {
      title: 'Design',
      name: 'design',
      options: { sortOrder: 30 },
    },
  ],

  fields: [
    {
      title: "Page Config",
      type: "pageConfig",
      name: "pageConfig",
      options: { collapsible: true },
      validation: Rule => Rule.required(),
      fieldset: 'config',
    },
    {
      title: "Product Category",
      name: "productCategory",
      type: "reference",
      to: [
        { type: "productCategory" },
      ],
      validation: Rule => Rule.required(),
      fieldset: 'content',
    },
    {
      title: "Product Sub-Category",
      name: "productSubCategory",
      type: "reference",
      to: [
        { type: "productSubCategory" },
      ],
      validation: Rule => Rule.required(),
      fieldset: 'content',
    },
    {
      title: "Page Sections",
      type: "pageSections.productCategory",
      name: "pageSections",
      fieldset: 'content',
    },
    {
      title: "Page Design",
      type: "pageDesign",
      name: "pageDesign",
      fieldset: 'design',
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
