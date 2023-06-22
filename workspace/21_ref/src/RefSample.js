import { useRef } from "react";

function Re_Sample() {
  //1. ref객체 만들기
  const inputRef = useRef();

  const handleFocus = () => {
    //3. useRef()로 만든 객체의 current 값으로 접근
    console.log(inputRef);
    //focus(): 지정된 html요소에 포커스 설정.
    inputRef.current.focus();
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클릭시 input focusing</p>
      {/* 2.직접 접근해야하는 dom요소(input 등)에 ref prop 설정 */}
      <input ref={inputRef} type="text"></input>
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
}

export default Re_Sample;
