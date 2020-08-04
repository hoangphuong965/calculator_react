import React, { useState } from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {
  const [result, setResult] = useState("");

  const buttonPress = (button) => {
    console.log("button " + button);
    console.log("result " + result);
    try {
      if (button === "=") {
        calculate();
      } else if (button === "C" || button === "CE") {
        reset();
      } else if (button === "%") {
        percent();
      } else if (button = "NaN"){
        log
      } 
      else {
        setResult(result + button);
      }
    } catch (error) {
      return;
    }
  };

  const calculate = () => {
    // eslint-disable-next-line
    setResult(eval(result));
  };

  const reset = () => {
    setResult("");
  };

  const percent = () => {
    setResult(result / 100); 
  };

  return (
    <div className="App">
      <Output result={result} />
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
