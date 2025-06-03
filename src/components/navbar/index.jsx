import React, { useEffect, useState } from "react"
import logo from '../../assets/logo.png'; 

// Mock NavLink and useNavigate for demo purposes
const NavLink = ({ to, children, className, onClick }) => {
    const handleClick = (e) => {
        console.log(`Navigating to: ${to}`);
        if (onClick) onClick();
    };
    
    return (
        <a href={to} onClick={handleClick} className={typeof className === 'function' ? className({ isActive: to === window.location.pathname }) : className}>
            {children}
        </a>
    );
};

const useNavigate = () => {
    return (path) => {
        console.log(`Navigating to: ${path}`);
        window.history.pushState({}, '', path);
    };
};

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, []);
    
    const handleClick = () => {
        if (width <= 882) {
            setClick(!click);
        }
    };
    
    const navigate = useNavigate();
    
    return (
        <div className='flex gap-8 items-center justify-between font-sans sticky top-0 bg-black z-50 px-8 py-4'>
            <div onClick={() => navigate('/')} className="cursor-pointer">
                 <img src={logo} alt='logo' className='logo' />
            </div>
            
            <button 
                className={`${width <= 882 ? 'block' : 'hidden'} absolute w-12 h-12 top-4 right-8 z-50 border-0 text-4xl bg-transparent transition-all duration-500 ease-in-out text-white`}
                onClick={handleClick}
            >
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                <span className="sr-only">{click ? "×" : "☰"}</span>
            </button>
            
            <nav>
                <ul className={`${click && width <= 882 
                    ? 'flex gap-8 fixed inset-0 bg-black flex-col pt-40 px-12 z-40 list-none p-0 m-0 text-center' 
                    : width <= 882 
                        ? 'hidden' 
                        : 'flex gap-8 list-none'
                }`}>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (
                                isActive 
                                    ? 'inline-block no-underline text-base font-bold relative tracking-tight text-orange-500' 
                                    : 'inline-block no-underline text-base font-bold relative tracking-tight text-white/80 hover:text-white'
                            )}
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => (
                                isActive 
                                    ? 'inline-block no-underline text-base font-bold relative tracking-tight text-orange-500' 
                                    : 'inline-block no-underline text-base font-bold relative tracking-tight text-white/80 hover:text-white'
                            )}
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/team" 
                            className={({ isActive }) => (
                                isActive 
                                    ? 'inline-block no-underline text-base font-bold relative tracking-tight text-orange-500' 
                                    : 'inline-block no-underline text-base font-bold relative tracking-tight text-white/80 hover:text-white'
                            )}
                            onClick={handleClick}
                        >
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/project" 
                            className={({ isActive }) => (
                                isActive 
                                    ? 'inline-block no-underline text-base font-bold relative tracking-tight text-orange-500' 
                                    : 'inline-block no-underline text-base font-bold relative tracking-tight text-white/80 hover:text-white'
                            )}
                            onClick={handleClick}
                        >
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/resources" 
                            className={({ isActive }) => (
                                isActive 
                                    ? 'inline-block no-underline text-base font-bold relative tracking-tight text-orange-500' 
                                    : 'inline-block no-underline text-base font-bold relative tracking-tight text-white/80 hover:text-white'
                            )}
                            onClick={handleClick}
                        >
                            Resources
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;