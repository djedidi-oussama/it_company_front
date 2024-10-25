// pages/services/index.jsx
import React from 'react';
import Link from 'next/link';
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa';


const ServicesSection = ({ services }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: 'var(--text-dark)' }}>Our Services</h2>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services ? services.map((service) => (
              <div
                key={service._id}
                className="bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                style={{ backgroundColor: "var(--card-color)" }}
              >
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-text-dark mb-4 line-clamp-1">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap justify-center">
                    {service.tags &&
                     service.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-main-yellow text-black py-1 px-3 rounded-full mr-2 mb-2 shadow-md"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <div className="flex justify-center gap-3 mt-3 ">
                  
                    <Link href={service.link}>
                      <span
                        className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300"
                        aria-label={`Read more about ${service.title}`}
                      >
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )):
            (
              <div className="p-4 text-text-dark flex justify-center items-center h-full font-bold">
               No Services Found
              </div>
            )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
