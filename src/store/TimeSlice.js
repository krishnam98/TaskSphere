import { createSlice } from "@reduxjs/toolkit";

const Time = createSlice({
  name: "Time",
  initialState: [],
  reducers: {
    setvalues: (state, actions) => {
      const newArr = [];
      newArr.push(actions.payload.time);
      state = newArr;
      return state;
    },
  },
});

export const TimeActions = Time.actions;
export default Time;
