import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 text-white shadow-3xl rounded-lg overflow-hidden w-full  border-black border-2 hover:scale-110 delay-100">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <a
          href={project.link}
          className="text-yellow-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
