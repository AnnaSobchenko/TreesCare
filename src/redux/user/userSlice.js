import { createSlice } from "@reduxjs/toolkit";

import { getAllUsers, delUserById } from "./userOperations";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userContact: [],
    phoneForm: {},
    filterValue: [],
    error: null,
    isLoading: false,
  },

  reducers: {
    // onContactUpdate(state, { payload }) {
    //   state.phoneForm = { ...payload };
    // },
    // onPhoneFormReset(state, { payload }) {
    //   state.phoneForm = { ...payload };
    // },
    // onFilterValueChange(state, { payload }) {
    //   state.filterValue = [...payload];
    // },
  },

  extraReducers: {
    // getAllUsers
    [getAllUsers.pending](state) {
      state.error = null;
    },
    [getAllUsers.fulfilled](state, { payload }) {
      state.users = [...payload];
    },
    [getAllUsers.rejected](state, { payload }) {
      state.error = payload;
    },
    // delUserById
    [delUserById.pending](state) {
      state.error = null;
    },
    [delUserById.fulfilled](state, { payload }) {},
    [delUserById.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});
export const {
  onContactUpdate,

  onPhoneFormReset,
  onFilterValueChange,
} = usersSlice.actions;
export default usersSlice.reducer;
