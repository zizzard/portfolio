import "./Portfolio.css";

import React, { useState, useEffect } from "react";
import { forceCheck } from "react-lazyload";
import Hr from "../Hr/Hr";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

import projects from "../../files/projects-cs.js";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "PORTFOLIO";
  }, []);

  const [allTag, setAllTag] = useState(true);

  const [albumArt, setAlbumArt] = useState(false); //"Album Art"
  const [backEndDev, setBackEndDev] = useState(false); //"Back-End Development"
  const [branding, setBranding] = useState(false); //"Branding"
  const [socialDesign, setSocialDesign] = useState(false); //"Social Design"

  const [fashionDesign, setFashionDesign] = useState(false); //"Fashion Design"
  const [frontEndDev, setFrontEndDev] = useState(false); //"Front-End Development"
  const [physicalDesign, setPhysicalDesign] = useState(false); //"Physical Design"
  const [posterDesign, setPosterDesign] = useState(false); //"Poster Design"
  const [typography, setTypography] = useState(false); //"Typography"

  const [afterEffects, setAfterEffects] = useState(false); // "After Effects"
  const [illustrator, setIllustrator] = useState(false); //"Illustrator"
  const [photoshop, setPhotoshop] = useState(false); //"Photoshop"

  const [csCourse, setCsCourse] = useState(false); //Computer Science Course
  const [designCourse, setDesignCourse] = useState(false); //Design Course
  const [internship, setInternship] = useState(false); //Internship
  const [projectTag, setProjectTag] = useState(false); //Personal Project

  function clickAlbumArt() {
    setAlbumArt(!albumArt);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickBackEndDev() {
    setBackEndDev(!backEndDev);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickBranding() {
    setBranding(!branding);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickSocialDesign() {
    setSocialDesign(!socialDesign);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickFashionDesign() {
    setFashionDesign(!fashionDesign);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickFrontEndDev() {
    setFrontEndDev(!frontEndDev);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickPhysicalDesign() {
    setPhysicalDesign(!physicalDesign);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickPosterDesign() {
    setPosterDesign(!posterDesign);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickTypography() {
    setTypography(!typography);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickAfterEffects() {
    setAfterEffects(!afterEffects);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickIllustrator() {
    setIllustrator(!illustrator);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickPhotoshop() {
    setPhotoshop(!photoshop);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickCsCourse() {
    setCsCourse(!csCourse);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickDesignCourse() {
    setDesignCourse(!designCourse);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickInternship() {
    setInternship(!internship);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickProjectTag() {
    setProjectTag(!projectTag);
    setAllTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  function clickAll() {
    setAllTag(true);

    setAlbumArt(false);
    setBackEndDev(false);
    setBranding(false);
    setSocialDesign(false);
    setFashionDesign(false);
    setFrontEndDev(false);
    setPhysicalDesign(false);
    setPosterDesign(false);
    setTypography(false);
    setAfterEffects(false);
    setIllustrator(false);
    setPhotoshop(false);
    setCsCourse(false);
    setDesignCourse(false);
    setInternship(false);
    setProjectTag(false);

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  let filtered_projects = projects.filter((project) => {
    return (
      allTag ||
      (albumArt && project.tags.indexOf("Album Art") > -1) ||
      (backEndDev && project.tags.indexOf("Back-End Development") > -1) ||
      (branding && project.tags.indexOf("Branding") > -1) ||
      (socialDesign && project.tags.indexOf("Social Design") > -1) ||
      (fashionDesign && project.tags.indexOf("Fashion Design") > -1) ||
      (frontEndDev && project.tags.indexOf("Front-End Development") > -1) ||
      (physicalDesign && project.tags.indexOf("Physical Design") > -1) ||
      (posterDesign && project.tags.indexOf("Poster Design") > -1) ||
      (typography && project.tags.indexOf("Typography") > -1) ||
      (afterEffects && project.tags.indexOf("After Effects") > -1) ||
      (illustrator && project.tags.indexOf("Illustrator") > -1) ||
      (photoshop && project.tags.indexOf("Photoshop") > -1) ||
      (csCourse && project.tags.indexOf("Computer Science Course") > -1) ||
      (designCourse && project.tags.indexOf("Design Course") > -1) ||
      (internship && project.tags.indexOf("Internship") > -1) ||
      (projectTag && project.tags.indexOf("Personal Project") > -1)
    );
  });
  forceCheck();
  let size = filtered_projects.length;

  return (
    <>
      <div className="title">PORTFOLIO</div>
      <Hr />
      <div className="tags-container">
        <div className="tags">
          <div className={allTag ? "tag-active" : "tag"} onClick={clickAll}>
            All
          </div>
          <div
            className={albumArt ? "tag-active" : "tag"}
            onClick={clickAlbumArt}
          >
            Album Art
          </div>
          <div
            className={backEndDev ? "tag-active" : "tag"}
            onClick={clickBackEndDev}
          >
            Back-End Development
          </div>
          <div
            className={branding ? "tag-active" : "tag"}
            onClick={clickBranding}
          >
            Branding
          </div>
          <div
            className={socialDesign ? "tag-active" : "tag"}
            onClick={clickSocialDesign}
          >
            Social Design
          </div>
          <div
            className={fashionDesign ? "tag-active" : "tag"}
            onClick={clickFashionDesign}
          >
            Fashion Design
          </div>
          <div
            className={frontEndDev ? "tag-active" : "tag"}
            onClick={clickFrontEndDev}
          >
            Front-End Development
          </div>
          <div
            className={physicalDesign ? "tag-active" : "tag"}
            onClick={clickPhysicalDesign}
          >
            Physical Design
          </div>
          <div
            className={posterDesign ? "tag-active" : "tag"}
            onClick={clickPosterDesign}
          >
            Poster Design
          </div>
          <div
            className={typography ? "tag-active" : "tag"}
            onClick={clickTypography}
          >
            Typography
          </div>
          <div
            className={afterEffects ? "tag-active" : "tag"}
            onClick={clickAfterEffects}
          >
            After Effects
          </div>
          <div
            className={illustrator ? "tag-active" : "tag"}
            onClick={clickIllustrator}
          >
            Illustrator
          </div>
          <div
            className={photoshop ? "tag-active" : "tag"}
            onClick={clickPhotoshop}
          >
            Photoshop
          </div>
          <div
            className={csCourse ? "tag-active" : "tag"}
            onClick={clickCsCourse}
          >
            Computer Science Course
          </div>
          <div
            className={designCourse ? "tag-active" : "tag"}
            onClick={clickDesignCourse}
          >
            Design Course
          </div>
          <div
            className={internship ? "tag-active" : "tag"}
            onClick={clickInternship}
          >
            Internship
          </div>
          <div
            className={projectTag ? "tag-active" : "tag"}
            onClick={clickProjectTag}
          >
            Personal Project
          </div>
        </div>
      </div>
      <Hr />
      {filtered_projects.map((project, index) => {
        return (
          <div key={project.id}>
            <PortfolioItem
              id={size - index}
              size={size}
              title={project.title}
              year={project.year}
              body={project.body}
              linkURL={project.linkURL}
              linkText={project.linkText}
              linkType={project.linkType}
              secondaryLinkURL={project.secondaryLinkURL}
              secondaryLinkText={project.secondaryLinkText}
              secondaryLinkType={project.secondaryLinkType}
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
