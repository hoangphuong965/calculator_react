import React, { useState } from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {
  const [result, setResult] = useState("");

  const buttonPress = (button) => {
    console.log(button);
    if (button === "=") {
      calculate();
    } else if (button === "C" || button === "CE") {
      reset();
    } else if (button === "%"){
      percent();
    } 
    else {
      setResult(result + button);
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

  }

  return (
    <div className="App">
      <Output result={result} />
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
