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
        Hi 👋, I’m Shubham, a student at Dwarkadas J. Sanghvi College of
        Enginerring. I’m passionate about <b>Backend, Cloud, Machine Learning</b> and{" "}
        <b>Deep Learning </b>. Along with my Undergrad studies, I work as a <b> Backend Developer</b> at Exampil Pvt. Ltd. an Edtech startup based in Mumbai, India.
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
        <a href="https://docs.google.com/document/d/1uRgYagYaVLWQD7jXA9Tp65dhIMGdxccj/edit?usp=sharing&ouid=103021001565301164077&rtpof=true&sd=true">
          <li>
            <HiOutlineDocumentText />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Home;
