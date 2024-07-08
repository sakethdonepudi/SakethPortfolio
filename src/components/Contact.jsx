import React from 'react';
import { FaTelegramPlane, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Contact = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
      <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
        Feel free to reach out to me through any of the platforms below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <div className="mt-12 flex flex-col items-center space-y-6">
        <a href="mailto:sakethdonepudi08@gmail.com" className="flex items-center space-x-4 text-lg text-neutral-700 hover:text-orange-500 transition-colors">
          <FaEnvelope size={24} />
          <span>sakethdonepudi08@gmail.com</span>
        </a>
        <a href="https://t.me/bhoomshanker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-700 hover:text-orange-500 transition-colors">
          <FaTelegramPlane size={24} />
          <span>Telegram</span>
        </a>
        <a href="https://x.com/bhoomshanker420" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-700 hover:text-orange-500 transition-colors">
          <FaTwitter size={24} />
          <span>Twitter</span>
        </a>
        <a href="https://github.com/sakethdonepudi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-700 hover:text-orange-500 transition-colors">
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/saketh-donepudi-b8a634214/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-700 hover:text-orange-500 transition-colors">
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
      </div>
      <ScrollLink to="home" smooth={true} duration={500} className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors cursor-pointer">
        ↑
      </ScrollLink>
    </div>
  );
};

export default Contact;
