import React, { useState } from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {
  const [result, setResult] = useState("");

  const buttonPress = (button) => {
    try {
      if (button === "=") {
        calculate();
      } else if (button === "C" || button === "CE") {
        reset();
      } else if (button === "%" || result === "%"){
        percent();
      } else if(button === "||") 
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
    setResult(result/100)
  };

  return (
    <div className="App">
      <Output result={result} />
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
