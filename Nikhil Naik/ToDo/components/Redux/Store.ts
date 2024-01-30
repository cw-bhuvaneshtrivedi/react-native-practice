import { createStore } from "redux";
import reducers from "./Task/TaskReducer";

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>
export default store;
