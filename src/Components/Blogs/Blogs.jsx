import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img src="" alt="" />
      <h2>Roadmap to a Full-Stack Developer</h2>
      <h3>Desc</h3>
      <p>Date</p>

    </div>
  )
}

const Blogs = () => {
  return (
    <div className="blog">
      <a href="">
        <BlogCard />
      </a>
    </div>
  );
};

export default Blogs;
