import { useState } from "react";
function Practice50() {
  //두번째방법
  //   const [visible, setVisible] = useState(true);

  //   const hid = () => {
  //     setVisible(() => false);
  //   };
  //   return (
  //     <>
  //       <button onClick={hid}>사라져라</button>
  //       <h3>{visible && "안녕하세요"}</h3>
  //     </>
  //   );
  // 첫번째방법
  const [visible, setVisible] = useState("block");
  const hid = () => {
    setVisible("none");
  };
  return (
    <>
      <button onClick={hid}>사라져라</button>
      <h3 style={{ display: visible }}>안녕하세요</h3>
    </>
  );
}

export default Practice50;
