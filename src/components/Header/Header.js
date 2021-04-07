import "./Header.css";

import React, { useState, useEffect } from "react";
import Hr from "../Hr/Hr";
import { NavLink } from "react-router-dom";

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
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      updateDate();
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  return (
    <div className="header">
      <div className="header-container">
        <NavLink to="/" className="name">
          ZACH IZZARD
        </NavLink>
        <Hr />
        <div className="header-flex-split">
          <div className="upper">
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
