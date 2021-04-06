import "./About.css";

import React, { useEffect } from "react";
import Hr from "../Hr/Hr";
import AboutText from "../AboutText/AboutText";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

import img from "../../files/portrait.png";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ABOUT + CONTACT";
  }, []);

  return (
    <>
      <div className="title">ABOUT + CONTACT</div>
      <Hr />
      <AboutText />
      <div className="flex-split">
        <div className="about-container">
          <Hr />
          <div className="contact-container">
            <Contact />
          </div>
          <Hr />
          <div className="experience-container">
            <Experience />
          </div>
          <Hr />
          <div className="education-container">
            <Education />
          </div>
        </div>
        <div className="image-container">
          <img className="profile-image" src={img} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default About;
