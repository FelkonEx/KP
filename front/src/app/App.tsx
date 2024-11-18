import { useState } from "react";
import axios from "axios";

import "./App.css";
import { APISwatchResponse } from "types";
import Swatch from "components/Swatch/Swatch";

function App() {
  const [swatches, setSwatches] = useState<APISwatchResponse[]>([]);

  const buttonHandler = (event: any) => {
    axios
      .get("http://localhost:3001/colour/generateRandom")
      .then((response) => {
        setSwatches(response.data as Array<APISwatchResponse>);
      })
      .catch((exception): any => console.log(exception));
  };

  const renderSwatches = () => (
    <div className="swatch-container">
      {swatches.map((swatch: APISwatchResponse) => (
        <Swatch data={swatch}></Swatch>
      ))}
    </div>
  );

  return (
    <div className="App">
      <h1> Click the button Below to generate 5 different swatches!</h1>
      <button className="button" onClick={buttonHandler}>
        Generate Swatches!
      </button>
      {renderSwatches()}
    </div>
  );
}

export default App;
