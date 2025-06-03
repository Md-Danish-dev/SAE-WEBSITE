import React, { useEffect, useState } from "react";
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import 'font-awesome/css/font-awesome.min.css';

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
        <div className='navbar'>
            <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <button className='mobile-toggle' onClick={handleClick}><i className={click ? "fa fa-times" : "fa fa-bars"}></i></button>
            <nav>
                <ul className={click ? "mobile" : "not-mobile"}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleClick}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleClick}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/team" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleClick}>
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleClick}>
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleClick}>
                            Resources
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;