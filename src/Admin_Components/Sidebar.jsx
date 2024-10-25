// components/Sidebar.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Import menu icons
import { DashboardItems } from '@/data/data';
import { FiLogOut } from 'react-icons/fi';
import { server } from '@/data/server';
import { toast } from 'react-toastify';
import axios from 'axios';

const Sidebar = ({ index, isOpen, toggleSidebar }) => {
  const handleLogout = async () => {
    try {
      await axios
      .get(`${server}/users/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`fixed inset-y-0 left-0 bg-white shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-64 z-50`}>
      {/* Logo */}
      <div className="flex items-center mb-4 p-4">
        <Link href="/dashboard" passHref>
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </Link>
        <button onClick={toggleSidebar} className="ml-auto lg:hidden">
          <HiX size={24} />
        </button>
      </div>

      <nav className="flex flex-col space-y-2 font-bold text-lg p-4">
        {DashboardItems && DashboardItems.map((item, i) => (
          <Link key={i} href={item.path} passHref>
            <span className={`flex items-center p-2 rounded transition-colors ${i === index ? 'bg-hover-yellow text-text-dark' : 'text-text-dark hover:bg-hover-yellow'}`}>
              {item.icon} <span className="ml-2">{item.name}</span>
            </span>
          </Link>
        ))}
        <div onClick={handleLogout} >
        <span className={`flex items-center p-2 rounded transition-colors text-text-dark hover:bg-hover-yellow cursor-pointer `}>
              <FiLogOut  className='mr-2'/> <span className="ml-2">Log Out</span>
            </span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
