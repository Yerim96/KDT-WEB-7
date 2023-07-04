import { useState, useMemo } from "react";

//평균값 계산 함수

const AvgFunc = (numbers) => {
  //list값을 받아줌.숫자를 저장할 수 있는 배열

  console.log("평균값 계산중");

  //배열에 원소가 없다면 평균값은 0 반환
  if (numbers.length === 0) return 0;

  //numbers 배열 원소값을 모두 더함. refuce메소드 사용.
  const sum = numbers.reduce((acc, val) => acc + val);
  console.log(sum);
  return sum / numbers.length;
};

//컴포넌트
const UseMemoTest = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const onChangeFunc = (event) => {
    setNumber(event.target.value);
  };

  const onInsert = () => {
    //등록을눌렀을때만 컴포넌트가 재실행되기를 원함.
    //입력할떄는 랜더링 막아주면 된다.
    const newList = list.concat(Number(number));
    setList(newList);
    setNumber("");
  };

  //useMemo 사용
  //랜더링 과정에서 list값이 변경될때만 실행
  //리스트 변화만 감지해서 실행하겠다.
  const avg = useMemo(() => {
    return AvgFunc(list); //AvgFunc함수가 변환될때만 실행
  }, [list]);
  return (
    <>
      <h1>useMemo Hook</h1>
      <input type="number" value={number} onChange={onChangeFunc}></input>
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>
      {/* <h2>평균값: {AvgFunc(list)}</h2> */}
      <h2>평균값: {avg}</h2>
    </>
  );
};

export default UseMemoTest;
