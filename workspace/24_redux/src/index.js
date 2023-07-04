import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// //바닐라자바스크립트로 redux예시
// import { createStore } from "redux";

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const span = document.querySelector("span");

// //초기 상태값

// const init = {
//   number: 0,
// };

// //reducer - 액션 type에 따라 변화
// //초기값, 상태변화값
// const reducer = (state = init, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "PLUS":
//       return { number: state.number + 1 };
//     case "MINUS":
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer); //reducer에 저장된 데이터 처리 함수

// //구독(데이터 변화감지)
// store.subscribe(() => {
//   span.innerText = store.getState().number;
// });

// // store.dispatch({ type: "PLUS" });
// // store.dispatch({ type: "PLUS" });
// // store.dispatch({ type: "PLUS" });
// // store.dispatch({ type: "MINUS" });
// // store.dispatch({ type: "MINUS" });
// // console.log("getState", store.getState());

// const handlePlus = () => {
//   store.dispatch({ type: "PLUS" });
// };

// const handleMinus = () => {
//   store.dispatch({ type: "MINUS" });
// };

// plus.addEventListener("click", handlePlus);
// minus.addEventListener("click", handleMinus);
