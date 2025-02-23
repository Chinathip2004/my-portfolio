"use client";
import React, { useRef } from "react";
import HeroSection from "./componants/HeroSection";
import Navbar from "./componants/Navbar";
import AboutSection from "./componants/AboutSection";
import ProjectsSection from "./componants/ProjectsSection";
import EmailSection from "./componants/EmailSection";
import Footer from "./componants/Footer";

export default function Home() {
  const emailRef = useRef(null); // ✅ ใช้ useRef() อย่างถูกต้อง

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection emailRef={emailRef} /> {/* ✅ ส่ง ref ไปให้ HeroSection */}
        <AboutSection />
        <ProjectsSection />
        <div ref={emailRef}> {/* ✅ ใช้ ref ตรง EmailSection */}
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
