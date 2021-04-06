import "./ExperienceItem.css";

import React from "react";

function ExperienceItem({ employer, location, title, dates, body }) {
  return (
    <div className="experience-item-container">
      <div className="experience-title">
        <div className="experience-title-large">
          <b>{employer}</b>
        </div>

        <div className="experience-title-small">{dates}</div>
      </div>
      <div className="experience-subtitle">
        <div className="experience-title">{title}</div>
        <div className="experience-location">
          <div>{location}</div>
        </div>
      </div>
      <div className="experience-body">{body}</div>
    </div>
  );
}

export default ExperienceItem;
