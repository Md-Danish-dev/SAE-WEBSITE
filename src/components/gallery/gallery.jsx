import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  // Array of image paths
  const images = Array.from({ length: 7 }, (_, i) => 
    `/src/assets/Rectangle ${i + 7}.png`
  );

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-[#4AA7FF] text-6xl mb-12 font-['Airstrike']"
          style={{ fontFamily: 'Airstrike' }}
        >
          GALLERY
        </h1>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;