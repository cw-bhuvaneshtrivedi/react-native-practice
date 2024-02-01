import { combineReducers } from "redux";
import { locationReducerType } from "../../Types/Types";
import { EDIT_LOCATION } from "./LocationTypes";

const initialState = {
  city: "",
  state: "",
};

const LocationReducer = (state = initialState, action: locationReducerType) => {
  switch (action.type) {
    case EDIT_LOCATION:
      return {
        ...state,
        city: action.payload.city,
        state: action.payload.state,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  location: LocationReducer,
});

export default reducer;
