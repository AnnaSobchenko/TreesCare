import { createSlice } from "@reduxjs/toolkit";
import { getAllAdmin } from "./adminOperations";
// import { addTree } from "./treesOperations";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    treesAdmin: [],
    method:"",
    error: null,
    isLoading: false,
    message: "",
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
    // getAllTrees
    [getAllAdmin.pending](state) {
      state.error = null;
    },
    [getAllAdmin.fulfilled](state, { payload }) {
      console.log('payload', payload)
      state.treesAdmin = [...payload];
      // state.method = [...payload.method];
    },
    [getAllAdmin.rejected](state, { payload }) {
      state.error = payload;
    },
    // delUserById
    // [delUserById.pending](state) {
    //   state.error = null;
    // },
    // [delUserById.fulfilled](state, { payload }) {},
    // [delUserById.rejected](state, { payload }) {
    //   state.error = payload;
    // },
    // [addTree.pending](state) {
    //   state.isLoading = true;
    // },
    // [addTree.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.message = payload;
      // state.filterValue = [...payload];
    // },
    // [addTree.rejected](state, { payload }) {
    //   state.isLoading = false;
    // },
    // [getContact.pending](state) {
    //   state.isLoading = true;
    // },
    // [getContact.fulfilled](state, { payload }) {
    //   state.isLoading = false;
    //   state.userContact = [...payload];
    //   state.filterValue = [...payload];
    // },
    // [getContact.rejected](state, { payload }) {
    //   state.isLoading = false;
    // },
  },
});
export const {
} = adminSlice.actions;
export default adminSlice.reducer;
