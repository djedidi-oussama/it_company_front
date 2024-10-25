import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  services: [], // This is an array by default
  isLoading: false,
  error: null,
};

export const servicesReducer = createReducer(initialState, (builder) => {
  // get all services
  builder
    .addCase("getAllServicesRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllServicesSuccess", (state, action) => {
      state.isLoading = false;
      state.services = action.payload; // Ensure action.payload contains the correct data
    })
    .addCase("getAllServicesFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Set the error message
    })
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error state
    });
});
