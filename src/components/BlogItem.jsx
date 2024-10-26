import Link from "next/link";

const BlogItem = ({ blog, relatedBlogs }) => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Blog Content */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-text-dark mb-4">
            {blog.title}
          </h1>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-600 mb-2">{blog.description}</p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-text-dark">Content</h2>
            <p className="text-text-dark">{blog.content}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-text-dark">Tags:</h2>
            <div className="flex flex-wrap mt-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-main-yellow font-bold px-2 py-1 rounded-md mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            {blog.pdfUrl && (
              <div className="flex justify-center w-full items-center mt-6">
                <a
                  href={blog?.pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                >
                  Download Blog PDF
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Related Blogs */}
        <aside className="lg:pl-8">
          <h2 className="text-2xl font-bold text-text-dark mb-6">
            Related Blogs
          </h2>
          <ul className="space-y-4">
            {relatedBlogs.length > 0 ? (
              relatedBlogs.map((relatedBlog) => (
                <li
                  key={relatedBlog._id}
                  className="bg-card-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-text-dark">
                    <Link
                      href={`/blog/${relatedBlog._id}`}
                      className="hover:text-main-yellow"
                    >
                      {relatedBlog.title}
                    </Link>
                  </h3>
                  <p>{relatedBlog.description}</p>
                </li>
              ))
            ) : (
              <p>No related blogs found.</p>
            )}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default BlogItem;
