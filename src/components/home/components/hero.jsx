import React from 'react';
import hero1 from '../../../assets/hero1.jpg';
import hero2 from '../../../assets/hero2.jpg';
import hero3 from '../../../assets/hero3.jpg';
import hero4 from '../../../assets/hero4.jpg';

const HeroSection = () => {
  const hexStyle = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden flex items-center justify-center p-4">
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      
      <div className="relative flex flex-col items-center w-full max-w-5xl">
        
        {/* TOP ROW: Visible only below 1280px (xl) */}
        {/* justify-between pushes one to far left and one to far right */}
        <div className="flex xl:hidden w-full justify-between mb-10 px-2 md:px-0">
          <div className="w-28 h-28 md:w-44 md:h-44" style={hexStyle}>
            <img src={hero3} className="w-full h-full object-cover" alt="Team" />
          </div>
          <div className="w-28 h-28 md:w-44 md:h-44" style={hexStyle}>
            <img src={hero2} className="w-full h-full object-cover" alt="Workshop" />
          </div>
        </div>

        {/* CENTRAL WRAPPER */}
        <div className="relative w-full">
          
          {/* DESKTOP CORNER PINNING (Visible > 1280px) */}
          <div className="hidden xl:block">
            <div className="absolute -top-16 -left-16 w-48 h-48 z-20 transition-transform hover:scale-110 duration-300" style={hexStyle}>
              <img src={hero3} className="w-full h-full object-cover" alt="Team" />
            </div>
            <div className="absolute -top-16 -right-16 w-48 h-48 z-20 transition-transform hover:scale-110 duration-300" style={hexStyle}>
              <img src={hero2} className="w-full h-full object-cover" alt="Workshop" />
            </div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 z-20 transition-transform hover:scale-110 duration-300" style={hexStyle}>
              <img src={hero1} className="w-full h-full object-cover" alt="Racing" />
            </div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 z-20 transition-transform hover:scale-110 duration-300" style={hexStyle}>
              <img src={hero4} className="w-full h-full object-cover" alt="Group" />
            </div>
          </div>

          {/* THE MAIN GREEN BOX */}
          <div className="relative z-10 border-2 md:border-4 border-green-500 rounded-lg py-14 px-6 md:py-20 md:px-12 bg-black/90 backdrop-blur-md text-center mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-cyan-400 mb-2 tracking-tighter md:tracking-widest leading-none" 
                style={{fontFamily: 'Orbitron, sans-serif', fontStyle: 'italic'}}>
              FUELING PASSION
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-cyan-400 tracking-tighter md:tracking-widest leading-none" 
                style={{fontFamily: 'Orbitron, sans-serif', fontStyle: 'italic'}}>
              POWERING INNOVATION
            </h2>
          </div>
        </div>

        {/* BOTTOM ROW: Visible only below 1280px (xl) */}
        <div className="flex xl:hidden w-full justify-between mt-10 px-2 md:px-0">
          <div className="w-28 h-28 md:w-44 md:h-44" style={hexStyle}>
            <img src={hero1} className="w-full h-full object-cover" alt="Racing" />
          </div>
          <div className="w-28 h-28 md:w-44 md:h-44" style={hexStyle}>
            <img src={hero4} className="w-full h-full object-cover" alt="Group" />
          </div>
        </div>

      </div>

      {/* WELCOME MESSAGE */}
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-red-600 text-lg md:text-2xl font-black tracking-[0.4em] uppercase italic">
          Welcome to the world of SAE
        </p>
      </div>
    </div>
  );
};

export default HeroSection;