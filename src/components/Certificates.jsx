import React from "react";
import { certificatesData } from "../ResumeData";

const Certificates = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <ul className="list-disc ml-6 space-y-2">
        {certificatesData.map((certificate, index) => (
          <li key={index}>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {certificate.name} - {certificate.provider}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
