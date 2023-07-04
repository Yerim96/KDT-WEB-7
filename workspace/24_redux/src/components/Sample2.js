import { useSelector, useDispatch } from "react-redux";
import "../App.css";

function Sample2() {
  //hook이용
  //useSelector() hook으로
  //redux store의 state조회
  //자동으로 구동하고 데이터가 변형되면 컴포넌트가 재실행된다.
  const number = useSelector((state) => state.number);

  return (
    <>
      <div className="App">
        <h2>리덕스 컴포넌트</h2>
        <h4>number:{number}</h4>
        <Box1></Box1>
      </div>
    </>
  );
}

const Box1 = () => {
  const number = useSelector((state) => state.number);

  // useDispatch로 실행
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h2>box1 컴포넌트</h2>
        <h4>number:{number}</h4>
        <button onClick={() => dispatch({ type: "PLUS" })}> +</button>
        <button onClick={() => dispatch({ type: "MINUS" })}> -</button>
        <button onClick={() => dispatch({ type: "MIDDLE", data: 10 })}>
          middle
        </button>
      </div>
    </>
  );
};

export default Sample2;
