import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Function to close mobile menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndScrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-end md:ml-[10%]">
          <img src={Logo} alt="Logo" className="h-16 md:w-[70px] hover:cursor-not-allowed" />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-green-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8 font-serif">
          <Link to="/" className="text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Home
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            About
          </Link>
          <Link to="/online-admission" className="text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Online Admission
          </Link>
          <Link to="/gallery" className="text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Gallery
          </Link>
          <Link to="/global-connection" className="text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Global Connection
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <nav ref={navRef} className={`absolute z-50 top-16 left-0 font-serif w-full md:p-0 p-4 bg-white md:shadow-none shadow-lg md:bg-transparent md:static ${isOpen ? 'flex flex-col items-center mt-4' : 'hidden'}`}>
          <Link to="/" className="block py-2 px-2 text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Home
          </Link>
          <Link to="/about" className="block py-2 px-2 text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            About
          </Link>
          <Link to="/online-admission" className="block py-2 px-2 text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Online Admission
          </Link>
          <Link to="/gallery" className="block py-2 px-2 text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Gallery
          </Link>
          <Link to="/global-connection" className="block py-2 px-2 text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Global Connection
          </Link>
          <Link to="/contact" className="block py-2 px-2 text-gray-400 hover:text-green-800" onClick={closeMenuAndScrollToTop}>
            Contact
          </Link>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-4 space-x-4 text-xl text-green-800">
            <a href="#" className="hover:text-indigo-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </nav>

        {/* Social Media Icons for Desktop */}
        <div className="hidden md:flex justify-center space-x-4 text-green-800 md:mr-[10%]">
          <a href="#" className="hover:text-indigo-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
