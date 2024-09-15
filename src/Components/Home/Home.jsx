import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import Wallpaper from '../../assets/img/portfolio.jpg'
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={Wallpaper} alt="" />
      <h2>Shubham Vishwakarma</h2>
      <p>
        Hi 👋, I’m Shubham, a graduate from at Dwarkadas J. Sanghvi College of
        Enginerring with a major in Electronics Engineering and Minor in <b>Artificical Intelligence and Machine Learning. </b>I’m passionate about <b>Backend, Cloud, Machine Learning</b> and{" "}
        <b>Deep Learning </b>.My core skills are Web and Software developement, Machine Learning and Data Analysis. Along with my Undergrad studies, I work as a <b> Research Intern</b> at IIT Patna and IIIT Naya Raipur.
      </p>
      <ul>
        <a href="sv773460@gmail.com">
          <li>
            <FiMail />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/shubham-vishwakarma-j21/">
          <li>
            <FaLinkedinIn />
          </li>
        </a>
        <a href="https://github.com/ShubhamAXS19">
          <li>
            <BsGithub />
          </li>
        </a>
        <a href="https://prairie-element-2f7.notion.site/Shubham-s-Portfolio-333c8d1f36004fea9ce7e31af9f1db53">
          <li>
            <HiOutlineDocumentText />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Home;
