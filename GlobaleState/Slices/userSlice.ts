"use client";

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    UserProfile: null,
    token: null,
    pending: false,
    error: false,
  },
  reducers: {
    SignIn: (state, action) => {
      state.UserProfile = action.payload.User;
      state.token = action.payload.token;
    },
    SignOut: (state, action) => {
      state.UserProfile = null;
      state.token = null;
    },
  },
});

export const { SignIn, SignOut } = userSlice.actions;
export default userSlice.reducer;
