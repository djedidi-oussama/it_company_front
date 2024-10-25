"use client";
import DashboardServices from "@/Admin_Components/DashboardServices";
import Sidebar from "@/Admin_Components/Sidebar";
import { useRouter } from "next/navigation"; // Use 'next/navigation' in app directory
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi"; // Import menu icon
import { getAllServices } from "@/redux/action/services";

function Page() {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const { services, isLoading, error } = useSelector((state) => state.services);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // Initial state for sidebar
  const dispatch = useDispatch();

  useEffect(() => {
    // Only attempt redirection after the loading completes
    if (!loading && !isAuthenticated && !isLoading) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, loading, router, isLoading]);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  // If still loading, prevent rendering anything until authentication state is clear
  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  // Ensure nothing is rendered until we have a confirmed authenticated state
  if (!isAuthenticated) {
    return null;
  }
  if (error) {
    return <div>Error: {error}</div>; // Display error if it exists
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open/close
  };

  // Debugging: Log the services to check its state
  console.log("Services:", services);

  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar index={1} isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto bg-bg-light">
            <button
              onClick={toggleSidebar}
              className="md:hidden fixed top-4 left-4 z-50 bg-main-yellow text-text-dark rounded-full p-2 shadow-lg"
            >
              <HiMenuAlt3 size={24} />
            </button>

            {/* Render loading state for services */}
            {isLoading ? (
              <div>Loading services...</div>
            ) : (
              <>
               
                  <DashboardServices services={services} />
                
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Page;
