import "./Header.css";

import React, { useState, useEffect, useLayoutEffect } from "react";
import Hr from "../Hr/Hr";
import { NavLink } from "react-router-dom";
import Resume from "../../files/resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
const hamburger = <FontAwesomeIcon icon={faBars} />;
const home = <FontAwesomeIcon icon={faHome} />;

function Header() {
  const [date, setDate] = useState(
    new Date().toUTCString().split(" ").slice(1).join(" ").toUpperCase()
  );

  function updateDate() {
    setDate(
      new Date().toUTCString().split(" ").slice(1).join(" ").toUpperCase()
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      updateDate();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  function clickDisplayDropdown() {
    setDisplayDropdown(!displayDropdown);
    console.log(displayDropdown);
  }

  function clickHome() {
    window.location.hash = "#/home";
  }

  let hamburgerDiv = (
    <div className="hamburger-icon" onClick={clickDisplayDropdown}>
      {hamburger}
    </div>
  );

  let homeDiv = (
    <div className="hamburger-icon" onClick={clickHome}>
      {home}
    </div>
  );

  let displayHamburger = true;
  let displayClass = "upper";
  let headerTitleClass = "header-title-container";

  if (
    width <= 1000 &&
    (window.location.hash === "#/portfolio" ||
      window.location.hash === "#/about")
  ) {
    displayHamburger = false;
    headerTitleClass = "header-title-container hidden";
  } else {
    headerTitleClass = "header-title-container";
  }

  if (width <= 1000 && !displayDropdown) {
    displayClass = "upper hidden";
  }

  return (
    <div className="header">
      <div className="header-container">
        {displayHamburger ? hamburgerDiv : homeDiv}
        <div className={headerTitleClass}>
          <NavLink to="/" className="name">
            ZACH IZZARD
          </NavLink>
          <Hr />
        </div>
        <div className="header-flex-split">
          <div className={displayClass}>
            <NavLink to="/home" className="home" activeClassName="active-link">
              HOME
            </NavLink>
            <NavLink
              to="/portfolio"
              className="portfolio"
              activeClassName="active-link"
            >
              PORTFOLIO
            </NavLink>
            <NavLink
              to="/about"
              className="about"
              activeClassName="active-link"
            >
              ABOUT + CONTACT
            </NavLink>
            <a className="about" href={Resume} target="_blank" rel="noreferrer">
              RESUME
            </a>
          </div>
          <div className="lower">
            <div className="time">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
