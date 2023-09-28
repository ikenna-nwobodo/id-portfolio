import "./Projects.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import projects from "../projectlist";

function Projects() {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 150);
  }, []);

  const [screenwidth, setscreenWidth] = useState(0);
  const breakpoint = 500;

  useEffect(() => {
    const handleWindowResize = () => setscreenWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });
  return (
    <div className="projects" id="project_sect">
      <h1 className="title">\Projects</h1>
      <div className="proj">
        <motion.div className="project-carousel">
          <motion.div className="inner-carousel" ref={carousel}>
            {projects.map((project) => {
              return (
                <motion.div className="item">
                  <h2>{project.name}</h2>
                  <img
                    src={project.image}
                    alt=""
                    height={width < breakpoint ? 220 : 150}
                  />
                  <div className="proj-btns">
                    <button>Live Demo</button>
                    <button>Github Repo</button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
