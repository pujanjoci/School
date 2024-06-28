import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-end md:ml-[10%]">
          <img src={Logo} alt="Logo" className="h-16 md:w-[100px] hover:cursor-not-allowed" />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-green-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation and Social Media in Hamburger Menu */}
        <nav
          className={`${
            isOpen ? 'flex flex-col items-center mt-4' : 'hidden'
          } absolute z-50 top-16 left-0 w-full md:p-0 p-4 bg-white md:shadow-none shadow-lg md:bg-transparent md:static md:flex justify-center space-0 font-serif text-lg md:text-sm md:space-x-8`}>
          <a href="#" className="block py-2 px-2 text-gray-400 hover:text-green-800 md:py-0 md:px-0">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:text-green-800 md:py-0 md:px-0">
            About
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:text-green-800 md:py-0 md:px-0">
            Online Admission
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:text-green-800 md:py-0 md:px-0">
            Gallery
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:text-green-800 md:py-0 md:px-0">
            Global Connection
          </a>
          <a href="#" className="block py-2 px-4 text-gray-400 hover:text-green-800 md:py-0 md:px-0">
            Contact
          </a>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-xl text-green-800 md:hidden">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex justify-center md:justify-start space-x-4 text-green-800 md:mr-[10%]">
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
