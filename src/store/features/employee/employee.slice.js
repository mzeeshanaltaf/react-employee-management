import { createSlice } from "@reduxjs/toolkit";
import {
  getEmployees,
  postEmployee,
  deleteEmployee,
  updateEmployee,
} from "./employee.thunk";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Employees Data
    builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Post Employee Data
    builder.addCase(postEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postEmployee.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Delete Employee Data
    builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteEmployee.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Update Employee Data
    builder.addCase(updateEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateEmployee.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
