import { useState } from "react";
function HiComponent() {
  const [message, setMessage] = useState("");
  const enter = (e, str) => {
    // setMessage("입장하였습니다.");
    setMessage(() => "입장하였습니다.");
    console.log(e, str);
  };
  const out = () => {
    setMessage("퇴장하였습니다.");
  };
  return (
    <>
      <h1>{message}</h1>
      {/* 합성이벤트 */}
      {/* 합성이벤트는 함수 enter()형태로 쓸 수 없고, 무조건 화살표형태로 인자값을 날려야한다. */}
      <button onClick={(e) => enter(e, "abc")}>입장</button>
      <button onClick={out}>퇴장</button>
    </>
  );
}

export default HiComponent;
