import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-gradient-to-r from-neutral-800 to-neutral-900 border-b border-neutral-700/80 shadow-lg">
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img className='h-10 w-10 mr-2' src={logo} alt="Logo" />
            <span className='text-xl tracking-tight font-bold text-white'>Saketh Donepudi</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <Link to="home" smooth={true} duration={500} className='cursor-pointer text-white hover:text-orange-500 transition-colors hover:scale-105'>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className='cursor-pointer text-white hover:text-orange-500 transition-colors hover:scale-105'>About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className='cursor-pointer text-white hover:text-orange-500 transition-colors hover:scale-105'>Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className='cursor-pointer text-white hover:text-orange-500 transition-colors hover:scale-105'>Contact</Link>
            </li>
          </ul>
          {/* <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <Link to="contact" smooth={true} duration={500} className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105'>
              Contact Me
            </Link>
          </div> */}
          <div className='flex lg:hidden'>
            <button onClick={toggleNavbar} className='focus:outline-none'>
              {mobileDrawerOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-neutral-900 bg-opacity-95 p-12 flex flex-col justify-center items-center lg:hidden animate-fade-in">
            <ul className='space-y-6'>
              <li>
                <Link to="home" smooth={true} duration={500} className='cursor-pointer text-white text-lg hover:text-orange-500 transition-colors' onClick={toggleNavbar}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className='cursor-pointer text-white text-lg hover:text-orange-500 transition-colors' onClick={toggleNavbar}>About</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className='cursor-pointer text-white text-lg hover:text-orange-500 transition-colors' onClick={toggleNavbar}>Projects</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className='cursor-pointer text-white text-lg hover:text-orange-500 transition-colors' onClick={toggleNavbar}>Contact</Link>
              </li>
            </ul>
            <div className='mt-8'>
              {/* <Link to="contact" smooth={true} duration={500} className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105' onClick={toggleNavbar}>
                Contact Me
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
