import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { servicesReducer } from "./reducers/services";
import { projectsReducer } from "./reducers/projects";
import { blogsReducer } from "./reducers/blogs";



const Store = configureStore({
  reducer: {
    user: userReducer,
    services: servicesReducer,
    projects : projectsReducer ,
    blogs : blogsReducer

  },
});

export default Store;