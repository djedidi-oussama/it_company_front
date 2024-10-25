// app/blog/page.jsx
import React from 'react';
import BlogCard from './BlogCard';



const BlogSection = ({ blogs }) => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl font-bold text-center text-text-dark mb-10">
          Our Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
