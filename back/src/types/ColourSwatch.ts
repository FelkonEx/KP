export type ColourSwatch = ColourSwatchRGB | ColourSwatchHSL;

export type ColourSwatchRGB = {
  type: string;
  red: number;
  green: number;
  blue: number;
};

export type ColourSwatchHSL = {
  type: string;
  hue: number;
  saturation: number;
  lightness: number;
};
