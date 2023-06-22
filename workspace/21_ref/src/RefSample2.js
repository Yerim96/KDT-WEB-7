import { useRef } from "react";

function RefSample2() {
  //1.useRef()를 사용해 로컬 변수 만들기
  const idRef = useRef(1); //초기값

  const plusId = () => {
    idRef.current += 1; //콘솔에선 찍히지만 실제로는 랜더링되며 증가되지않음.
    console.log(idRef.current);
  };
  return (
    <>
      <h1>{idRef.current}</h1>
      <button onClick={plusId}>plusref</button>
    </>
  );
}

export default RefSample2;
