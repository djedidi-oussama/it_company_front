// pages/services/[name].jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceItem = ({ service, relatedProjects }) => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-text-dark">
          {service.title}
        </h2>

        {/* Flex Container for Image and Description */}
        <div className="flex flex-col lg:flex-row mb-8">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-96 mb-4 lg:mb-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={service.imageUrl}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="lg:w-1/2 lg:pl-6">
            <p className="text-lg mb-4 text-text-dark">{service.description}</p>
            <h4 className="text-xl font-bold mb-2 text-text-dark">Tags:</h4>
            <div className="flex flex-wrap">
              {service.tags &&
                service.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12 mb-8">
          <h3 className="text-3xl font-bold text-text-dark mb-6 text-center">
            Related Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Cards */}
            {relatedProjects &&
              relatedProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-card-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-80 h-96 flex flex-col justify-between"
                >
                  <div className="flex justify-center">
                    <Image
                      src={project.mainImage}
                      alt={project.name}
                      width={300}
                      height={200}
                      className="rounded-md mb-2 transition-transform duration-300 hover:scale-105 object-cover w-full h-48"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-text-dark mb-2 text-center">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 text-center line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href={"/projects/" + project._id}
                    className="flex justify-center"
                  >
                    <button className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                      View Project
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-card-white p-6 rounded-lg shadow-lg mt-10">
          <h3 className="text-3xl font-bold mb-4 text-text-dark">
            Get in Touch
          </h3>
          <p className="text-lg text-text-dark mb-4">
            Interested in our {service.title.toLowerCase()} services? Contact us
            today to discuss how we can help your business grow.
          </p>
          <div className="mt-6 text-center">
            <Link href="/contact">
              <button className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItem;
