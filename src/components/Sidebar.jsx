import React from "react";
import image from "../assets/Profile.jpg";
import { personalDetails } from "../ResumeData";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";
import { FaPhoneAlt, FaFlagUsa } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { GiIndiaGate, GiPalmTree } from "react-icons/gi";
import SocialLinks from "./SocialLinks";


const Sidebar = () => {
  return (
    <div className="bg-customDark w-full lg:w-1/3 p-8">
      <div className="text-center">
        <img
          src={image}
          alt="Profile"
          className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
        />
        <h2 className="text-2xl font-bold">{personalDetails.name}</h2>
        <p className="text-gray-600">I’m Rahul Bandekar, a passionate full-stack developer skilled in the MERN stack. I love creating efficient and user-friendly web applications while constantly learning and growing as a developer.</p>

      </div>
      <br />
      <hr />

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2 text-gray-500">Contact</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2">
              <PiEnvelopeSimpleDuotone className="text-2xl" />
            </div>
            <div>
            <span className="text-gray-500">Email</span> <br />
              <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
            </div>
          </li>
          <li className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div>
              <span className="text-gray-600">Phone</span> <br />
              {personalDetails.phone}
            </div>
            </li>
          <li className="flex items-center">
          <div className="inline-block bg-gray-200 rounded-full p-4 mr-2">
              <HiLink className="text-2xl" />
            </div>
            <div>
              <span className="text-gray-600">Website</span> <br /> <a target="_blank" rel="noopener noreferrer" href={personalDetails.socialLinks.find(link => link.label === "Portfolio").link}>Portfolio</a>
            </div>
            </li>
        </ul>
      </div>

      <br />
      <hr />

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2 text-gray-500">Languages</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2 text-orange-500 text-2xl">
              <GiIndiaGate />
            </div>
            Hindi
          </li>
          <li className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2 text-blue-500 text-2xl">
              <FaFlagUsa />
            </div>
            English
          </li>
          <li className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2 text-brown-500 text-2xl">
              <GiPalmTree />
            </div>
            Konkani
          </li>
        </ul>
      </div>

      <br />
      <hr />
      <SocialLinks />
      
    </div>

  );
};

export default Sidebar;
