import React from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {
  const [result, setresult] = useState(initialState)

  const buttonPress = () => {

  };

  return (
    <div className="App">
      <Output result="" />
      <Key buttonPress={buttonPress} />
    </div>
  );
}

export default App;
