import { useState } from "react";
function Pt50() {
  const [hello, setDisplay] = useState("안녕하세요");
  const [display, setDisplayStyle] = useState("block");
  const hid = () => {
    setDisplayStyle("none");
  };
  return (
    <>
      <button onClick={hid}>사라져라</button>
      <h3 style={{ display: display }}>{hello}</h3>
    </>
  );
}

export default Pt50;
