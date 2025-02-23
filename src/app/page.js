"use client";
import React, { useRef } from "react";
import HeroSection from "./componants/HeroSection";
import Navbar from "./componants/Navbar";
import AboutSection from "./componants/AboutSection";
import ProjectsSection from "./componants/ProjectsSection";
import EmailSection from "./componants/EmailSection";
import Footer from "./componants/Footer";

export default function Home() {
  // สร้าง ref สำหรับแต่ละ section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* ส่ง ref ไปยัง Navbar */}
      <Navbar aboutRef={aboutRef} projectsRef={projectsRef} emailRef={emailRef} />
      
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection emailRef={emailRef} /> {/* ส่ง ref ไปให้ HeroSection */}
        {/* ส่ง ref ไปยัง AboutSection และ ProjectsSection */}
        <div ref={aboutRef}>
        <AboutSection  />
        </div>
        <div ref={projectsRef}>
        <ProjectsSection  />
        </div>
        <div ref={emailRef}>
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
