import "./Portfolio.css";

import React from "react";
import Hr from "../Hr/Hr";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import projects from "../../files/projects.js";

function Portfolio() {
  let size = projects.length;

  return (
    <>
      <div className="body">
        <div className="title">PORTFOLIO</div>
        <Hr />
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <PortfolioItem
                id={project.id + 1}
                size={size}
                title={project.title}
                year={project.year}
                body={project.body}
                linkURL={project.linkURL}
                linkText={project.linkText}
                category={project.category}
                tags={project.tags}
                images={project.images}
              />
              <Hr />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Portfolio;
