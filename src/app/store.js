import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useReducer } from "react";
import counterReducer from "../features/counter/UserSlice";
import  UserReducer from "../features/counter/UserSlice";
import movieReducer from "../features/movie/movieSlice"
export const store = configureStore({
  reducer: {
    user: UserReducer,
    movie:movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
