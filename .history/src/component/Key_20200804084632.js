import React from "react";

const Key = () => {
  const handleValue = (e) => {
     console.log(e.target.value);
  };
  return (
    <div className="key">
      <div className="key-controls">
        <button className="data-ctr">%</button>
        <button className="data-ctr">CE</button>
        <button className="data-ctr">C</button>
        <button className="data-ctr">||x</button>
      </div>
      <div className="key-number">
        <button className="data-key" onClick={handleValue}>
          1
        </button>
        <button className="2">2</button>
        <button className="3">3</button>
        <button className="/">/</button>
        <button className="4">4</button>
        <button className="5">5</button>
        <button className="6">6</button>
        <button className="x">x</button>
        <button className="7">7</button>
        <button className="8">8</button>
        <button className="9">9</button>
        <button className="-">-</button>
        <button className=".">.</button>
        <button className="0">0</button>
        <button className="">=</button>
        <button className="">+</button>
      </div>
    </div>
  );
};

export default Key;
