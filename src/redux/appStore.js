import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlice";
import moviesReducer from "@/redux/slices/movieSlice";

const appStore = configureStore({
  reducer:{
    user: userReducer,
    movies: moviesReducer
  }
})

export default appStore;
