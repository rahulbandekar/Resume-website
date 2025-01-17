import React from "react";
import image from "../assets/Profile.jpg";
import { personalDetails } from "../ResumeData";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";


const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-full lg:w-1/3 p-8">
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
        <h3 className="text-lg font-bold mb-2">Contact</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <div className="inline-block bg-gray-200 rounded-full p-4 mr-2">
              <PiEnvelopeSimpleDuotone />
            </div>
            <div>
              Email <br />
              <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a>
            </div>
          </li>
          <li>Phone: {personalDetails.phone}</li>
          <li>Website: <a target="_blank" href={personalDetails.socialLinks.find(link => link.label === "Portfolio").link}>Portfolio</a></li>
        </ul>
      </div>

      <br />
      <hr />


      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2">Languages</h3>
        <ul className="space-y-1">
          <li>Hindi </li>
          <li>English </li>
          <li>Konkani </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />

    </div>

  );
};

export default Sidebar;
