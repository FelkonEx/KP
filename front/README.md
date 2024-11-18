## How to extend to different Colours (Front-end)
Simplest way toe extend this is to
1. Add a new API type to the [api.tsx](src\types\api.tsx) types file to match properties coming from API
2. Update the [Swatch.tsx](src\components\Swatch\Swatch.tsx) component with a new condition for the new type & format for rendering
