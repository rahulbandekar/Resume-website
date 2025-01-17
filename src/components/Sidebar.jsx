import React from "react";
import image from "../assets/Profile.jpg";
import { personalDetails } from "../ResumeData";

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
        <p className="text-gray-600">Frontend Developer</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2">Contact</h3>
        <ul className="space-y-2">
          <li>Email: <a href={`mailto:${personalDetails.email}`}>{personalDetails.email}</a></li>
          <li>Phone: {personalDetails.phone}</li>
          <li>Website: <a href={personalDetails.socialLinks.find(link => link.label === "Portfolio").link}>Portfolio</a></li>
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
    </div>
  );
};

export default Sidebar;
