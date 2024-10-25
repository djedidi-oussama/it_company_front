import { server } from "@/data/server";
import { getAllBlogs } from "@/redux/action/blogs";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function BlogsDashboardOverview({ blogs }) {
  const dispatch = useDispatch();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // State for editing
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedTags, setUpdatedTags] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
    };
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tagsArray = updatedTags.split(",").map((tag) => tag.trim());

    const updatedBlog = {
      title: updatedTitle,
      description: updatedDescription,
      content: updatedContent,
      tags: tagsArray,
    };

    try {
      const formData = {
        ...updatedBlog,
        image: imageFile,
      };

      await axios.put(`${server}/blogs/${selectedBlog._id}`, formData, {
        withCredentials: true,
      });

      toast.success("Blog updated successfully");
      dispatch(getAllBlogs());
      handleCloseEditModal();
    } catch (error) {
      toast.error(
        "Error updating blog: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Error updating blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`${server}/blogs/${selectedBlog._id}`, {
        withCredentials: true,
      });
      toast.success("Blog deleted successfully");
      dispatch(getAllBlogs());
      setLoading(false);
      handleCloseDeleteModal();
    } catch (error) {
      toast.error(
        "Error deleting blog" + (error.response?.data?.message || error.message)
      );
      console.error("Error deleting blog:", error);
      setLoading(false);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedBlog(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              style={{ backgroundColor: "var(--card-color)" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-dark)" }}
                >
                  {blog.title}
                </h3>
                <p className="text-text-dark mb-4 line-clamp-1">
                  {blog.description}
                </p>
                <div className="flex flex-wrap justify-center">
                  {blog.tags &&
                    blog.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="flex justify-center gap-3 mt-3 ">
                  <button
                    onClick={() => {
                      setSelectedBlog(blog);
                      setUpdatedTitle(blog.title);
                      setUpdatedDescription(blog.description);
                      setUpdatedContent(blog.content);
                      setUpdatedTags(blog.tags.join(", "));
                      setImageFile(null); // Reset the image file
                      setIsEditModalOpen(true);
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBlog(blog);
                      setIsDeleteModalOpen(true);
                    }}
                    className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                  >
                    Delete
                  </button>
                  <Link href={`/blogs/${blog._id}`}>
                    <span
                      className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                      aria-label={`Read more about ${blog.title}`}
                    >
                      See Blog
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
            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Blog Title"
                className="border mb-2 p-2 w-full"
                required
              />
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                placeholder="Blog Description"
                className="border mb-2 p-2 w-full"
                required
              />
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
                placeholder="Blog Content"
                className="border mb-2 p-2 w-full"
                required
              />
              <input
                type="text"
                value={updatedTags}
                onChange={(e) => setUpdatedTags(e.target.value)}
                placeholder="Tags (comma separated)"
                className="border mb-2 p-2 w-full"
                required
              />
              <input
                type="file"
                onChange={handleImageChange}
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
              Are you sure you want to delete the blog "{selectedBlog?.title}"?
            </p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={handleCloseDeleteModal}
                className="mr-2 bg-red-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-600 text-white py-2 px-4 rounded"
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

export default BlogsDashboardOverview;
