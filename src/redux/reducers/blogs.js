import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  blogs: [], // This is an array by default
  isLoading: false,
  error: null,
};

export const blogsReducer = createReducer(initialState, (builder) => {
  // get all services
  builder
    .addCase("getAllBlogsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllBlogsSuccess", (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload; // Ensure action.payload contains the correct data
    })
    .addCase("getAllBlogsFailed", (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Set the error message
    })
    .addCase("clearErrors", (state) => {
      state.error = null; // Clear error state
    });
});
