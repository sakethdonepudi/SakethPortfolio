import React, { useState, useEffect } from 'react';
import { FaFileDownload, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa';
import { SiMongodb, SiGraphql, SiDocker, SiJavascript } from 'react-icons/si';

const HeroSection = () => {
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
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        Hello! I'm Saketh Donepudi,
      </h1>
      <span className='text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text mt-4'>
        {titles[currentTitleIndex]}
      </span>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Passionate about building end-to-end solutions with modern technologies. 
        I specialize in creating dynamic and responsive web applications.
      </p>
      <div className='mt-8 text-center'>
        <div className='flex justify-center mt-4 space-x-4 text-orange-500'>
          <SiJavascript size={40} />
          <FaReact size={40} />
          <FaNodeJs size={40} />
          <SiMongodb size={40} />
          <FaDatabase size={40} />
          <SiGraphql size={40} />
          <SiDocker size={40} />
          <FaAws size={40} />
        </div>
      </div>
      <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-4 mx-3 rounded-md shadow-lg hover:shadow-xl transition-shadow flex items-center'>
          <FaFileDownload className='mr-2' /> Resume
        </a>
        <a href="#" className='py-3 px-4 mx-5 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors flex items-center'>
          <FaEnvelope className='mr-2' /> Contact Me
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
