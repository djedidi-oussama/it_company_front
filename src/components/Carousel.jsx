import { useState } from 'react';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Images */}
      <div className="overflow-hidden relative h-96 rounded-lg shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === current ? 'translate-x-0' : 'translate-x-full'} `}
            style={{ 
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              width: '100%',
            }}
          ></div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-main-yellow text-white p-2 rounded-full shadow-lg hover:bg-hover-yellow focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-main-yellow text-white p-2 rounded-full shadow-lg hover:bg-hover-yellow focus:outline-none"
      >
        &#10095;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 bg-white rounded-full shadow-md cursor-pointer transition-all duration-300 ${index === current ? 'bg-main-yellow' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
