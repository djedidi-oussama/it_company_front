import { server } from "@/data/server"; // Ensure this is correctly pointing to your server config
import axios from "axios";

export const getAllServices = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllServicesRequest",
    });

    const { data } = await axios.get(`${server}/services`); // Use destructuring to get data directly

    dispatch({
      type: "getAllServicesSuccess",
      payload: data.services, // Ensure this matches the structure returned by your API
    });
  } catch (error) {
    dispatch({
      type: "getAllServicesFailed",
      payload: error.response?.data?.message || "Failed to fetch services", // Safely access error message
    });
  }
};
