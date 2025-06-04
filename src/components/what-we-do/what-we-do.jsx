import React from 'react';
import Cars from '../../assets/Cars.png';
import FinishLine from '../../assets/Finish-Line.png';
import Transmission from '../../assets/Transmission.png';

const WhatWeDo = () => {
  return (
    <div className="bg-black min-h-screen px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Container with transparent grey background - only visible on md and up */}
        <div className="md:bg-gray-800/30 md:rounded-lg md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2">
              <h1 
                className="text-[#4AA7FF] text-6xl mb-8 font-['Airstrike']"
                style={{ fontFamily: 'Airstrike' }}
              >
                OUR VISION
              </h1>
              <p className="text-white text-lg leading-relaxed">
                Society of Automotive Engineers (SAE) IIT Roorkee collegiate 
                chapter was established in March 2000 with the collective effort 
                of a group of students who had a strong urge to complement the 
                theoretical knowledge imparted in the classroom, with emphasis 
                on the practical aspects of engineering. With a humble beginning 
                in March 2000, SAE IIT-R has grown steadily to its present 
                strength of 300+ members and is one of the most active and 
                popular technical societies in the campus.
              </p>
            </div>

            {/* Right side - Hexagonal images */}
            <div className="hidden md:block md:w-1/2">
              <div className="relative h-[400px]">
                {/* Top image */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <img 
                    src={Cars} 
                    alt="Racing Cars"
                    className="w-48 h-48 object-cover"
                    style={{
                      // clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  />
                </div>
                {/* Bottom right image */}
                <div className="absolute bottom-0 right-0">
                  <img 
                    src={FinishLine}
                    alt="Finish Line" 
                    className="w-48 h-48 object-cover"
                    style={{
                      // clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  />
                </div>
                {/* Bottom left image */}
                <div className="absolute bottom-0 left-0">
                  <img 
                    src={Transmission}
                    alt="Transmission" 
                    className="w-48 h-48 object-cover"
                    style={{
                      // clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;