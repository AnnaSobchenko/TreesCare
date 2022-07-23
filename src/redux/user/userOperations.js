import { createAsyncThunk } from "@reduxjs/toolkit";

import { delUserByIdApi, getAllUsersApi } from "../../utils/fetchApi";

export const getAllUsers = createAsyncThunk(
  "users/get",
  async (_, thunkApi) => {
    try {
      const data = await getAllUsersApi();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const delUserById = createAsyncThunk(
  "users/del",
  async (id, thunkApi) => {
    try {
      await delUserByIdApi(id);
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
