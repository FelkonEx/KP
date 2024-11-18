import { constants } from ".";
import { ColourSwatchHSL, ColourSwatchRGB } from "../types";
import { COLOUR_TYPES } from "./constants";

export function GenerateRandomHSL(): ColourSwatchHSL {
  const generatedHSL: ColourSwatchHSL = {
    type: COLOUR_TYPES.HSL,
    hue: randomNum(constants.HUE_MAX),
    saturation: randomNum(constants.SATURATION_MAX),
    lightness: randomNum(constants.LIGHTNESS_MAX),
  };

  return generatedHSL;
}

export function GenerateRandomRGB(): ColourSwatchRGB {
  const generatedHSL: ColourSwatchRGB = {
    type: COLOUR_TYPES.RGB,
    red: randomNum(constants.RGB_MAX),
    green: randomNum(constants.RGB_MAX),
    blue: randomNum(constants.RGB_MAX),
  };

  return generatedHSL;
}

// limited starting at 0, can update with "min" property to specify range for random
const randomNum = (max: number): number =>
  Math.floor(Math.random() * (constants.RGB_MAX + 1));
