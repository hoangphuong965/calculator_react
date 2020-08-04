import React, { useState } from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {
  const [result, setResult] = useState("");


  const buttonPress = (button) => {
    if (button === "=") {
      calculate();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    setResult(eval(result)+"");
  };

  return (
    <div className="App">
      <Output result={result} />
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
