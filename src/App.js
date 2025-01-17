import React from "react";
import Sidebar from "./components/Sidebar";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-grow bg-[#e4ecec] p-8">
        <Education />
        <Projects />
        <Skills />
        <Certificates />
      </div>
    </div>
  );
};

export default App;
