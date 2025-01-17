import React from "react";
import { educationData } from "../ResumeData";

const Education = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        {educationData.map((edu, index) => (
          <li key={index} className="flex">
            <div className="w-1/4 font-bold">{edu.year}</div>
            <div>
              <h3 className="font-semibold">{edu.school}</h3>
              <p>{edu.degree}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
