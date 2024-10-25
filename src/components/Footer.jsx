// Footer.jsx
import React from 'react';
import Link from 'next/link';
import { footerData } from '../data/data'; // Adjust the import path if necessary

const Footer = () => {
  const { companyInfo, quickLinks, contactInfo, socialLinks } = footerData;

  return (
    <footer className='bg-[#1A1A1A] text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>Our Company</h3>
            <p className='text-gray-400 mb-6'>{companyInfo.description}</p>
            <p className='text-gray-400'>{companyInfo.address}</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <div className='text-gray-400 hover:text-yellow-400 transition'>{link.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>Contact Us</h3>
            <p className='text-gray-400 mb-2'>Email: {contactInfo.email}</p>
            <p className='text-gray-400 mb-2'>Phone: {contactInfo.phone}</p>
            <p className='text-gray-400'>Address: {contactInfo.address}</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon; // Get the icon component
                return (
                  <Link key={index} href={social.url} target='_blank' rel='noopener noreferrer'>
                    <Icon size={24} className='text-gray-400 hover:text-yellow-400 transition' />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-12 border-t border-gray-700 pt-6 text-center text-gray-400'>
          <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
