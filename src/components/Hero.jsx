import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-8 max-w-7xl max-md:max-w-md mx-auto py-12 md:py-20">
      <div className="max-md:order-2 text-center md:text-left">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-text-dark">
          IT Solutions for Your <br /> Digital Transformation
        </h1>
        {/* Subheadline */}
        <p className="text-lg md:text-2xl font-medium mb-8 text-gray-700">
          Empowering businesses with cutting-edge technology solutions.
        </p>
        {/* Call to Action */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Link href="/services">
            <button className="bg-main-yellow hover:bg-hover-yellow text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              Get Started
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border-2 border-gray-700 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-700 hover:text-white transition-transform transform hover:scale-105 duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="md:order-2 md:h-[450px] flex items-center justify-center">
        <Image
          src="/image.png"
          alt="Hero Image"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
