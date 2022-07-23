import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addContactApi,
  delContactApi,
  delUserByIdApi,
  getAllUsersApi,
  getContactApi,
  updateUserContactApi,
} from "../../utils/fetchApi";

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

export const addUserContact = createAsyncThunk(
  "add/contact",
  async (form, thunkApi) => {
    try {
      const data = await addContactApi(form);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateUserContact = createAsyncThunk(
  "add/contact",
  async (form, thunkApi) => {
    try {
      const data = await updateUserContactApi(form);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getContact = createAsyncThunk(
  "get/contacts",
  async (userEmail, thunkApi) => {
    try {
      const data = await getContactApi(userEmail);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const delUserContact = createAsyncThunk(
  "del/contact",
  async (form, thunkApi) => {
    try {
      const data = await delContactApi(form);

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
