import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';

// Define the function within the Footer component or ensure it is passed as a prop
const closeMenuAndScrollToTop = () => {
  // Add your menu closing logic here if needed
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 md:px-[5%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left mb-8">
          <div className="md:col-span-2 flex flex-col items-center md:items-start md:pl-32 pt-2">
            <h2 className="text-2xl font-serif text-gray-800 mb-2">St. Joseph's English Academy</h2>
            <p className='text-gray-500 text-sm'>Budanilkantha-08, Golfutar</p>
            <p className='text-gray-500 text-sm'>Kathmandu</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-serif mb-2 text-gray-800">Opening Hours</h2>
            <p className='text-gray-500 text-sm'>Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p className='text-gray-500 text-sm'>Sat - Sun: Closed</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-serif mb-2 text-gray-800">Contact Us</h2>
            <p className='text-gray-500 text-sm'>Phone: (123) 456-7890</p>
            <p className='text-gray-500 text-sm'>Email: info@schoolname.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="hidden md:flex flex-col items-center md:items-center pt-2 hover:cursor-pointer">
            <a href="/#">
              <img src={Logo} alt="Logo" className="h-20 w-auto" />
            </a>
          </div>
          <nav className="flex flex-col items-center md:mt-8 md:items-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <ul className="space-y-1">
                <li> 
                  <Link to="/" className="hover:text-yellow-400 text-gray-700" onClick={closeMenuAndScrollToTop}>
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1">
                <li> 
                  <Link to="/about" className="hover:text-yellow-400 text-gray-700" onClick={closeMenuAndScrollToTop}>
                    About
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1">
                <li> 
                  <Link to="/gallery" className="hover:text-yellow-400 text-gray-700" onClick={closeMenuAndScrollToTop}>
                    Gallery
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1">
                <li> 
                  <Link to="/contact" className="hover:text-yellow-400 text-gray-700" onClick={closeMenuAndScrollToTop}>
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1">
                <li> 
                  <Link to="/online-admission" className="hover:text-yellow-400 text-gray-700" onClick={closeMenuAndScrollToTop}>
                    Academy
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex flex-col items-center md:items-center pt-4">
            <div className="flex space-x-8 mt-2 text-2xl md:text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaInstagram /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 text-gray-700"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-800">
          <p>St. Joseph's English Academy &copy; 2024 - Friends and Co.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
