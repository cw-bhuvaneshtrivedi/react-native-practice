import { combineReducers } from "redux";
import { ADD_TASK, REMOVE_TASK, TASK_COMPLETE } from "./TaskTypes";

interface IActionA {
  type: "ADD_TASK",
  payload: {
    data:string,
    status:boolean
  }
}

interface IActionB {
  type: "REMOVE_TASK" | "TASK_COMPLETE"
  idx: number
}

type Action = IActionA | IActionB;

type initialState = {
  data : {
    data : string,
    status : boolean,
  }[],
  completeTasks : number
}

const initialState = {
  data: [],
  completeTasks: 0,
};

const TaskReducer = (state:initialState = initialState, action:Action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        completeTasks: state.data[action.idx].status
          ? state.completeTasks - 1
          : state.completeTasks,
        data: state.data.filter((item) => item != state.data[action.idx]),
      };
    case TASK_COMPLETE:
      return {
        ...state,
        data: state.data.map((item, idx) =>
          idx === action.idx ? { ...item, status: true } : item
        ),
        completeTasks: state.completeTasks + 1,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  tasks: TaskReducer,
});

export default reducers;