import React from "react";
import './Projects.css'
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src="" alt="" />
      <h2>Social Media App</h2>
      <h3>Desc</h3>
      <p>Date</p>
    </div>
  )
}


const Projects = () => {
  return <div className="project">
    <Link to="/projects">
      <ProjectCard />
    </Link>
  </div>;
};

export default Projects;
