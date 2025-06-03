import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* Import Air Strike font */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet" />
      
      {/* Top left hexagon - Team photo */}
      <div className="absolute top-32 left-32 transform">
        <div className="w-44 h-44 bg-cover bg-center" 
             style={{
               backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
             }}>
        </div>
      </div>

      {/* Top right hexagon - Workshop/machinery */}
      <div className="absolute top-32 right-32 transform">
        <div className="w-52 h-52 bg-cover bg-center" 
             style={{
               backgroundImage: 'url(https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
             }}>
        </div>
      </div>

      {/* Bottom left hexagon - Racing/off-road vehicle */}
      <div className="absolute bottom-32 left-32 transform">
        <div className="w-60 h-60 bg-cover bg-center" 
             style={{
               backgroundImage: 'url(https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=400)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
             }}>
        </div>
      </div>

      {/* Bottom right hexagon - Team group photo */}
      <div className="absolute bottom-32 right-32 transform">
        <div className="w-48 h-48 bg-cover bg-center" 
             style={{
               backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
             }}>
        </div>
      </div>

      {/* Center bottom hexagon - Rocket */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-36 h-36 bg-cover bg-center" 
             style={{
               backgroundImage: 'url(https://images.pexels.com/photos/586153/pexels-photo-586153.jpeg?auto=compress&cs=tinysrgb&w=400)',
               clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
             }}>
        </div>
      </div>

      {/* Central content box with border */}
      <div className="relative z-10 border-4 border-green-500 rounded-lg p-12 bg-black bg-opacity-80">
        
        {/* Main headline */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-cyan-400 mb-2 tracking-wider" style={{fontFamily: 'Orbitron, monospace', fontStyle: 'italic'}}>
            FUELING PASSION
          </h1>
          <h2 className="text-5xl font-bold text-cyan-400 tracking-wider" style={{fontFamily: 'Orbitron, monospace', fontStyle: 'italic'}}>
            POWERING INNOVATION
          </h2>
        </div>
      </div>

      {/* Welcome message - outside and below the green box */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 mt-16 z-20">
        <p className="text-red-500 text-2xl font-semibold text-center">
          Welcome to the world of SAE
        </p>
      </div>

    </div>
  );
};

export default HeroSection;