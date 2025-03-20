import React from 'react';
import Container from './Container';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo-removebg-preview.png'
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiMenu } from "react-icons/tfi";
const Navbar = () => {
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    ` hover:text-white text-gray-300 transition-all duration-500 ${isActive ? 'text-white font-bold' : 'font-normal'
                    }`
                }
            >
                Home
            </NavLink>

        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    ` hover:text-white text-gray-300 transition-all duration-500 ${isActive ? 'text-white font-bold' : 'font-normal'
                    }`
                }>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    ` hover:text-white text-gray-300 transition-all duration-500 ${isActive ? 'text-white font-bold' : 'font-normal'
                    }`
                }>
                Why Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    ` hover:text-white text-gray-300 transition-all duration-500 ${isActive ? 'text-white font-bold' : 'font-normal'
                    }`
                }>
                Contact
            </NavLink>
        </li>
    </>
    return (
        <div className='bg-black'>
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <TfiMenu className='text-white text-xl md:text-2xl'/>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className='w-72 md:w-64'><img className='w-full' src={logo} alt="" /></div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal  px-1 text-lg">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className='btn btn-sm md:btn-md rounded-md border-none md:text-lg font-normal bg-white text-black'><BiSolidPhoneCall className='md:text-xl'></BiSolidPhoneCall>Contact Us </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;