import "./CourseworkItem.css";

import React from "react";

function CourseworkItem({ title, semester }) {
  let course = title.split(":")[0];
  let name = title.split(":")[1];

  return (
    <>
      <div className="coursework-item-container">
        <div className="coursework-left">
          <div className="coursework-id">{course}</div>
          <div>{name}</div>
        </div>
        <div className="coursework-right">{semester}</div>
      </div>
    </>
  );
}

export default CourseworkItem;
