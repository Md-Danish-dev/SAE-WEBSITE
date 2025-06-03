import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import CarouselImage1 from '../../../assets/Carousel 1.png';

const AboutUsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - you can replace these with your actual images
  const images = [
    CarouselImage1,
    CarouselImage1,
    CarouselImage1,
  ];

  const nextSlide = () => { 
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-16 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-12 tracking-wider">
        ABOUT US
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl mb-8">
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={images[currentSlide]}
            alt={`Team photo ${currentSlide + 1}`}
            className="w-full h-80 md:h-96 object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-blue-400'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Description Text */}
      <div className="max-w-4xl text-center mb-12 px-4">
        <p className="text-gray-300 text-lg leading-relaxed">
          Society of Automotive Engineers (SAE) IIT Roorkee collegiate chapter was established in March 2000 with the collective effort of a group of students who had a strong urge to complement the theoretical knowledge imparted in the classroom, with emphasis on the practical aspects of engineering. With a humble beginning in March 2000, SAE IIT-R has grown steadily to its present strength of 300+ members and is one of the most active and popular technical societies in the campus.
        </p>
      </div>

      {/* Know More Button */}
      <a
        href="/about"
        className="inline-flex items-center space-x-2 text-red-500 hover:text-red-400 font-semibold text-lg transition-colors duration-200 group"
      >
        <span>Know More</span>
        <ArrowRight 
          size={20} 
          className="group-hover:translate-x-1 transition-transform duration-200" 
        />
      </a>
    </div>
  );
};

export default AboutUsCarousel;