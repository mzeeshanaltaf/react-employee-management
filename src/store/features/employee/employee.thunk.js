import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employees");
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const postEmployee = createAsyncThunk(
  "employee/postEmployee",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("employees", details);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`employees/${id}`);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async ({id, details}, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(`employees/${id}`, details);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);