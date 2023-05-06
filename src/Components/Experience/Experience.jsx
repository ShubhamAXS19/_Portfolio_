import React from "react";
import './Experience.css'
import { Link } from "react-router-dom";

const ExCard = () => {
  return (
    <div className="ex-card">
      <h1>Front-End Developer</h1>
      <h2>Mayand Info. Tech. Pvt. Ltd.</h2>
      <h3>Aug 2022 - Nov 2022</h3>
    </div>
  )
}
const ExCard1 = () => {
  return (
    <div className="ex-card">
      <h1>Back-End Developer</h1>
      <h2>Exampil Solutions Pvt. Ltd.</h2>
      <h3>April 2023 - Present</h3>
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
      </Link>
    </div>)
};

export default Experience;
