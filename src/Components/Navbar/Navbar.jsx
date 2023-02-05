import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav--name">
        <Link to="/">Shubham Vishwakarma</Link>
      </div>
      <ul className="nav-navi">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blogs">
          {" "}
          <li>Blog</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/experience">
          <li>Experience</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
