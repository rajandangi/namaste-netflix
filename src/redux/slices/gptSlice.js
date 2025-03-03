import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesNames: null,
    gptMovies: null,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMoviesNames, gptMovies } = action.payload;
      state.gptMoviesNames = gptMoviesNames;
      state.gptMovies = gptMovies;
    },
  },
});

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
