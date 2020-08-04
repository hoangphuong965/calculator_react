import React from "react";

const Key = ({ buttonPress }) => {
  const button = (e) => {
    buttonPress(e.target.name);
  };
  return (
    <div>
      <div className="key">
        <div className="key-controls">
          <button className="data-ctr">%</button>
          <button className="data-ctr">CE</button>
          <button className="data-ctr">C</button>
          <button className="data-ctr">||x</button>
        </div>
        <div className="key-number">
          <button ="1" onClick={button}>
            1
          </button>
          <button ="2" onClick={button}>
            2
          </button>
          <button ="3" onClick={button}>
            3
          </button>
          <button ="/">/</button>
          <button ="4">4</button>
          <button ="5">5</button>
          <button ="6">6</button>
          <button ="x">x</button>
          <button ="7">7</button>
          <button ="8">8</button>
          <button ="9">9</button>
          <button ="-">-</button>
          <button =".">.</button>
          <button ="0">0</button>
          <button ="=">=</button>
          <button ="+">+</button>
        </div>
      </div>
    </div>
  );
};

export default Key;
