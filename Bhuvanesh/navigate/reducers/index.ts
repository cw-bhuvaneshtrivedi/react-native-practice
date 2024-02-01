const initialState = { city: "", state: "" };
import { action } from "../types";

const rootReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "CHANGE_CITY": {
      return {
        ...state,
        city: action.payload,
      };
    }
    case "CHANGE_STATE": {
      return {
        ...state,
        state: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
