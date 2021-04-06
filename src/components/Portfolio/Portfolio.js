import "./Portfolio.css";

import React, { useEffect } from "react";
import Hr from "../Hr/Hr";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import projects from "../../files/projects.js";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "PORTFOLIO";
  }, []);

  let size = projects.length;

  return (
    <>
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
    </>
  );
}

export default Portfolio;
