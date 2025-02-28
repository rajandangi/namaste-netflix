import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    trailorKey: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    topRated: (state, action) => {
      state.topRated = action.payload;
    },
    addTrailorKey: (state, action) => {
      state.trailorKey = action.payload;
    },
  },
});

export const { addNowPlaying, addPopular, topRated, addTrailorKey } =
  moviesSlice.actions;

export default moviesSlice.reducer;
