import { createSlice } from "@reduxjs/toolkit";
import {
  logout,
  signin,
  signup,
  getInfo,
  getNewTokens,
} from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: "", name: "" },
    token: null,
    refreshToken: null,
    _id: null,
    isLoading: false,
    isLoggedIn: false,
    isAdmin: false,
    error: null,
  },
  reducers: {
    logoutUser(state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
      state.isAdmin = false;
    },
    addIsAdmin(state) {
      state.isAdmin = true;
    },
  },
  extraReducers: {
    // SIGN UP
    [signup.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signup.fulfilled](state, { payload }) {
      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signup.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // SIGN IN
    [signin.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signin.fulfilled](state, { payload }) {
      state.user.email = payload.user.email;
      state.user.name = payload.user.name;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state._id = payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signin.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // GET INFO
    [getInfo.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getInfo.fulfilled](state, { payload }) {
      console.log("~ payload", payload);

      state.user.email = payload.email;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [getInfo.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // REFRESH
    [getNewTokens.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getNewTokens.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    [getNewTokens.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.isLoggedIn = false;
    },

    // LOGOUT
    [logout.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logout.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state._id = null;
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.isLoading = false;
    },
    [logout.rejected](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error = payload;
    },
  },
});
export const { logoutUser, addIsAdmin } = authSlice.actions;
export default authSlice.reducer;
