import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { ColorPreview } from "./index";

export default {
  name: "brandColor",
  type: "document",
  title: "Brand Color",
  icon: FaPaintBrush,
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "code",
      type: "string",
      title: "Code",
    },
    {
      name: "color",
      type: "color",
      title: "Color",
    }
  ],
  preview: {
    select: {
      title: "title.en",
      code: "code",
      color: "color.hex",
    },
    prepare(selection) {
      const { title, code, color } = selection;

      return {
        title: `${code} ${title}`,
        media: color ? () => <ColorPreview color={color} /> : null,
      };
    },
  },
};
