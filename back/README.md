## How to extend to different Colours (Back-end)
Simplest way toe extend this is to:
1. Update `COLOUR_TYPES` in [constant.ts](src\utils\constants.ts) with the new colour code
2. Create the new type within [ColourSwatch.ts](src\types\ColourSwatch.ts)
3. Create a new `GenerateRandomXXX` function within [utils.ts](src\utils\utils.ts) using the created type
4. Modify the `generateColours` `colourType` random number value & switch statement within [colourRoutes.ts](src\routes\colourRoutes.ts) with the new `GenerateRandomXXX` function.
