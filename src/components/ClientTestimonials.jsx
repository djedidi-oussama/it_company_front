// ClientTestimonials.jsx
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import {testimonials} from '../data/data';

const ClientTestimonials = () => {
    return (
        <section className='py-16'>
            <div className='max-w-7xl mx-auto px-4 lg:px-0'>
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
                    What Our Clients Say
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {testimonials.map(testimonial => (
                        <div 
                            key={testimonial.id} 
                            className='bg-card-color p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'
                            style={{ backgroundColor: 'var(--card-color)' }}
                        >
                            <div className='flex justify-center mb-4'>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className='w-16 h-16 rounded-full object-cover shadow-md'
                                />
                            </div>
                            <div className='flex justify-center mb-4'>
                                <FaQuoteLeft className='text-main-yellow text-4xl' />
                            </div>
                            <p className='text-text-dark italic mb-4'>“{testimonial.feedback}”</p>
                            <div className='flex justify-end'>
                                <div>
                                    <h3 className='font-semibold' style={{ color: 'var(--text-dark)' }}>{testimonial.name}</h3>
                                    <p className='text-text-dark'>{testimonial.position}</p>
                                </div>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <FaQuoteRight className='text-main-yellow text-4xl' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
