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
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img className='h-10 w-10 mr-2' src={logo} alt="Logo" />
            <span className='text-xl tracking-tight font-bold'>Saketh Donepudi</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <Link to="home" smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-colors'>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-colors'>About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-colors'>Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className='cursor-pointer hover:text-orange-500 transition-colors'>Contact</Link>
            </li>
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <Link to="contact" smooth={true} duration={500} className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-3 rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer'>
              Contact Me
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button onClick={toggleNavbar} className='focus:outline-none'>
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-neutral-900 bg-opacity-95 p-12 flex flex-col justify-center items-center lg:hidden">
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
              <Link to="contact" smooth={true} duration={500} className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer' onClick={toggleNavbar}>
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
