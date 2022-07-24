import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addTreeApi,
  deleteTreeApi,
  getAllTreesApi,
  getOneTreeApi,
  updateTreeApi,
} from "../../utils/fetchApi";

export const getAllTrees = createAsyncThunk(
  "trees/get",
  async (_, thunkApi) => {
    try {
      const data = await getAllTreesApi();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTree = createAsyncThunk("add/trees", async (data, thunkApi) => {
  console.log("data", data);
  try {
    const { form, method } = data;
    if (method === "add") {
      const tree = await addTreeApi(form);
      return tree;
    } else if (method === "update") {
      const tree = await updateTreeApi(form);
      return tree;
    } else if (method === "delete") {
      await deleteTreeApi(form);
    }
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getOneTree = createAsyncThunk(
  "get/trees",
  async (id, thunkApi) => {
    try {
      const data = await getOneTreeApi(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
