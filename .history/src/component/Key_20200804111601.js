import React from "react";

const Key = ({ buttonPress }) => {
  const button = (e) => {
    buttonPress(e.target.name);
  };

  return (
    <div>
      <div className="key">
        <div className="key-controls">
          <button name="%" onClick={button}>
            %
          </button>
          <button name="CE" onClick={button}>
            CE
          </button>
          <button name="C" onClick={button}>
            C
          </button>
          <button name="clear" onClick={button}>
            ""
          </button>
        </div>
        <div className="key-number">
          <button name="1" onClick={button}>
            1
          </button>
          <button name="2" onClick={button}>
            2
          </button>
          <button name="3" onClick={button}>
            3
          </button>
          <button name="/" onClick={button}>
            /
          </button>
          <button name="4" onClick={button}>
            4
          </button>
          <button name="5" onClick={button}>
            5
          </button>
          <button name="6" onClick={button}>
            6
          </button>
          <button name="*" onClick={button}>
            x
          </button>
          <button name="7" onClick={button}>
            7
          </button>
          <button name="8" onClick={button}>
            8
          </button>
          <button name="9" onClick={button}>
            9
          </button>
          <button name="-" onClick={button}>
            -
          </button>
          <button name="." onClick={button}>
            .
          </button>
          <button name="0" onClick={button}>
            0
          </button>
          <button name="=" onClick={button}>
            =
          </button>
          <button name="+" onClick={button}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Key;
