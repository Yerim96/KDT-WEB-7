import "./Pt49.css";
import { useState } from "react";
function Pt49() {
  const style = {
    color: "black",
  };
  const [text, setColor] = useState(
    <span style={{ color: style.color }}>검정색글씨</span>
  );
  const [isRed, setIsRed] = useState(false);

  console.log(text);
  //comst number= 0와 같음.
  const redClick = () => {
    setColor("빨강색 글씨");
    setIsRed(true);
  };
  const blueClick = () => {
    setColor("파랑색 글씨");
    setIsRed(false);
  };

  return (
    <div>
      <h1 className={isRed ? "red-text" : "blue-text"}>{text}</h1>

      <button onClick={redClick}>빨강</button>
      <button onClick={blueClick}>파랑</button>
    </div>
  );
}

export default Pt49;
