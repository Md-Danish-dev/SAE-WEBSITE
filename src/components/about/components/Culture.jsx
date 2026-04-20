// src/pages/components/Culture.jsx
import React from 'react';

// Placeholder images
import cultureImg1 from '../../../assets/about/culture/culture1.png';
import cultureImg2 from '../../../assets/about/culture/culture2.png';
import cultureImg3 from '../../../assets/about/culture/culture3.png';
import cultureImg4 from '../../../assets/about/culture/culture4.png';
import cultureImg5 from '../../../assets/about/culture/culture5.png';

const HexagonImage = ({ src, className }) => (
  <div className={className} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
    <img src={src} alt="SAE Culture" className="w-full h-full object-cover" />
  </div>
);

const Culture = () => {
    return (    
        <section className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-[#2780BA] text-4xl font-bold mb-12 uppercase">Culture</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 place-items-center max-w-4xl mx-auto">
                <HexagonImage src={cultureImg1} className="w-40 h-40 lg:w-64 lg:h-64 col-span-2 md:col-start-1" />
                <HexagonImage src={cultureImg2} className="w-40 h-40 lg:w-64 lg:h-64 col-span-2 md:col-start-3" />
                <HexagonImage src={cultureImg3} className="w-40 h-40 lg:w-64 lg:h-64 col-span-2 md:col-start-5" />
                <HexagonImage src={cultureImg4} className="w-40 h-40 lg:w-64 lg:h-64 col-span-2 md:col-start-2" />
                <HexagonImage src={cultureImg5} className="w-40 h-40 lg:w-64 lg:h-64 col-span-2 col-start-2 md:col-start-4"/>
            </div>
        </section>
    );
};

export default Culture;