import React from "react";
import { projectsData } from "../ResumeData";

const Projects = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-6">
        {projectsData.map((project, index) => (
          <li key={index}>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">{project.technologies}</p>
            <p className="mt-2">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
