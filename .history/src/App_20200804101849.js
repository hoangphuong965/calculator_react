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
      let x = setInput(result + button);
      setInput(x)
    }
  };

  const calculate = () => {
    // eslint-disable-next-line
    setResult(eval(result));
  };

  const reset = () => {
    setResult("");
  };

  return (
    <div className="App">
      <Output result={result} input={input}/>
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
