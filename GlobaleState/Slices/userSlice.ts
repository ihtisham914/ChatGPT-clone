"use client";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    UserProfile: null,
    token: "",
    pending: false,
    error: false,
  },
  reducers: {
    SignIn: (state, action) => {
      state.UserProfile = action.payload.user;
      state.token = action.payload.token;
    },
    SignOut: (state, action) => {
      state.UserProfile = null;
      state.token = "";
    },
  },
});

export const { SignIn, SignOut } = userSlice.actions;
export default userSlice.reducer;
