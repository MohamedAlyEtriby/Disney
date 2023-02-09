import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  photo: "",
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    SetSignOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});
export default UserSlice.reducer;
export const { setUserLogin, SetSignOut } = UserSlice.actions;
export const Selectusername = (state) => state.user.name;
export const Selectuseremail = (state) => state.user.email;
export const Selectuserphoto = (state) => state.user.photo;
