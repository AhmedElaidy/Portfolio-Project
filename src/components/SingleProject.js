import React from "react";
const SingleProject = (data) => {
  const { title, parag, img, demo, github, type , color } = data;
  return (
    <div className="project-card">
      <img src={img} alt={title} cover />
      <h2 className="project-title">{title} <span className={color}>({type})</span></h2>
      <div className="pro-details">
        <p>{parag}</p>
        <div className="pro-btns">
        <a href={demo} className="btn" target="_blank" rel="noreferrer">View</a>
        <a href={github} className="btn" target="_blank" rel="noreferrer">Source</a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
