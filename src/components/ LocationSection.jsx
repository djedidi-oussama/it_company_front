// LocationSection.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const LocationSection = () => {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
          Visit Us in Tebessa, Algeria
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Contact Details */}
          <div className='flex flex-col justify-center'>
            <div className='mb-8'>
              <h3 className='text-2xl font-semibold mb-4' style={{ color: 'var(--text-dark)' }}>
                Our Location
              </h3>
              <p className='text-lg text-text-dark'>
                We're located in the beautiful city of Tebessa, Algeria, offering top-notch services to clients both locally and internationally.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center text-lg'>
                <FaMapMarkerAlt className='text-main-yellow text-2xl mr-4' />
                <span >Cheikh Laarbi Tebessi High School, Tebessa, Algeria</span>
              </div>
              <div className='flex items-center text-lg'>
                <FaPhoneAlt className='text-main-yellow text-2xl mr-4' />
                <span >+213 123 456 789</span>
              </div>
              <div className='flex items-center text-lg'>
                <FaEnvelope className='text-main-yellow text-2xl mr-4' />
                <span >contact@yourbusiness.com</span>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className='rounded-lg shadow-lg overflow-hidden'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12687.098545876862!2d8.117387525154528!3d35.405515785383554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1944a42b75999%3A0xd66ac39d4db37439!2sT%C3%A9bessa!5e0!3m2!1sen!2sdz!4v1697956745511!5m2!1sen!2sdz'
              width='100%'
              height='350'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
