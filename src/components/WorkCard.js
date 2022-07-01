import "./WorkCardStyles.css";
import React from "react";
import data from "../data";
import SingleProject from "./SingleProject";
const WorkCard = () => {
  return (
    <div className="Work-container">
      <div className="project-container">
        {data.map((item) => {
          return <SingleProject key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default WorkCard;
