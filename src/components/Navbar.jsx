import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants/index';
import { Menu, X } from 'lucide-react';

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
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className='hover:text-orange-500 transition-colors'>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-3 rounded-md shadow-lg hover:shadow-xl transition-shadow'>
              Contact Me
            </a>
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
              {navItems.map((item, index) => (
                <li key={index} className='py-3'>
                  <a href={item.href} className='text-white text-lg hover:text-orange-500 transition-colors'>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='mt-8'>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-shadow'>
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
