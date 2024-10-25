// FAQSection.jsx
"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {  faqs } from '../data/data';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border-b border-gray-300 py-4 cursor-pointer'
              onClick={() => toggleFAQ(index)}
            >
              <div className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold' style={{ color: 'var(--text-dark)' }}>{faq.question}</h3>
                <span>
                  {activeIndex === index ? (
                    <FaChevronUp className='text-main-yellow' />
                  ) : (
                    <FaChevronDown className='text-main-yellow' />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <p className='mt-4 text-text-dark'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
