"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import BlogItem from "@/components/BlogItem";
import { useSelector } from "react-redux";

function Page() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState(null);
  const { blogs: blogPosts } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (blogPosts && blogPosts.length > 0) {
      const path = window.location.pathname;
      const id = path.split("/").pop();

      const selectedBlog = blogPosts.find((post) => post._id === id);
      setBlog(selectedBlog);

      const related = blogPosts.filter((b) => b._id !== id).slice(0, 3);
      setRelatedBlogs(related);
    }
  }, [blogPosts]);

  // Loader while fetching the blog data
  if (!blog || !relatedBlogs) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header index={4} />
        <BlogItem blog={blog} relatedBlogs={relatedBlogs} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default Page;
