import React from "react";
import './Experience.css'
import { Link } from "react-router-dom";

const ExCard = () => {
  return (
    <div className="ex-card">
      <h1>Back-End Developer</h1>
      <h2>Exampil Solutions Pvt. Ltd.</h2>
      <h3>April 2023 - July 2023</h3>
    </div>
  )
}
const ExCard1 = () => {
  return (
    <div className="ex-card">
      <h1>Research Intern</h1>
      <h2>IIT Patna</h2>
      <h3>Jan 2024 - Present</h3>
    </div>
  )
}
const ExCard2 = () => {
  return (
    <div className="ex-card">
      <h1>Research Intern</h1>
      <h2>SimPPL</h2>
      <h3>Jan 2024 - Present</h3>
    </div>
  )
}


const Experience = () => {
  return (
    <div className="experience">
      {/* <h1>Experiences</h1> */}
      <Link to="/experience" >
        <ExCard />
        <ExCard1 />
        <ExCard2 />
      </Link>
    </div>)
};

export default Experience;
