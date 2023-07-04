import { createStore } from "redux";
import { TOGGLE } from "../lib/constant";
import { createSlice } from "@reduxjs/toolkit";

//ver2

const initialState = {
  number: 0,
};
const counterReducer = createSlice({
  //   name: "counter",
  name: "number",
  initialState: initialState,
  reducers: {
    plus(state) {
      state.number = state.number + 1; //직접적으로 변수 변경 가능
    },
    minus(state) {
      state.number--;
    },
    middle(state, action) {
      console.log(action);
      state.number = state.number + action.payload[0] + action.payload[1];
    },
  },
});

export const counterAction = counterReducer.actions; //action을 받아 사용할 수 ㅣㅇㅆ음.

export default counterReducer.reducer; //함수를 내보내야함

//ver1

// const init = {
//   number: 0,
//   isData: false,
// };

// const counterReducer = (state = init, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "PLUS":
//       return { number: state.number + 1, isData: state.isData };
//     case "MINUS":
//       return { number: state.number - 1, isData: state.isData };
//     case "MIDDLE":
//       return { number: state.number + 10 + action.data + action.mydata };
//     case TOGGLE:
//       return { number: state.number, isData: !state.isData };
//     default:
//       return state;
//   }
// };

// export default counterReducer;
