import { useState, useEffect } from "react";
import personbg from "../images/person-image.png";
import "./Home.css";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1050;
  
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="home-con">
      <div className="home">
        <div className="home-text">
          <h1 className="name">Matthew Abiodun</h1>
          <div className="titles">
            <span className="">Web Developer</span>
            <span className="">Software Developer</span>
            <span className="">Network Administrator</span>
          </div>
        </div>
        <div className="home-img">
          <img
            src={personbg}
            alt="bg"
            // width={500}
            height={width > breakpoint ? 500 : 250}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
