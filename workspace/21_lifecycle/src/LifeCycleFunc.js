import { useState, useEffect } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

function LifeCycleFunc() {
  const [visible, serVisible] = useState(true);
  const [number, setNumber] = useState(0);

  const changeVisible = () => {
    serVisible(!visible);
  };

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <button onClick={changeNumber} type="button">
        plus
      </button>
      <button onClick={changeVisible} type="button">
        on/off
      </button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
}

export default LifeCycleFunc;
