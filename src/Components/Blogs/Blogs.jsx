import React from "react";
import "./Blogs.css";
import Roadmap from '../../assets/img/download.jpeg'

const BlogCard = () => {
  return (
    <a href="">
      <div className="blog-card">
        <img src={Roadmap} alt="" />
        <h2>Roadmap to a Full-Stack Developer</h2>
        <h3>Desc</h3>

      </div>
    </a>
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
