import { useState } from "react";
function FunctionComponent() {
  const [number, setNumber] = useState(0);
  console.log(number);
  //comst number= 0와 같음.
  const [age, setAge] = useState(1);
  const [hi, setHi] = useState("안녕하세요");
  const [enter, setEnter] = useState("외부");

  return (
    <div>
      <h1>{number}</h1>
      <h3>{age}</h3>
      <h3>{hi}</h3>
      <h3>{enter}</h3>
      <button onClick={() => setNumber(number + 1)}> +1</button>
      <button onClick={() => setAge(age + 1)}> 나이+1</button>
      <button onClick={() => setHi("반갑습니다.")}> 인사바꾸기</button>

      <button onClick={() => setEnter("입장하였습니다..")}>입장</button>
      <button onClick={() => setEnter("퇴장하였습니다...")}> 퇴장</button>
    </div>
  );
}

export default FunctionComponent;
