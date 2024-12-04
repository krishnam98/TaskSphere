import { configureStore } from "@reduxjs/toolkit";
import Time from "./TimeSlice";
import TaskSlice from "./TaskSlice";
import sideBarSlice from "./SidebarSlice";
const store = configureStore({
  reducer: {
    setTime: Time.reducer,
    taskReducer: TaskSlice.reducer,
    sidebarReducer: sideBarSlice.reducer,
  },
});

export default store;
