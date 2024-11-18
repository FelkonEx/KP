export type APISwatchResponse = APISwatchResponseRGB | APISwatchResponseHSL;

export type APISwatchResponseRGB = {
  type: string;
  red: number;
  green: number;
  blue: number;
};

export type APISwatchResponseHSL = {
  type: string;
  hue: number;
  saturation: number;
  lightness: number;
};
