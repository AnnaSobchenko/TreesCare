import { createSlice } from "@reduxjs/toolkit";
import { getAllAdmin } from "./adminOperations";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    treesAdmin: [],
    error: null,
    isLoading: false,
    message: "",
  },

  reducers: {
    
  },

  extraReducers: {
    // getAllTreesForApprove
    [getAllAdmin.pending](state) {
      state.error = null;
    },
    [getAllAdmin.fulfilled](state, { payload }) {
      state.treesAdmin = [...payload];
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
