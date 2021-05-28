import { FaStreetView } from 'react-icons/fa';

export default {
  name: 'fittingModel',
  type: 'document',
  title: 'Fitting Model',
  icon: FaStreetView,

  fieldsets: [
    {
      title: 'Body Measurements',
      name: 'bodyMeasurements',
      options: { collapsible: true },
    },
  ],

  fields: [
    {
      title: "Name",
      type: "string",
      name: "name",
    },
    {
      title: "Height",
      type: "string",
      name: "height",
    },
    {
      title: "Weight",
      type: "string",
      name: "weight",
    },
    {
      title: "Chest",
      type: "string",
      name: "chest",
      fieldset: "bodyMeasurements",
    },
    {
      title: "Waist",
      type: "string",
      name: "waist",
      fieldset: "bodyMeasurements",
    },
    {
      title: "Seat",
      type: "string",
      name: "seat",
      fieldset: "bodyMeasurements",
    },
  ],

  preview: {
    select: {
      name: 'name',
      weight: 'weight',
      height: 'height',
    },
    prepare(selection) {
      const { name, height, weight } = selection;

      return {
        title: name ? name : 'Anonymous',
        subtitle: `${height} ${weight}`,
      };
    },
  },
};
