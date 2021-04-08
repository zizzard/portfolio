import "./Home.css";

import React, { useEffect } from "react";
import Hr from "../Hr/Hr";
import AboutText from "../AboutText/AboutText";

import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

import img from "../../files/portrait.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "WELCOME HOME";
  }, []);

  return (
    <>
      <div className="home-title-container">
        <div className="title">WELCOME HOME</div>
        <Hr />
      </div>
      <AboutText />
      <Hr />

      <Portfolio />
      <div className="title">ABOUT + CONTACT</div>
      <Hr />
      <div className="flex-split">
        <div className="about-container">
          <div className="home-padding"></div>
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

export default Home;
