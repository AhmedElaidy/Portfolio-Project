import React from "react";
import "./SkillsStyles.css";
import HeroImg2 from "../components/HeroImg2";
import { FaReact, FaGithub, FaCss3 } from "react-icons/fa";
import { SiJavascript, SiSass, SiHtml5 } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-hero">
      <HeroImg2 heading="Skills" />
      <div className="skills-icons">
        <div>
          <FaReact className="skills-s-icon" style={{ color: "#61DBFB" }} />
          <p className="skills-p" style={{ color: "#61DBFB" }}>React</p>
        </div>
        <div>
          <SiJavascript
            size={190}
            className="skills-s-icon"
            style={{ color: "#FFFF33" }}
          />
          <p className="skills-p" style={{ color: "#FFFF33" }}>JavaScript</p>
        </div>
        <div>
          <SiSass className="skills-s-icon" style={{ color: "#CD6799" }} />
          <p className="skills-p" style={{ color: "#CD6799" }}>sass</p>
        </div>
        <div>
          <FaGithub className="skills-s-icon" style={{ color: "white" }} />
          <p className="skills-p" style={{ color: "white" }}>github</p>
        </div>
        <div>
          <SiHtml5 className="skills-s-icon" style={{ color: "#e34c26" }} />
          <p className="skills-p" style={{ color: "#e34c26" }} >html</p>
        </div>
        <div>
          <FaCss3 className="skills-s-icon" style={{color:'#2965f1'}}  />
          <p className="skills-p" style={{color:'#2965f1'}}>css</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
