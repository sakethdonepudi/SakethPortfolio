import React, { useState, useEffect } from 'react';
import { FaFileDownload, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../assets/profilePic.jpg'; // Update this path to your actual profile picture

const Home = () => {
  const titles = ["Full Stack Developer", "Software Developer", "Blockchain Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <img 
        src={profilePic} 
        alt="Profile" 
        className='rounded-full w-48 h-48 object-cover mb-4 border-4 border-orange-500 shadow-lg' 
      />
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white'>
        Hola👋, I'm Saketh Donepudi,
      </h1>
      <span className='text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text mt-4 transition-colors'>
        {titles[currentTitleIndex]}
      </span>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Passionate about building end-to-end solutions with modern technologies. 
        I specialize in creating dynamic and responsive web applications.
      </p>
      <div className='flex justify-center my-10'>
        <a 
          href="https://drive.google.com/file/d/1eHh-IbMWIDgh4uZTLXIKdL0PfTY5IIs5/view?usp=drivesdk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-4 mx-3 rounded-md shadow-lg hover:shadow-xl transition-shadow flex items-center'>
          <FaFileDownload className='mr-2' /> Resume
        </a>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          className='py-3 px-4 mx-5 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors flex items-center cursor-pointer'>
          <FaEnvelope className='mr-2' /> Contact Me
        </Link>
      </div>
      <div className='flex space-x-6 mt-6'>
        <a 
          href="https://www.linkedin.com/in/saketh-donepudi-b8a634214/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-orange-500 hover:text-orange-700 transition-colors'>
          <FaLinkedin size={32} />
        </a>
        <a 
          href="https://github.com/sakethdonepudi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-orange-500 hover:text-orange-700 transition-colors'>
          <FaGithub size={32} />
        </a>
      </div>
    </div>
  );
}

export default Home;
