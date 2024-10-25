import { server } from "@/data/server"; // Ensure this is correctly pointing to your server config
import axios from "axios";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBlogsRequest",
    });

    const { data } = await axios.get(`${server}/blogs`); // Use destructuring to get data directly

    dispatch({
      type: "getAllBlogsSuccess",
      payload: data.blogPosts, // Ensure this matches the structure returned by your API
    });
  } catch (error) {
    dispatch({
      type: "getAllBlogsFailed",
      payload: error.response?.data?.message || "Failed to fetch blogs", // Safely access error message
    });
  }
};
