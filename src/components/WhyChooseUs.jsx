// WhyChooseUs.jsx
import React from 'react';
import { FaCheckCircle, FaStar, FaHandsHelping, FaUserShield } from 'react-icons/fa';
import { reasons } from '../data/data';

const WhyChooseUs = () => {
    return (
        <section className='py-16'>
            <div className='max-w-7xl mx-auto px-4 lg:px-0'>
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
                    Why Choose Us?
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {reasons.map(reason => (
                        <div 
                            key={reason.id} 
                            className='bg-card-color p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'
                            style={{ backgroundColor: 'var(--card-color)' }}
                        >
                            <div className='flex justify-center mb-4'>
                                {reason.icon}
                            </div>
                            <h3 className='text-xl font-semibold mb-2 text-center' style={{ color: 'var(--text-dark)' }}>
                                {reason.title}
                            </h3>
                            <p className='text-text-dark text-center'>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
