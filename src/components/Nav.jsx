import React, { useEffect, useState } from "react";
import logo from "../images/a.png";
import "./Nav.css";

function Nav() {
  const [width, setWidth] = useState(0);
  const [menu, showMenu] = useState(false);
  const breakpoint = 500;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });
  const displayMenu = () => {
    showMenu(!menu);
  };
  const scrollTo = async (section_id) => {
    const sect = await document.getElementById(section_id);
    sect?.scrollIntoView({ behavior: "smooth" });
    showMenu(false);
  };

  return (
    <div className="nav">
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="logo" height={width > breakpoint ? 45 : 30} />
        </div>
        {width < breakpoint ? (
          <div className="menubar">
            <p onClick={displayMenu}>\Menu</p>
            {menu && (
              <div className="menulinks">
                <p onClick={() => scrollTo("about_sect")}>\About Me</p>
                <p onClick={() => scrollTo("tech_sect")}>\Technologies</p>
                <p onClick={() => scrollTo("project_sect")}>\Projects</p>
                <p onClick={() => scrollTo("contact_sect")}>\Contact Me</p>
              </div>
            )}
          </div>
        ) : (
          <div className="nav-links">
            <p onClick={() => scrollTo("about_sect")}>\About Me</p>
            <p onClick={() => scrollTo("tech_sect")}>\Technologies</p>
            <p onClick={() => scrollTo("project_sect")}>\Projects</p>
            <p onClick={() => scrollTo("contact_sect")}>\Contact Me</p>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Nav;
