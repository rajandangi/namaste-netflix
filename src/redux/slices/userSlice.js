import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    // eslint-disable-next-line no-unused-vars
    removeUser: (state, action) => {
      return {};
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
