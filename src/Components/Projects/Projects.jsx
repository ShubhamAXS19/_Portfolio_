import React from "react";
import './Projects.css'
import { Project1, Project2, Project3, Project4 } from "../ProjectCard/Project";



const Projects = () => {
  return (
    <div className="project">
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
    </div>
  )
};

export default Projects;
