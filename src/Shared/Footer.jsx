import logoText from "../assets/blackly.png";
import logo from "../assets/logo.png";

import Container from "./Container";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0c111a] text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-8">
          {/* Logo & About */}
          <div className="w-full md:w-1/3">
            <div className="w-72 flex gap-2 items-center mx-auto md:mx-0">
              <div className='w-14'>
                <img className='w-full' src={logo} alt="" />
              </div>
              <div className='w-52'>
                <img src={logoText} alt="" />
              </div>
            </div>
            <p className="text-gray-400 mt-4">
              Delivering premium app development, web solutions, and digital marketing expertise.
            </p>
          </div>

          {/* Quick Links & Services */}
          <div className="w-full md:w-1/3 flex justify-around md:justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/services" className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500">
                    Services
                  </a>
                </li>
                <li>
                  <Link
                    to="whyUs"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="offers"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500"
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/8801622559988"
                    target="_blank"
                    rel="noopener noreferrer" className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/app-development" className="text-gray-400 hover:text-blue-500 transition">
                    App Development
                  </a>
                </li>
                <li>
                  <a href="/web-development" className="text-gray-400 hover:text-blue-500 transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/app-publishing" className="text-gray-400 hover:text-blue-500 transition">
                    App Publishing
                  </a>
                </li>
                <li>
                  <a href="/app-promotion" className="text-gray-400 hover:text-blue-500 transition">
                    App Promotion
                  </a>
                </li>
                <li>
                  <a href="/lead-generation" className="text-gray-400 hover:text-blue-500 transition">
                    Lead Generation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social Icons */}
          <div className="w-fit mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Contact Us</h3>
            <p className="text-gray-400 ">Email: support@blackly.dev</p>
            <p className="text-gray-400 mt-2">Phone: +123 456 7890</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://wa.me/8801622559988"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-400 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-pink-600 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 pt-6 border-t border-gray-700">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BlacklyDev. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
