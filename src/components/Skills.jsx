import React from "react";
import { skillsData } from "../ResumeData";

const Skills = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 pointer">Technical Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 component-container">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-gray-100 p-6 rounded flex flex-col items-center justify-center glassmorph flex-grow ml-2">
            <div className="text-6xl mb-4">
              {skill.logo}
            </div>
            <span className="text-gray-700 text-center">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;