import { server } from "@/data/server";
import axios from "axios";
import React, { useState } from "react";
import { HiX } from "react-icons/hi"; // Import close icon
import { toast } from "react-toastify";
import ProjectsDashboardOverview from "./ProjectsDashboardOverview.jsx"; // Assuming you will create this component
import { getAllProjects } from "@/redux/action/projects"; // Adjust import as necessary
import { useDispatch } from "react-redux";

function DashboardProjects({ projects }) {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: projectName,
      category,
      description,
      content,
      mainImage,
      images,
    };

    try {
      await axios.post(`${server}/projects/create`, formData, {
        withCredentials: true,
      }).then((response) => {
        toast.success("Project added successfully");
        setOpen(false);
        setLoading(false);
        setProjectName("");
        setCategory("");
        setDescription("");
        setContent("");
        setMainImage(null);
        setImages([]);
        dispatch(getAllProjects()); // Refresh projects list
      }).catch((error) => {
        toast.error("Failed to add project: " + error.message);
        setLoading  (false);
      })
     
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add project: " + error.message);
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMainImage(reader.result);
    };
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const images = []; // Array to store the image data
    const readerPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result); // Resolve the promise with the image data
        };
      });
    });

    // Wait for all readers to finish
    Promise.all(readerPromises).then((results) => {
      setImages(results); // Update the state with all image data
    });
  };

  return (
    <div className="w-full h-screen p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-text-dark text-3xl font-bold">Projects</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full"
        >
          Add Project
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
                Add Project
              </h2>
              <HiX
                className="text-2xl absolute top-4 right-4 cursor-pointer"
                onClick={() => setOpen(false)}
              />
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    rows={4}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Content</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                    rows={4}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Upload Main Image
                  </label>
                  <input
                    type="file"
                    onChange={handleMainImageChange}
                    accept="image/*"
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-main-yellow focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Upload Additional Images
                  </label>
                  <input
                    type="file"
                    onChange={handleImagesChange}
                    accept="image/*"
                    multiple // Allow multiple file uploads
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
                    {loading ? "Loading..." : "Add Project"}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section: Image Preview */}
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
              {/* Main Image Preview */}
              {mainImage ? (
                <img
                  src={mainImage}
                  alt="Main Preview"
                  className="rounded-lg border border-gray-300 shadow-md mb-4"
                  style={{ maxHeight: "300px", maxWidth: "100%" }}
                />
              ) : (
                <div className="text-gray-400 text-center mb-4">
                  No main image selected
                </div>
              )}

              {/* Additional Images Preview */}
              {images && images.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 w-full">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Additional Image ${index + 1}`}
                      className="rounded-lg border border-gray-300 shadow-md"
                      style={{ maxHeight: "200px", maxWidth: "100%" }} // Adjusted height for additional images
                    />
                  ))}
                </div>
              ) : (
                <div className="text-gray-400 text-center mt-4">
                  No additional images selected
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {projects && projects.length > 0 ? (
        <ProjectsDashboardOverview projects={projects} />
      ) : (
        <div className="p-4 text-text-dark flex justify-center items-center h-full font-bold">
          No projects found
        </div>
      )}{" "}
      {/* Assuming you will create this component */}
    </div>
  );
}

export default DashboardProjects;
