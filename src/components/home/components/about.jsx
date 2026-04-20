import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import CarouselImage1 from '../../../assets/Carousel 1.png';

const AboutUsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      <div className="relative w-full max-w-5xl mb-8"> 
        {/* Main Image Container */}
        <div className="relative overflow-hidden rounded-lg bg-zinc-900/30 flex items-center justify-center">
          <img
            src={images[currentSlide]}
            alt={`Team photo ${currentSlide + 1}`}
            /* 1. h-auto + w-full: maintains natural ratio
               2. max-h-[500px] or [600px]: keeps it from getting too tall on desktop
               3. object-contain: ensures no part of the image is cut off
            */
            className="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain" 
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-400/20 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-blue-400/20 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
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
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-6 bg-blue-400'
                  : 'w-2 bg-gray-700 hover:bg-gray-500'
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