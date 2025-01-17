import React from "react";
import { personalDetails } from "../ResumeData";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const SocialLinks = () => {
  const getIcon = (label) => {
    switch (label) {
      case "LinkedIn":
        return <FaLinkedin className="text-blue-700 text-2xl" />;
      case "GitHub":
        return <FaGithub className="text-gray-800 text-2xl" />;
      case "Portfolio":
        return <FaGlobe className="text-black-500/20 text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2 text-gray-500">Social Links</h3>
      <ul className="space-y-2">
        {personalDetails.socialLinks.map((link, index) => (
          <li key={index} className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2">
              {getIcon(link.label)}
            </div>
            <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;