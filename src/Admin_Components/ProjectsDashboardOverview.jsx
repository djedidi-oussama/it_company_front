import { server } from "@/data/server";
import { getAllProjects } from "@/redux/action/projects";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { toast } from "react-toastify";

function ProjectsDashboardOverview({ projects }) {
  const dispatch = useDispatch(); // Initialize dispatch
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // State for editing
  const [updatedName, setUpdatedName] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [mainImageFile, setMainImageFile] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMainImageFile(reader.result);
    };
  };

  const handleAdditionalImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const fileReaders = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return reader;
    });

    Promise.all(
      fileReaders.map(
        (reader) =>
          new Promise((resolve) => {
            reader.onloadend = () => {
              resolve(reader.result);
            };
          })
      )
    ).then((images) => {
      setAdditionalImages(images);
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProject = {
      name: updatedName,
      content: updatedContent,
      description: updatedDescription,
      category: updatedCategory,
    };

    try {
      const formData = {
        ...updatedProject,
        mainImage: mainImageFile,
        images: additionalImages,
      };

      const response = await axios.put(
        `${server}/projects/${selectedProject._id}`,
        formData,
        {
          withCredentials: true,
        }
      ).then((response) => {
        setLoading(false);
        toast.success("Project updated successfully");
      dispatch(getAllProjects());
      handleCloseEditModal();
      }).catch((error) => {
        toast.error("Error updating project: " + error.message);
        setLoading(false);
      });

      
    } catch (error) {
      toast.error(
        "Error updating project: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error updating project:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${server}/projects/${selectedProject._id}`,
        {
          withCredentials: true,
        }
      ).then((response) => {
        toast.success("Project deleted successfully");
        dispatch(getAllProjects());
        setLoading(false);
        handleCloseDeleteModal();
      })
     
    } catch (error) {
      toast.error(
        "Error deleting project: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error deleting project:", error);
      setLoading(false);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              style={{ backgroundColor: "var(--card-color)" }}
            >
              <img
                src={project.mainImage}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-dark)" }}
                >
                  {project.name}
                </h3>
                <p className="text-text-dark mb-4 line-clamp-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center">
                  {project.category && (
                    <span className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md">
                      {project.category}
                    </span>
                  )}
                </div>
                <div className="flex justify-center gap-3 mt-3 ">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setUpdatedName(project.name);
                      setUpdatedContent(project.content);
                      setUpdatedDescription(project.description);
                      setUpdatedCategory(project.category);
                      setMainImageFile(null); // Reset the main image file
                      setAdditionalImages([]); // Reset the additional images
                      setIsEditModalOpen(true);
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setIsDeleteModalOpen(true);
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Delete
                  </button>
                  <Link href={`/projects/${project._id}`}>
                    <span
                      className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                      aria-label={`Read more about ${project.name}`}
                    >
                      See Project
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                placeholder="Project Name"
                className="border mb-2 p-2 w-full"
                required
              />
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
                placeholder="Project Content"
                className="border mb-2 p-2 w-full"
                required
              />
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                placeholder="Project Description"
                className="border mb-2 p-2 w-full"
                required
              />
              <input
                type="text"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
                placeholder="Category"
                className="border mb-2 p-2 w-full"
                required
              />
              <input
                type="file"
                onChange={handleMainImageChange}
                className="border mb-2 p-2 w-full"
              />
              <input
                type="file"
                multiple
                onChange={handleAdditionalImagesChange}
                className="border mb-2 p-2 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
              >
                {loading ? "Updating..." : "Update"}
              </button>
              <button
                type="button"
                onClick={handleCloseEditModal}
                className="bg-red-500 text-white py-2 px-4 rounded mt-2 ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>
              Are you sure you want to delete the project "
              {selectedProject?.name}"?
            </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseDeleteModal}
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsDashboardOverview;
