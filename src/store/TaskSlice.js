import { createSlice } from "@reduxjs/toolkit";
import tasks from "./SampleTasks";

const sampleTasks = tasks;

const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState: sampleTasks,
  reducers: {
    AddTask: (state, actions) => {
      state.unshift(actions.payload.task);
      return state;
    },
    DeleteTask: (state, actions) => {
      const newArr = state.filter((item) => item.id != actions.payload);
      state = newArr;
      return state;
    },
    CompleteTask: (state, actions) => {
      const newArr = state.filter((item) => item.id != actions.payload.id);
      newArr.unshift(actions.payload.task);
      state = newArr;
      return state;
    },
  },
});

export const taskActions = TaskSlice.actions;
export default TaskSlice;
