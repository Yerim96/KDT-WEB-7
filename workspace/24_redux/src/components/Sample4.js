import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { TOGGLE } from "../lib/constant";
import { counterAction } from "../store/counterReducer";

function Sample4() {
  //hook이용
  //useSelector() hook으로
  //redux store의 state조회
  //자동으로 구동하고 데이터가 변형되면 컴포넌트가 재실행된다.
  const number = useSelector((state) => state.counter.number);

  return (
    <>
      <div className="App">
        <h2>리덕스 컴포넌트3</h2>
        <h4>number:{number}</h4>
        <Box1></Box1>
      </div>
    </>
  );
}

const Box1 = () => {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData.isData);
  console.log(isData);

  // useDispatch로 실행
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h2>slice 컴포넌트</h2>
        {isData && <h4>number:{number}</h4>}
        {/* <button onClick={() => dispatch({ type: "PLUS" })}> +</button>
        <button onClick={() => dispatch({ type: "MINUS" })}> -</button>
        <button
          onClick={() => dispatch({ type: "MIDDLE", data: 10, mydata: 20 })}
        >
          middle
        </button>
        <button onClick={() => dispatch({ type: TOGGLE })}>TOGGLE</button> */}
        <button onClick={() => dispatch(counterAction.plus())}> +</button>
        <button onClick={() => dispatch(counterAction.minus())}> -</button>
        <button onClick={() => dispatch(counterAction.middle([20, 15]))}>
          middle
        </button>
        <button onClick={() => dispatch({ type: TOGGLE })}>TOGGLE</button>
      </div>
    </>
  );
};

export default Sample4;
