import React from "react";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const Resources = () => {
  return (
    <div className="bg-black text-white" style={{ minHeight: "100vh" }}>
      {/* Inline font-face definition */}
      <style>
        {`
          @font-face {
            font-family: 'Airstrike';
            src: url('/src/assets/fonts/Airstrike.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          .airstrike {
            font-family: 'Airstrike', sans-serif;
          }
        `}
      </style>
      <Navbar />

      <div className="text-center py-8">
        <h1 className="text-blue-500 text-3xl md:text-4xl lg:text-5xl airstrike">
          RESOURCES
        </h1>
      </div>

      {/* SolidWorks Promo */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-8">
        <img
          src="src\assets\Rectangle 7.png"
          alt="Solidworks Banner"
          className="w-full max-w-md md:w-2/3 md:max-w-lg"
        />
        <div className="max-w-md text-left">
          <p className="text-blue-500 uppercase text-sm md:text-base font-sans font-extrabold">
            Create Designs that <br />Matter with <br />Solidworks
          </p>
        </div>
      </div>

      {/* Centered Banner - hidden on small screens */}
      <div className="hidden md:flex justify-center py-8 px-4">
        <img
          src="src\assets\Rectangle 7.png"
          alt="Center Banner"
          className="w-full max-w-2xl md:w-2/3 md:max-w-lg"
        />
      </div>

      {/* Lecture Series */}
      <div className="text-center text-blue-500 text-xl md:text-2xl py-6 airstrike">
        LECTURE SERIES
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`lecture-${index}`}>
            <img
              src="src\assets\Rectangle 7.png"
              alt={`Lecture ${index + 1}`}
              className="w-full max-w-xs mx-auto"
            />
            <div className="h-1 bg-gray-400 mt-1 mx-auto" style={{ width: "50%" }} />
          </div>
        ))}
      </div>
      {/* AutoBytes */}
      <div className="text-center text-blue-500 text-xl md:text-2xl py-6 airstrike">
        AUTOBYTES
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={`autobyte-${index}`}>
            <img
              src="src\assets\Rectangle 7.png"
              alt={`Autobyte ${index + 1}`}
              className="w-full max-w-xs mx-auto"
            />
            <div className="h-1 bg-gray-400 mt-1 mx-auto" style={{ width : "50%"}} />
          </div>
        ))}
      </div>

      {/* Research Papers */}
      <div className="text-center text-blue-500 text-xl md:text-2xl py-6 airstrike">
        RESEARCH PAPERS
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pb-12">
        {Array.from({ length: 2 }).map((_, index) => (
          <img
            key={`paper-${index}`}
            src="src\assets\Rectangle 7.png"
            alt={`Research Paper ${index + 1}`}
            className="w-full max-w-xs mx-auto"
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
