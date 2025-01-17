import React from "react";
import { projectsData } from "../ResumeData";
import "../App.css";

const Projects = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 pointer">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 component-container">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white/60 shadow-lg rounded-lg overflow-hidden ml-2">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <div className="flex items-center mb-4">
                {project.logos.map((Logo, idx) => (
                  <div key={idx} className="mr-2 text-2xl">
                    {Logo}
                  </div>
                ))}
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;