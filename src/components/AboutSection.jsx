// AboutSection.jsx
import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: 'var(--text-dark)' }}>About Us</h2>
        
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold" style={{ color: 'var(--text-dark)' }}>Who We Are</h3>
            <p className="text-gray-700">
              We are a leading digital solutions provider based in Tebessa, Algeria. Our mission is to offer innovative, high-quality web and mobile solutions that transform businesses and take them to new heights. With years of experience in web development, cloud solutions, and cybersecurity, we have built a strong reputation in the industry.
            </p>
            <p className="text-gray-700">
              Our team is passionate about technology and committed to delivering exceptional results for every project. We believe in working closely with our clients to understand their unique needs and tailor our services to meet them.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-96 flex items-center justify-center">
            <Image
              src="/about-us.png" // Replace with the path to your image
              alt="About Us"
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-dark)' }}>Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200">
              <FaAward className="text-5xl" style={{ color: 'var(--main-yellow)' }} />
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Excellence</h4>
              <p className="text-gray-700">
                We are committed to delivering high-quality services and solutions that exceed client expectations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200">
              <FaUsers className="text-5xl" style={{ color: 'var(--main-yellow)' }} />
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Teamwork</h4>
              <p className="text-gray-700">
                Collaboration and open communication are at the heart of our company culture.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200">
              <FaProjectDiagram className="text-5xl" style={{ color: 'var(--main-yellow)' }} />
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Innovation</h4>
              <p className="text-gray-700">
                We embrace the latest technologies to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="flex flex-col items-center bg--card-white p-6 rounded-lg shadow-md text-center hover:bg-card-hover transition duration-200">
              <FaHandshake className="text-5xl" style={{ color: 'var(--main-yellow)' }} />
              <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>Integrity</h4>
              <p className="text-gray-700">
                We believe in transparency and honesty in every aspect of our work and relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
