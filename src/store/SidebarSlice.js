import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebarSlice",
  initialState: false,
  reducers: {
    toggleSide: (state, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export const sidebarActions = sideBarSlice.actions;
export default sideBarSlice;
