import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const About = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold text-center">About Me</h2>
      <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
        As a full-stack developer proficient in React, Node.js, and Express.js, I specialize in crafting intuitive UI/UX experiences and scalable APIs. With expertise in Solidity, cryptography, and blockchain technology, I'm dedicated to innovating secure and decentralized solutions. My passion lies in leveraging these skills to drive transformative projects at the forefront of technology.
      </p>
      <div className='mt-12'>
        <h2 className='text-2xl font-semibold text-center mb-4'>Tech Stack</h2>
        <div className='flex justify-center items-center space-x-8'>
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Frontend</h3>
            <div className='flex justify-center space-x-4 text-orange-500'>
              <SiJavascript size={40} />
              <FaReact size={40} />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Backend</h3>
            <div className='flex justify-center space-x-4 text-orange-500'>
              <FaNodeJs size={40} />
              <SiMongodb size={40} />
              <FaDatabase size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
