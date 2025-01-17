import React from "react";
import { skillsData } from "../ResumeData";

const Skills = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skillsData.map((skill, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
