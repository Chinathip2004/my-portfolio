"use client";
import React, { useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id: 1,
    title: "Face-recognition",
    description: "Deep learning, image processing to detect face for study class",
    image: "/images/face.png",
    tag: ["All","Demo Ai"],
    gitUrl: "https://github.com/Chinathip2004/FaceRecognition_Discord-notification", 
    previewUrl: "https://github.com/Chinathip2004/FaceRecognition_Discord-notification" 
  },
  {
    id: 2,
    title: "To-do list",
    description: "JavaScript Project",
    image: "/images/todolist.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/Chinathip2004/To-do-list", 
    previewUrl: "https://to-do-list-chinathips-projects-b1bddb0e.vercel.app/" 
  },
  {
    id: 3,
    title: "Weather app",
    description: "An app for viewing the weather in other cities.",
    image: "/images/weatherapp.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/Chinathip2004/Weather-App", 
    previewUrl: "https://weather-app-psi-plum.vercel.app/" 
  }
]


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 transition-opacity duration-1000 ease-in opacity-0 animate-fadeIn'
    >My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-3 py-6'>
      <ProjectTag 
      onClick={handleTagChange} 
      name="All" 
      isSelected={tag === "All"}/>
      <ProjectTag 
      onClick={handleTagChange} 
      name="Web" 
      isSelected={tag === "Web"}/>
      <ProjectTag 
      onClick={handleTagChange} 
      name="Demo Ai" 
      isSelected={tag === "Demo Ai"}/>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
    {filteredProjects.map((project) => 
  <div 
    key={project.id} 
    className='transition transform duration-300 hover:scale-105'
  >
    <ProjectCard
      title={project.title} 
      description={project.description} 
      imgUrl={project.image} 
      gitUrl={project.gitUrl} 
      previewUrl={project.previewUrl} 
    />
  </div>
)}
    </div>
      
    </>
  )
}

export default ProjectsSection
