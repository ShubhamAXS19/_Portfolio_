import React from "react";
import './Projects.css'
import { Project1, Project2, Project3 } from "../ProjectCard/Project";



const Projects = () => {
  return (
    <div className="project">
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  )
};

export default Projects;
