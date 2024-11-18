import {
  APISwatchResponse,
  APISwatchResponseHSL,
  APISwatchResponseRGB,
} from "types";
import "./Swatch.css";

type SwatchProps = {
  data: APISwatchResponse;
};

export default function Swatch({ data }: SwatchProps) {
  const renderRGB = (data: APISwatchResponseRGB) => (
    <>
      <i>Red:</i> {data.red}
      <br />
      <i>Green:</i> {data.green}
      <br />
      <i>Blue:</i> {data.blue}
    </>
  );

  const renderHSL = (data: APISwatchResponseHSL) => (
    <>
      <i>Hue:</i> {data.hue}
      <br />
      <i>Saturation:</i> {data.saturation}
      <br />
      <i>Lightness:</i> {data.lightness}
    </>
  );

  return (
    <div className="swatch">
      <b>Type: {data.type}</b>
      <br />
      {data.type === "rgb" && renderRGB(data as APISwatchResponseRGB)}
      {data.type === "hsl" && renderHSL(data as APISwatchResponseHSL)}
    </div>
  );
}
