import React from 'react';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Logo and Title Section */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <img 
              src={logo}
              alt="SAE IIT Roorkee Logo" 
              className="w-32 h-auto mb-4"
            />
          </div>

          {/* Title Section */}
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 leading-tight">
              Society of Automotive Engineering, IIT Roorkee
            </h2>
          </div>

          {/* Address Section */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Address</h3>
            <p className="text-gray-300 leading-relaxed">
              Student Activity Center, IIT Roorkee 247667,<br />
              Uttarakhand, India
            </p>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1 text-center md:text-left">
            {/* Follow us on */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Follow us on</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mail us */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Mail us</h3>
              <a 
                href="mailto:sae@iitr.ac.in" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                sae@iitr.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

