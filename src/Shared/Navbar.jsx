import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/logo2.png'
import { TfiMenu } from "react-icons/tfi";
import Container from './Container';
import { FaPhoneAlt } from 'react-icons/fa';
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
        <div className='fixed top-0 bg-black/10 backdrop-blur-md z-50 w-full'>
            <Container>
                <div className="navbar p-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden mr-2">
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
                    <button className="bg-white text-black font-semibold py-2 px-4 rounded-full flex items-center">
                                <FaPhoneAlt className="mr-2" />
                                Contact Us
                            </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;