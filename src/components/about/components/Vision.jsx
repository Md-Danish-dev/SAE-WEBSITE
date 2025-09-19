// src/pages/components/Vision.jsx
import React from 'react';

import visionImg1 from '../../../assets/about/vision/vision1.png';
import visionImg3 from '../../../assets/about/vision/vision3.png';
import visionImg2 from '../../../assets/about/vision/vision2.png';

const HexagonImage = ({ src, className }) => (
  <div className={className} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
    <img src={src} alt="SAE Vision" className="w-full h-full object-cover" />
  </div>
);

const Vision = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-[#0D1B2A] p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-sae-red text-3xl font-bold mb-6 uppercase">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Our mission is to provide students a platform where they can learn and grow their knowledge in the automotive field. In a team of more than 50 students from different branches of engineering, we provide inter-disciplinary knowledge and a bunch of other soft skills to the members.
          </p>
        </div>
        <div className="grid grid-cols-7 grid-rows-5 gap-1 place-items-center w-full md:w-1/2">
            {/* Top Hexagon */}
            <div className="col-start-4 row-span-3 flex justify-center">
                <HexagonImage 
                src={visionImg1} 
                className="w-36 h-36 md:w-48 md:h-48 lg:w-52 lg:h-52"
                />
            </div>

            {/* Bottom Left Hexagon */}
            <div className="col-start-2 row-start-4 row-span-2">
                <HexagonImage 
                src={visionImg2} 
                className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
            </div>

            {/* Bottom Right Hexagon */}
            <div className="col-start-6 row-start-4 row-span-2">
                <HexagonImage 
                src={visionImg3} 
                className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Vision;