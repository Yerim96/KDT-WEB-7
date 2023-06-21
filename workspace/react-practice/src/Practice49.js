import { useState } from "react";

function Practice49() {
  //   const [text, setText] = useState("검정색 글씨");
  //   const [color, setColor] = useState("black");

  const [value, setValue] = useState({
    //useState는 오브객체로 가져올 수 있다.
    color: "black",
    text: "검정색",
  });

  const redFunc = () => {
    // setText("빨간색 글씨");
    // setColor("red");
    setValue({
      color: "red",
      text: "빨강색",
    });
  };

  const blueFunc = () => {
    // setText("파란색 글씨");
    // setColor("blue");
    setValue({
      color: "blue",
      text: "파란색",
    });
  };
  return (
    <>
      <h1>실습 풀이</h1>
      <h3 style={{ color: value.color }}>{value.text}</h3>
      <button onClick={redFunc}>빨강색</button>
      <button onClick={blueFunc}>파랑색</button>
    </>
  );
}
export default Practice49;
