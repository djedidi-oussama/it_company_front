"use client";
import DashboardHome from "@/Admin_Components/DashboardHome";
import Sidebar from "@/Admin_Components/Sidebar";
import { useRouter } from "next/navigation"; // Use 'next/navigation' in app directory
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi"; // Import menu icon

function Page() {
  const { isAuthenticated , loading , user } = useSelector((state) => state.user);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // Initial state for sidebar

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router , loading]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open/close
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar index={0} isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto bg-bg-light">
            <button onClick={toggleSidebar} className="lg:hidden fixed top-4 left-4 z-50 bg-main-yellow text-text-dark rounded-full p-2 shadow-lg">
              <HiMenuAlt3 size={24} />
            </button>
            <DashboardHome user={user} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Page;
