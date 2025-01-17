import React from "react";
import { certificatesData } from "../ResumeData";

const Certificates = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 pointer">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 component-container">
        {certificatesData.map((certificate, index) => (
          <div key={index} className="bg-white/60 shadow-lg rounded-lg p-6 flex flex-col justify-between ml-2">
            <div>
              <h3 className="text-xl font-semibold mb-2">{certificate.name}</h3>
              <p className="text-gray-600 mb-4">{certificate.provider}</p>
            </div>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;