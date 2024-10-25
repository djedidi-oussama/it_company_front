"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Menu icons
import React, { useState } from "react";
import { headerItems } from "../data/data"; // Import header items from data.js

function Header({ index }) {
  // State to manage mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-0">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={180}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex items-center space-x-6">
          {headerItems.map((item, idx) => (
            <Link key={item.title} href={item.link}>
              <div
                className={`
                  ${index === idx ? "text-hover-yellow" : "text-text-dark"}
                  flex items-center space-x-2 font-bold text-lg hover:text-hover-yellow transition-all duration-300`}
              >
                {item.icon} {/* Render the icon */}
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Toggle between menu open and close icon */}
          <button onClick={toggleMenu} className="text-text-dark">
            {isOpen ? (
              <HiX className="w-8 h-8" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300`}
      >
        <nav className="flex flex-col items-center space-y-4 bg-gray-900 p-5">
          {headerItems.map((item, idx) => (
            <Link key={item.title} href={item.link}>
              <div
                onClick={toggleMenu}
                className={`
                  ${index === idx ? "text-hover-yellow" : "text-text-dark"}
                  flex items-center space-x-2 font-bold text-lg hover:text-hover-yellow transition-all duration-300`}
              >
                {item.icon} {/* Render the icon */}
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
