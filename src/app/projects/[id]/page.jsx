"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectDetails from "@/components/ProjectDetails";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Page() {
  const [project, setProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop();

    // Simulate an async call with a timeout for demo purposes
    setTimeout(() => {
      const foundProject = projects.find((project) => project._id === id);
      setProject(foundProject);
      const other = projects
        .filter((project) => project._id !== id)
        .slice(0, 3);
      setOtherProjects(other);
      setLoading(false); // Turn off loading after fetching
    }, 1000); // Simulate a 1-second load time
  }, [projects]);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header index={3} />
        <ProjectDetails project={project} otherProjects={otherProjects} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default Page;
