import { useState, useCallback } from "react";

//컴포넌트
const UseCallbackTest = () => {
  const [count, setCount] = useState(0);

  const withOutCallback = () => {
    //재랜더링되며 함수가 다시생성됨.
    console.log("withOutCallback", count);
    setCount(count + 1);
  };

  //useCallback()
  //   useCallback은 반복해서 생성되는 이벤트 핸들러 함수를 useCallback함수로 감싸주면,
  // 함수를 기억해서 컴포넌트가 다시 랜더링되도 기존의 기억하고 있는 기존함수를 그대로 사용
  //재생성하는것이 아니라 함수를 기억해서 기존 함수를 그대로 사용한다.
  const withCallback = useCallback(() => {
    console.log("withCallback", count);
    setCount(count + 1);
  }, [count]);

  console.log("render");
  return (
    <>
      <div>
        <h2>count:{count}</h2>
        <button onClick={withOutCallback}>withOutCallback</button>
        <button onClick={withCallback}>withCallback</button>
      </div>
    </>
  );
};

export default UseCallbackTest;

//useCallback 과 useMemo의 차이
//useCallback은 useMemo를 기반으로 만든 hook
//단 '함수를 사용할때' 편의성을 증진시킨 hook
//공통점:성능 최적화.캐싱
//차이점:useMemo는 "값"을 재사용, 즉-> 값의 재사용을 위해 전달된 함수를 실행하고 그 "결과"를 저장

// useCallback은 "함수"를 재사용, 즉-> 함수의 재사용을 위해 "함수 자체"를 저장.
