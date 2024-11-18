import { Request, Response, Router } from "express";
import { GenerateRandomHSL, GenerateRandomRGB } from "../utils";
import { ColourSwatch } from "types";

export const colourRoutes = Router();

colourRoutes.get(
  "/generateRandom",
  async (req: Request<{}>, resp: Response) => {
    const amount: number = 5; // could be changed to pull from API query param
    generateColours(resp, amount);
  }
);

function generateColours(resp: Response, amount: number) {
  const colours: ColourSwatch[] = [];

  for (let index = 0; index < amount; index++) {
    let colourType = Math.floor(Math.random() * 2); // value between 0 and 1 (can expand with)

    switch (colourType) {
      case 0: // RGB
        colours.push(GenerateRandomRGB());
        break;
      case 1: // HSL
        colours.push(GenerateRandomHSL());
        break;
      default:
        break;
    }
  }

  resp.send(colours);
}
