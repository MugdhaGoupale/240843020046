import { createSlice } from "@reduxjs/toolkit";

const loggedSlice = createSlice({
  name: "logged",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      console.log(" login action");
      return { loggedIn: true };
    },
    logout: (state) => {
      console.log("logout action");
      return { loggedIn: false };
    },
  },
});

export const { login, logout } = loggedSlice.actions;
export default loggedSlice.reducer;
