import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  projects: [], // This is an array by default
  isLoading: false,
  error: null,
};

export const projectsReducer = createReducer(initialState, (builder) => {
  // get all services
  builder
    .addCase("getAllProjectsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllProjectsSuccess", (state, action) => {
      state.isLoading = false;
      state.projects = action.payload; // Ensure action.payload contains the correct data
    })
    .addCase("getAllProjectsFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Set the error message
    })
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error state
    });
});
