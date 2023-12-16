import React, { useState } from "react";

const UseState = () => {
  const [isStart, setStart] = useState(false);

  const btnClick = () => {
    setStart(true);
  };

  return (
    <>
      <div data-testid="wrap">
        <div>{isStart ? <div>"on"</div> : <div>"off"</div>}</div>
        <button data-testid="startBtn" onClick={btnClick}>
          변경
        </button>
      </div>
    </>
  );
};

export default UseState;
