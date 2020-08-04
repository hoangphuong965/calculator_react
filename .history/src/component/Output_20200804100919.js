import React from "react";

function Output({ result, input }) {
  return (
    <div className="output">
      <p className="input"></p>
      <p>{result}</p>
    </div>
  );
}

export default Output;
