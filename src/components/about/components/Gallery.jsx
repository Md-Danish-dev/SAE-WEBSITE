// src/pages/components/Gallery.jsx
import React from 'react';

import galleryImg1 from '../../../assets/about/gallery/gallery2.png';
import galleryImg2 from '../../../assets/about/gallery/gallery4.png';
import galleryImg3 from '../../../assets/about/gallery/gallery6.png';

const Gallery = () => {
  const images = [galleryImg1, galleryImg2, galleryImg3];
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-[#2780BA] text-4xl font-bold mb-8 text-center uppercase">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg h-64">
            <img 
              src={img} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;