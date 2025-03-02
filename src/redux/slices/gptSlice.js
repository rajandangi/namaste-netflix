import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});


export const {toggleGptSearch} = gptSlice.actions;

export default gptSlice.reducer;