import React from "react";
import './App.css'
import { Routes, Route } from "react-router";
import Homepage from "./Pages/Homepage";
import Projectspage from "./Pages/Projectspage";
import Experiencepage from "./Pages/Experiencepage";
import Blogspage from "./Pages/Blogspage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogspage />} />
        <Route path="/projects" element={<Projectspage />} />
        <Route path="/experience" element={<Experiencepage />} />
      </Routes>
    </div>
  );
}

export default App;
