import React from "react";
import brandColor from "./brandColor";
import category from "./category";
import colorCombo from "./colorCombo";

const styles = { height: '40px', width: '40px', borderRadius: '999px' };

export const ColorPreview = ({ color }) => <div style={{background: color, ...styles }}></div>;

export const colorDescription = 'Blue: #2c313d, Red: #a02a23, White: #f5f3f2, Black: #231f20';

export default [
  brandColor,
  category,
  colorCombo,
];
