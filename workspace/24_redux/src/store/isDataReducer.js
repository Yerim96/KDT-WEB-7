import { TOGGLE } from "../lib/constant";

const initialState = {
  //원래 관례상 initialState
  isData: false,
};

const isDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { isData: !state.isData };
    default:
      return state;
  }
};
export default isDataReducer;
