// components/ContactSection.jsx
'use client';
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { contactInfo } from '../data/data';

const ContactSection = () => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log("Form submitted!");
  };

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl font-bold text-center text-text-dark mb-10">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Contact Information */}
          {contactInfo.map((info) => (
            <div key={info.type} className="bg-card-white p-6 rounded-lg shadow-lg flex items-start">
              {info.icon}
              <div>
                <h4 className="text-xl font-bold text-text-dark">{info.title}</h4>
                <p className="text-gray-600">{info.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-card-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-text-dark mb-6">
            We'd Love to Hear from You!
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-main-yellow"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-main-yellow"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-main-yellow w-full mb-4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
