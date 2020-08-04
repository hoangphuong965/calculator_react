import React from "react";

function Output({ result, input }) {
  return (
    <div className="output">
      <p className="input">{input}</p>
      <p className="result">{result}</p>
    </div>
  );
}

export default Output;
