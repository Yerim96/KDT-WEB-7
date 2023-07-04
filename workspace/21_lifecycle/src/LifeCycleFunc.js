import { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    console.log("visible이벤트 실행시작동");

    //unmount
    return () => {
      console.log("unmount 이벤트 실행시 작동");
    };
  }, [visible]);

  useEffect(() => {
    console.log("number 이벤트 실행시작동");
  }, [number]);

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
