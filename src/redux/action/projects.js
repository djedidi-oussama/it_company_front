import { server } from "@/data/server"; // Ensure this is correctly pointing to your server config
import axios from "axios";

export const getAllProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProjectsRequest",
    });

    const { data } = await axios.get(`${server}/projects`); // Use destructuring to get data directly

    dispatch({
      type: "getAllProjectsSuccess",
      payload: data.projects, // Ensure this matches the structure returned by your API
    });
  } catch (error) {
    dispatch({
      type: "getAllProjectsFailed",
      payload: error.response?.data?.message || "Failed to fetch projects", // Safely access error message
    });
  }
};
