import "./Education.css";

import React from "react";
import Coursework from "../Coursework/Coursework";
import Organization from "../Organization/Organization";

function Education() {
  return (
    <>
      <div className="education-title-container">
        <div className="education-title-row">
          <div className="education-title-large">
            <b>UNIVERSITY OF SOUTHERN CALIFORNIA</b>
          </div>
        </div>
        <div className="education-title-row">
          <div className="education-title">
            Bachelor of Science in Computer Science
          </div>
          <div className="education-title">Aug 2017 to May 2021</div>
        </div>
        <div className="education-title-row">
          <div className="education-title">Communication Design Minor</div>
          <div className="education-title">
            GPA: 3.97, <i>summa cum laude</i>
          </div>
        </div>
      </div>
      <div className="coursework-container">
        <div className="coursework-title-row">
          <div className="coursework-title-left">
            <b>RELEVANT COURSEWORK</b>
          </div>
          <div className="coursework-title-right">
            <b>SEMESTER</b>
          </div>
        </div>
        <Coursework />
      </div>

      <div className="organization-container">
        <div className="organization-title-row">
          <div className="organization-title-left">
            <b>STUDENT INVOLVEMENT</b>
          </div>
          <div className="organization-title-right">
            <b>TIME PERIOD</b>
          </div>
        </div>
        <Organization />
      </div>
    </>
  );
}

export default Education;
