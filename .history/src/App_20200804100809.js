import React, { useState } from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const buttonPress = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C" || button === "CE") {
      reset();
    } else {
      setResult(result + button);
      setInput(result "+" "button)
      console.log(result)
      console.log(button)
    }
  };

  const calculate = () => {
    // eslint-disable-next-line
    setResult(eval(result));
  };

  const reset = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <Output result={result} />
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
