import { useState } from "react";
import "../App.css";

//redux로 전역상태관리 안하고 props 지옥방법으로 실습
function Sample1() {
  const [number, setNumber] = useState(100);

  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <div className="App">
        {" "}
        redux test
        <Box1 number={number} plus={plus} minus={minus} />
      </div>
    </>
  );
}

const Box1 = ({ number, plus, minus }) => {
  return (
    <>
      <div className="App">
        <h2>box1 컴포넌트</h2>
        <h4>number:{number}</h4>
        <Box2 number={number} plus={plus} minus={minus}></Box2>
      </div>
    </>
  );
};

const Box2 = ({ number, plus, minus }) => {
  return (
    <>
      <div className="App">
        <h2>box1 컴포넌트</h2>
        <h4>number:{number}</h4>
        <button onClick={plus}> +</button>
        <button onClick={minus}> -</button>
      </div>
    </>
  );
};

export default Sample1;
