import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss, SiPostgresql, SiPostman, SiExpress } from 'react-icons/si';
import myPic from '../assets/myPic.jpg'; // Update this path to your actual profile picture

const About = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center mt-6">
        <img src={myPic} alt="Profile" className='rounded-full w-48 h-48 object-cover mb-4 lg:mb-0 lg:mr-8' />
        <p className="text-lg text-center lg:text-left text-neutral-500 max-w-4xl mx-auto lg:mx-0">
          As a full-stack developer proficient in React, Node.js, and Express.js, I specialize in crafting intuitive UI/UX experiences and scalable APIs. With expertise in Solidity, cryptography, and blockchain technology, I'm dedicated to innovating secure and decentralized solutions. My passion lies in leveraging these skills to drive transformative projects at the forefront of technology.
        </p>
      </div>
      <div className='mt-12'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Tech Stack</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center space-y-9 lg:space-y-0 lg:space-x-8'>
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Frontend</h3>
            <div className='flex justify-center space-x-4 text-orange-500'>
              <SiJavascript size={40} />
              <FaReact size={40} />
              <SiTailwindcss size={40} />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Backend</h3>
            <div className='flex justify-center space-x-4 text-orange-500'>
              <FaNodeJs size={40} />
              <SiExpress size={40} />
              <SiMongodb size={40} />
              <FaDatabase size={40} />
              <SiPostgresql size={40} />
              <SiPostman size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
