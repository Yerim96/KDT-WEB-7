import { useEffect, useState } from "react";
import Re_LifeCycleChild from "./Re_LifeCycleChild";

function Re_LifeCycle() {
  const [number, setChangeNumber] = useState(0);
  const [visible, setChangeVisible] = useState(true);

  const changeNumber = () => {
    setChangeNumber(number + 1);
  };
  const changeVisible = () => {
    setChangeVisible(!visible);
  };

  return (
    <>
      {visible && <Re_LifeCycleChild number={number} />}
      <button type="button" onClick={changeNumber}>
        plus
      </button>

      <button type="button" onClick={changeVisible}>
        On/Off
      </button>
    </>
  );
}
export default Re_LifeCycle;
