import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss, SiPostgresql, SiPostman, SiExpress } from 'react-icons/si';
import myPic from '../assets/myPic.jpg'; // Update this path to your actual profile picture

const About = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center text-white">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center mt-10">
        <img 
          src={myPic} 
          alt="Profile" 
          className='rounded-full w-48 h-48 object-cover mb-6 lg:mb-0 lg:mr-8 border-4 border-orange-500 shadow-lg' 
        />
        <p className="text-lg text-center lg:text-left text-neutral-400 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
          As a full-stack developer proficient in React, Node.js, and Express.js, I specialize in crafting intuitive UI/UX experiences and scalable APIs. With expertise in Solidity, cryptography, and blockchain technology, I'm dedicated to innovating secure and decentralized solutions. My passion lies in leveraging these skills to drive transformative projects at the forefront of technology.
        </p>
      </div>
      <div className='mt-16'>
        <h2 className='text-3xl font-semibold text-center text-white mb-8'>Tech Stack</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12'>
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4 text-white'>Frontend</h3>
            <div className='flex justify-center space-x-6 text-orange-500'>
              <SiJavascript size={50} className='hover:scale-110 transition-transform' />
              <FaReact size={50} className='hover:scale-110 transition-transform' />
              <SiTailwindcss size={50} className='hover:scale-110 transition-transform' />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4 text-white'>Backend</h3>
            <div className='flex justify-center space-x-6 text-orange-500'>
              <FaNodeJs size={50} className='hover:scale-110 transition-transform' />
              <SiExpress size={50} className='hover:scale-110 transition-transform' />
              <SiMongodb size={50} className='hover:scale-110 transition-transform' />
              <FaDatabase size={50} className='hover:scale-110 transition-transform' />
              <SiPostgresql size={50} className='hover:scale-110 transition-transform' />
              <SiPostman size={50} className='hover:scale-110 transition-transform' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
