import { createSlice } from "@reduxjs/toolkit";
import type { InitialUserState } from "../types/types";

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;