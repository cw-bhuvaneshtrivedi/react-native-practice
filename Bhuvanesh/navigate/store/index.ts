import { createStore } from "redux";
import rootReducer from '../reducers'

const store = createStore(rootReducer);
export default store;
export type IRootState = ReturnType<typeof store.getState>;