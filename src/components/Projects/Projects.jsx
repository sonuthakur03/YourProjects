import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "./projectslList";

const Projects = () => {
  return (
    <div className="bg-gray-600 min-h-screen ">
      {/* Projects Section */}
      <section id="projects" className="py-4 bg-gray-600">
        <div className="container mx-auto p-8 w-2/3 bg-gray-200 rounded-xl">
          <h2 className="text-5xl font-bold mb-8 text-center text-gray-900">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-6">
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
