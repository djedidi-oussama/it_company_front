import { server } from "@/data/server";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiX } from "react-icons/hi"; // Import menu icons
import { toast } from "react-toastify";
import BlogsDashboardOverview from "./BlogsDashboardOverview"; // Overview for displaying blogs
import { getAllBlogs } from "@/redux/action/blogs"; // Redux action to fetch all blogs
import { useDispatch } from "react-redux";

function DashboardBlogs({ blogs }) {
  const [open, setOpen] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [pdf , setPdf] = useState(null);
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Put tags in array by comma
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    const formData = {
      title: blogTitle,
      description: description,
      content: content,
      image: image,
      pdfUrl : pdf,
      tags: tagsArray,
    };

    try {
      axios
        .post(`${server}/blogs/create`, formData, {
          withCredentials: true,
        })
        .then((response) => {
          toast.success("Blog post added successfully");
          setOpen(false);
          setLoading(false);
          setBlogTitle("");
          setDescription("");
          setContent("");
          setImage(null);
          setPdf(null);
          setTags("");
          dispatch(getAllBlogs());
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Failed to add blog post: " + error);
        });
    } catch (error) {
      toast.error("Failed to add blog post");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
const handlePdfChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setPdf(reader.result);
  };
};
  return (
    <div className="w-full h-screen p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-text-dark text-3xl font-bold">Blogs</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full"
        >
          Add Blog
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="bg-gray-800 bg-opacity-50 absolute inset-0"
            onClick={() => setOpen(false)}
          />
          <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 w-full h-full max-h-screen flex flex-col md:flex-row overflow-y-auto">
            {/* Left Section: Form Inputs */}
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Add Blog Post
              </h2>
              <HiX
                className="text-2xl absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={3}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Content</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={5}
                  />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 mb-2">Pdf File</label>
                <input
                  type="file"
                  onChange={handlePdfChange}
                  required
                  accept="application/pdf"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                    placeholder="e.g. tag1, tag2"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2 transition hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-main-yellow text-text-dark px-4 py-2 rounded-lg transition hover:bg-main-yellow-dark"
                  >
                    {Loading ? "Loading..." : "Add Blog"}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section: Image Preview */}
            <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="rounded-lg border border-gray-300 shadow-md"
                  style={{ maxHeight: "300px", maxWidth: "100%" }}
                />
              ) : (
                <div className="text-gray-400 text-center">
                  No image selected
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {blogs && blogs.length > 0 ? (
        <BlogsDashboardOverview blogs={blogs} />
      ) : (
        <div className="p-4 text-text-dark flex justify-center items-center h-full font-bold">
          No blogs found
        </div>
      )}
    </div>
  );
}

export default DashboardBlogs;
