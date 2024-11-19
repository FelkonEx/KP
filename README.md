# Project Overview
Single-page React App with a Node.JS Backend (Typescript for both)
## How to extend to different Colours (Back-end)
Simplest way to extend this is:
1. Update `COLOUR_TYPES` in [constant.ts](back/src/utils/constants.ts) with the new colour code
2. Create the new type within [ColourSwatch.ts](back/src/types/ColourSwatch.ts)
3. Create a new `GenerateRandomXXX` function within [utils.ts](back/src/utils/utils.ts) using the created type
4. Modify the `generateColours` `colourType` random number value & switch statement within [colourRoutes.ts](back/src/routes/colourRoutes.ts) with the new `GenerateRandomXXX` function.

## How to extend to different Colours (Front-end)
Simplest way to extend this is:
1. Add a new API type to the [api.tsx](front/src/types/api.tsx) types file to match properties coming from API
2. Update the [Swatch.tsx](front/src/components/Swatch/Swatch.tsx) component with a new condition for the new type & format for rendering
