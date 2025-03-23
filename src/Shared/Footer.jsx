import React from "react";
import logo from "../assets/logo2.png";
import Container from "./Container";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-8">
          {/* Logo & About */}
          <div className="w-full md:w-1/3">
            <div className="w-72 mx-auto md:mx-0 -mt-4">
              <img className="w-full" src={logo} alt="BlacklyDev Logo" />
            </div>
            <p className="text-gray-400 mt-2">
              Delivering premium app development, web solutions, and digital marketing expertise.
            </p>
          </div>

          {/* Quick Links & Services */}
          <div className="w-full md:w-1/3 flex justify-around md:justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/home" className="text-gray-400 hover:text-blue-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-blue-500 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-blue-500 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-400 hover:text-blue-500 transition">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-blue-500 transition">
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
            <p className="text-gray-400 text-sm">Email: support@blackly.dev</p>
            <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
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
