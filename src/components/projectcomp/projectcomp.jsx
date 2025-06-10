import React from "react";

const Projectcomp = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white p-8">
      {/* Left: Image */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[400px] md:max-w-[500px]" // Increased image size
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1 flex flex-col justify-center px-0 md:px-6">
        <h2 className="text-red-500 text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
          {title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-300 text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Projectcomp;
