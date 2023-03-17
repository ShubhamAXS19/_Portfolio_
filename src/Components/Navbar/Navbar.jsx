import React, { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross2 } from 'react-icons/rx'
import { Link } from "react-router-dom";
const Navbar = () => {

  const [sidebarActive, setSidebarActive] = useState(false)

  return (
    <>
      {/* desktop */}
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

      {/* mobile */}
      <div className="navbar-mobile">
        <div className="nav">
          <div className="nav--name">
            <Link to="/">Shubham Vishwakarma</Link>
          </div>
          <RxHamburgerMenu onClick={() =>
            setSidebarActive(true)} />
        </div>


        {sidebarActive &&
          (

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
          )}
      </div>

    </>
  );
};

export default Navbar;
