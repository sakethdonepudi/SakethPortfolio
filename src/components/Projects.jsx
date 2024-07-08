import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiFlask, SiPostgresql, SiExpress } from 'react-icons/si';

const Projects = () => {
  const projectData = [
    {
      title: 'Project One',
      image: 'path/to/project1.jpg', // Update this path to your project image
      description: 'This is a brief description of Project One, highlighting its features and technologies used.',
      tech: [<FaReact size={24} />, <FaNodeJs size={24} />, <SiExpress size={24} />],
      githubLink: 'https://github.com/yourprofile/project1',
      liveDemo: 'https://yourproject1.demo',
    },
    {
      title: 'Project Two',
      image: 'path/to/project2.jpg', // Update this path to your project image
      description: 'This is a brief description of Project Two, highlighting its features and technologies used.',
      tech: [<SiJavascript size={24} />, <FaHtml5 size={24} />, <FaCss3Alt size={24} />],
      githubLink: 'https://github.com/yourprofile/project2',
      liveDemo: 'https://yourproject2.demo',
    },
    {
      title: 'Project Three',
      image: 'path/to/project3.jpg', // Update this path to your project image
      description: 'This is a brief description of Project Three, highlighting its features and technologies used.',
      tech: [<FaPython size={24} />, <SiFlask size={24} />, <SiPostgresql size={24} />],
      githubLink: 'https://github.com/yourprofile/project3',
      liveDemo: 'https://yourproject3.demo',
    },
  ];

  return (
    <div className="my-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center">My Projects</h2>
      <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
        Below are some of the projects I have worked on. Click on the buttons to view the source code or the live demo.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={index} className="bg-black shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
              <p className="text-neutral-600 text-center">{project.description}</p>
              <div className="flex justify-center space-x-4 mt-4 text-orange-500">
                {project.tech.map((icon, idx) => (
                  <span key={idx}>{icon}</span>
                ))}
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-shadow"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
