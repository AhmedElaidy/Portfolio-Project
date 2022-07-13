import "./HeroImgStyles.css";
import React from "react";
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
      <img className="into-img" src={IntroImg} alt='IntroImg'/>
      </div>
      <div className="content">
      <p>Hi,I'M <span> AHMED ELAIDY</span></p>
      <h1>React Developer</h1>
      <div>
      <Link to="/project" className='btn'>PROJECTS</Link>
      <a href="https://drive.google.com/file/d/1WJmTi4ylforsiAM5cLIIc9JCbNUg2-xs/view?usp=sharing" target="_blank" rel="noreferrer" style={{fontWeight: "600" }} className='btn btn-light'>Cv</a>
      </div>
      </div>
    </div>
  );
};

export default HeroImg;
