type addTaskType = {
  data : string,
  status : boolean
}

import { ADD_TASK, REMOVE_TASK, TASK_COMPLETE } from "./TaskTypes";

export const addTask = (val:any) => {
  return {
    type: ADD_TASK,
    payload: val,
  };
};

export const removeTask = (val:number) => {
  return {
    type: REMOVE_TASK,
    idx: val,
  };
};

export const taskComplete = (val:number) => {
  return {
    type: TASK_COMPLETE,
    idx: val,
  };
};
