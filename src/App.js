import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Github from "./components/Github";
import Minimal from "./components/Minimal";
import BadWords from "./components/utils/BadWords";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="blogs" element={ <Blog/> } />
        <Route path="github" element={ <Github/> } />
        <Route path="quickcodes-web-react" element={ <Home/> } />
        <Route path="minimal" element={ <Minimal/> } />
        <Route path="bad-words" element={ <BadWords/> } />
        <Route path="projects" element={ <Projects/> } />
        {/* <Route path="github" element={ <Github/> } /> */}
        {/* <Route path="github" element={ <Github/> } /> */}
      </Routes>
    </div>
  );
}
