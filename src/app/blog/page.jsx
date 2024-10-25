"use client";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { useSelector } from "react-redux";

function page() {
  const { blogs } = useSelector((state) => state.blogs);
  return (
    <>
      {" "}
      <div className="max-w-6xl mx-auto">
        <Header index={4} />
        <BlogSection blogs={blogs} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page;
