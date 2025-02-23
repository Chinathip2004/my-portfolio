"use client";
import React from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = ({ aboutRef, projectsRef, emailRef }) => {
  const handleAboutClick = () => {
    console.log("Scrolling to AboutSection");
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    console.log("Scrolling to ProjectsSection");
    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    console.log("Scrolling to ContactSection");
    if (emailRef?.current) {
      emailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#333232] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <h2 className="text-2xl md:text-5xl text-white font-semibold">Bew</h2>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <NavLink title="About" onClick={handleAboutClick} />
            </li>
            <li>
              <NavLink title="Projects" onClick={handleProjectsClick} />
            </li>
            <li>
              <NavLink title="Contact" onClick={handleContactClick} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
