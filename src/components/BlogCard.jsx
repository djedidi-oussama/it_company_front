// components/BlogCard.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-bg-light p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <Image
        width={300}
        height={300}
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-text-dark mb-2">{blog.title}</h3>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      <Link href={`/blog/${blog._id}`} className="flex justify-center">
        <span
          className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
          aria-label={`Read more about ${blog.title}`}
        >
          Read More
        </span>
      </Link>
    </div>
  );
};

export default BlogCard;
