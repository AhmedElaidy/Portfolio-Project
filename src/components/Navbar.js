import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
        <a
        href="https://www.linkedin.com/in/ahmedelaidy/"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#61DBFB", fontWeight: "700" }}
        >
        LinkedIn
        </a>
        </li>
        <li>
        <a href="https://drive.google.com/file/d/1028s-0lNijsxYNgW-s_Dd3tds7jooqud/view?usp=sharing" target="_blank" rel="noreferrer"  style={{fontWeight: "700" }}>Cv</a>
        </li>
        <li>
          <Link to="/contact" style={{fontWeight: "600" }}>Contact</Link>
        </li>
        </ul>
        <div className="hamburger" onClick={clickHandler}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
