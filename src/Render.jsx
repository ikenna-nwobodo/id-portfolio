import "./Render.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Render() {
  return (
    <div className="render">
      <Nav />
      <Home />
      <About />
      <Techs />
      <Projects />
      <Contact />
      <Footer/> 
    </div>
  );
}

export default Render;
