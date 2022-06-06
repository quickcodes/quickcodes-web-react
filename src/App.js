import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import avtar from "./avtar.jpg";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <img src={avtar} alt="no image"/>
    </div>
  );
}
