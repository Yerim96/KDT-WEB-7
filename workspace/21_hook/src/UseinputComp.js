import { useState } from "react";

//사용자지정 훅만들기
const useInput = (init, vali) => {
  //init:kdt7
  //val: value.length <10

  const [value, setValue] = useState(init);

  // console.log("valie", vali);

  const valiFunc = (e) => {
    //검사함수
    // console.log(e.target.value);
    // console.log(vali(value));
    if (vali(value)) {
      setValue(e.target.value);
    } else {
      setValue(init); //원래값으로 초기화
    }
  };

  return { value, valiFunc };
};
const UseinputComp = () => {
  const maxLength = (value) => value.length < 10;
  //초기화 값과 검사하려는 값 두개의 인자 필요
  const input = useInput("Kdt7: ", maxLength);
  console.log(input);
  return (
    <>
      <h1>Hello world</h1>
      <input
        placeholder="이름을 하세요"
        value={input.value}
        onChange={input.valiFunc}
      ></input>
    </>
  );
};

export default UseinputComp;
