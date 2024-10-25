"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceItem from "@/components/ServiceItem";
import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function Page() {
  const [service, setService] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { projects } = useSelector((state) => state.projects);
  const { services } = useSelector((state) => state.services);

  useEffect(() => {
    const path = window.location.pathname;
    const name = path.split("/").pop();
    
    // Simulate an async call with a timeout for demo purposes
    setTimeout(() => {
      const service = services.find((s) => s.link.split("/").pop() === name);
      if (service) {
        setService(service);
        const related = projects
          .filter((project) => project.category === name)
          .slice(0, 3);
        setRelatedProjects(related);
      }
      setLoading(false); // Turn off loading after fetching
    }, 1000); // Simulate a 1-second load time
  }, [services, projects]);

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Header index={2} />
      {service && (
        <ServiceItem service={service} relatedProjects={relatedProjects} />
      )}
      <Footer />
    </div>
  );
}

export default Page;
