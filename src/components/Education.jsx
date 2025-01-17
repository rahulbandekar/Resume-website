import React from "react";
import { educationData } from "../ResumeData";

const Education = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 pointer">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 component-container">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white/60 shadow-md rounded-lg p-6 flex flex-col justify-between ml-2">
            <div>
              <div className="flex justify-center mb-4">
                <img src={edu.logo} alt={`${edu.school} Logo`} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">{edu.school}</h3>
              <p className="text-gray-700 text-center">{edu.degree}</p>
            </div>
            <div className="text-gray-500 font-bold mt-4 text-center">{edu.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;