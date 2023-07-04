// import { createStore } from "redux";

import counterReducer from "./counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import isDataReducer from "./isDataReducer";

// const init = {
//   number: 0,
// };

// const reducer = (state = init, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "PLUS":
//       return { number: state.number + 1 };
//     case "MINUS":
//       return { number: state.number - 1 };
//     case "MIDDLE":
//       return { number: state.number + 10 + action.data - action.minus };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// const store = configureStore({ reducer: { counter: counterReducer } }); //reducer:객체형태.여러 객체 사용 가능.객체로 불러 사용한다.
//configureStore 자체가 두개의 reducer를 하나로 합쳐주기도 한다.
const store = configureStore({
  reducer: { counter: counterReducer, isData: isDataReducer },
});

export default store;
