import React, { useState } from "react";
import logo from '../../assets/logo.png'; 

// Mock NavLink for demo
const NavLink = ({ to, children, className, onClick }) => {
    const isActive = to === window.location.pathname;
    const computedClass = typeof className === 'function' ? className({ isActive }) : className;
    return (
        <a href={to} onClick={onClick} className={computedClass}>
            {children}
        </a>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinkStyles = ({ isActive }) => 
        `text-xl md:text-base font-bold transition-colors duration-200 ${
            isActive ? 'text-orange-500' : 'text-white/80 hover:text-white'
        }`;

    return (
        <nav className='flex items-center justify-between sticky top-0 bg-black z-50 px-6 py-4 md:px-12'>
            {/* Logo - Increased size for desktop */}
            <div className="cursor-pointer z-50" onClick={() => window.location.href = '/'}>
                <img 
                    src={logo} 
                    alt='logo' 
                    className='h-10 w-auto md:h-16 transition-all duration-300' 
                />
            </div>

            {/* Hamburger Button - Using SVG for guaranteed visibility */}
            <button 
                className='md:hidden z-50 text-white focus:outline-none'
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>

            {/* Navigation Links */}
            <ul className={`
                /* Mobile: Fullscreen Overlay */
                fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out z-40
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
                
                /* Desktop: Standard Row */
                md:static md:flex md:flex-row md:bg-transparent md:gap-8 md:p-0
            `}>
                <li><NavLink to="/" className={navLinkStyles} onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/about" className={navLinkStyles} onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="/team" className={navLinkStyles} onClick={closeMenu}>Team</NavLink></li>
                <li><NavLink to="/project" className={navLinkStyles} onClick={closeMenu}>Project</NavLink></li>
                <li><NavLink to="/resources" className={navLinkStyles} onClick={closeMenu}>Resources</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;