import React from "react";

const Key = () => {
  const handleValue = (e) => {

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
        <button className="data-key">2</button>
        <button className="data-key">3</button>
        <button className="data-key">/</button>
        <button className="data-key">4</button>
        <button className="data-key">5</button>
        <button className="data-key">6</button>
        <button className="data-key">x</button>
        <button className="data-key">7</button>
        <button className="data-key">8</button>
        <button className="data-key">9</button>
        <button className="data-key">-</button>
        <button className="data-key">.</button>
        <button className="data-key">0</button>
        <button className="data-key">=</button>
        <button className="data-key">+</button>
      </div>
    </div>
  );
};

export default Key;
