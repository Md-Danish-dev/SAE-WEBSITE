import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import saeLogo from '../../assets/sae-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyles = (path) => `
    text-lg font-medium
    ${isActive(path) ? 'text-blue-400' : 'text-white'}
    hover:text-blue-400
    relative
    after:content-['']
    after:absolute
    after:w-full
    after:h-0.5
    after:bg-blue-400
    after:left-0
    after:bottom-0
    after:scale-x-0
    hover:after:scale-x-100
    after:transition-transform
    after:duration-300
    px-3 py-2
  `;

  const mobileLinkStyles = (path) => `
    block
    text-base font-medium
    ${isActive(path) ? 'text-blue-400' : 'text-white'}
    hover:text-blue-400
    relative
    after:content-['']
    after:absolute
    after:w-full
    after:h-0.5
    after:bg-blue-400
    after:left-0
    after:bottom-0
    after:scale-x-0
    hover:after:scale-x-100
    after:transition-transform
    after:duration-300
    px-3 py-2
  `;

  return (
    <nav className="bg-black w-full px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src={saeLogo} 
              alt="SAE Logo" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/about" className={linkStyles('/about')}>
            About
          </Link>
          <Link to="/team" className={linkStyles('/team')}>
            Team
          </Link>
          <Link to="/project" className={linkStyles('/project')}>
            Project
          </Link>
          <Link to="/resources" className={linkStyles('/resources')}>
            Resources
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/about" className={mobileLinkStyles('/about')}>
            About
          </Link>
          <Link to="/team" className={mobileLinkStyles('/team')}>
            Team
          </Link>
          <Link to="/project" className={mobileLinkStyles('/project')}>
            Project
          </Link>
          <Link to="/resources" className={mobileLinkStyles('/resources')}>
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;