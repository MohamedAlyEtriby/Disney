import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newdisney: null,
  originals: null,
  trending: null,
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.recommended = action.payload.recommended;
      state.newdisney = action.payload.newdisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trendin;
    },
  },
});
export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
export const selectrecom = (state) => state.movie.recommended;
export const selectnewdis = (state) => state.movie.newdisney;
export const selectorg = (state) => state.movie.originals;
export const selecttren = (state) => state.movie.trending;
