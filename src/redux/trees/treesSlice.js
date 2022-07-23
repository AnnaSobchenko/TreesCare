import { createSlice } from "@reduxjs/toolkit";
import { addTree, getAllTrees } from "./treesOperations";

const treesSlice = createSlice({
  name: "trees",
  initialState: {
    trees: [],
    filterValue: [],
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
    [getAllTrees.pending](state) {
      state.error = null;
    },
    [getAllTrees.fulfilled](state, { payload }) {
      state.trees = [...payload];
    },
    [getAllTrees.rejected](state, { payload }) {
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
    [addTree.pending](state) {
      state.isLoading = true;
    },
    [addTree.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.message = payload;
      // state.filterValue = [...payload];
    },
    [addTree.rejected](state, { payload }) {
      state.isLoading = false;
    },
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
  onContactUpdate,

  onPhoneFormReset,
  onFilterValueChange,
} = treesSlice.actions;
export default treesSlice.reducer;
