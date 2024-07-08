import React from 'react';
import { FaTelegramPlane, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Contact = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-semibold text-center text-white">Contact Me</h2>
      <p className="mt-6 text-lg text-center text-neutral-400 max-w-4xl mx-auto leading-relaxed">
        Feel free to reach out to me through any of the platforms below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <div className="mt-12 flex flex-row flex-wrap justify-center space-x-8">
        <a href="mailto:sakethdonepudi08@gmail.com" className="flex items-center space-x-4 text-lg text-neutral-400 hover:text-orange-500 transition-colors">
          <FaEnvelope size={30} />
          <span>Email</span>
        </a>
        <a href="https://t.me/bhoomshanker" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-400 hover:text-orange-500 transition-colors">
          <FaTelegramPlane size={30} />
          <span>Telegram</span>
        </a>
        <a href="https://x.com/bhoomshanker420" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-400 hover:text-orange-500 transition-colors">
          <FaTwitter size={30} />
          <span>Twitter</span>
        </a>
        <a href="https://github.com/sakethdonepudi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-400 hover:text-orange-500 transition-colors">
          <FaGithub size={30} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/saketh-donepudi-b8a634214/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg text-neutral-400 hover:text-orange-500 transition-colors">
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </a>
      </div>
      <ScrollLink to="home" smooth={true} duration={500} className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors cursor-pointer">
        ↑
      </ScrollLink>
    </div>
  );
};

export default Contact;
