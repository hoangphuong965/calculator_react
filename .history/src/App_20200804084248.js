import React from "react";
import "./App.css";
import Key from "./component/Key";
import Output from "./component/Output";

function App() {


  return <div className="App">
    <Output result=""/>
    <Key buttonPress={b}/>
  </div>;
}

export default App;
