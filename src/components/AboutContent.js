import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import Skills from "./Skills";
const AboutContent = () => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            I'm a react front-end developer. i create responsive secure websites
            for my clients and i search for a job as a front-end developer.
          </p>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="true" />
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </React.Fragment>
  );
};

export default AboutContent;
