import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Codenest',
      description:
        'A platform where teachers can create coding tests for students. Built using the MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://codenest.com',
      codeLink: 'https://github.com/codenest',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects.',
      technologies: ['React', 'Tailwind CSS'],
      demoLink: 'https://portfolio-pawan.com',
      codeLink: 'https://github.com/pawan-portfolio',
    },
    {
      title: 'E-Commerce App',
      description: 'A simple e-commerce platform with cart functionality.',
      technologies: ['React', 'Firebase', 'Stripe API'],
      demoLink: 'https://ecommerce-demo.com',
      codeLink: 'https://github.com/ecommerce-app',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <section id="projects" className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
