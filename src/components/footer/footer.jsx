import React from 'react';
import saeLogo from '../../assets/sae-logo.png';
import fbIcon from '../../assets/facebook.png';
import instaIcon from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-8">
        {/* Logo Container */}
        <div className="flex-shrink-0">
          <img 
            src={saeLogo} 
            alt="SAE Logo" 
            className="h-24 w-auto"
          />
        </div>

        {/* Title Container */}
        <div className="flex-grow md:flex-grow-0">
          <h2 className="text-[#4AA7FF] text-xl font-semibold">
            Society of Automotive Engineering, IIT Roorkee
          </h2>
        </div>

        {/* Address Container */}
        <div className="w-full md:w-auto">
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-300">
            Student Activity Center, IIT Roorkee 247667,<br />
            Uttarakhand, India
          </p>
        </div>

        {/* Social Media Container */}
        <div className="w-full md:w-auto">
          <h3 className="font-semibold mb-2">Follow us on</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={fbIcon} 
                alt="Facebook" 
                className="h-8 w-8 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img 
                src={instaIcon} 
                alt="Instagram" 
                className="h-8 w-8 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Mail Container */}
        <div className="w-full md:w-auto">
          <h3 className="font-semibold mb-2">Mail us</h3>
          <a 
            href="mailto:sae@iitr.ac.in" 
            className="text-gray-300 hover:text-[#4AA7FF] transition-colors"
          >
            sae@iitr.ac.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;