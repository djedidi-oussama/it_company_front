'use client';

import { Provider } from "react-redux";
import Store from '../redux/store';
import { useEffect } from 'react';
import { loadUser } from '@/redux/action/user';
import { getAllServices } from "@/redux/action/services";
import { getAllProjects } from "@/redux/action/projects";
import { getAllBlogs } from "@/redux/action/blogs";

export default function ReduxProvider({ children }) {
  useEffect(() => {
    // Dispatch actions to load services and user data
    Store.dispatch(loadUser());
    Store.dispatch(getAllServices());
    Store.dispatch(getAllProjects());
    Store.dispatch(getAllBlogs());
  }, []);

  return <Provider store={Store}>{children}</Provider>;
}
