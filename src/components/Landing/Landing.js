import "./Landing.css";

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Typist from "react-typist";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ZACH IZZARD";
  }, []);

  const [displayClick, setDisplayClick] = useState(false);
  const [fadeStatus, setFadeStatus] = useState("landing");
  const [redirectURL, setRedirectURL] = useState("");

  setTimeout(() => {
    setDisplayClick(true);
    setFadeStatus("landing pointer");
  }, 7000);

  function clickLanding() {
    if (displayClick) {
      setFadeStatus("landing pointer fadeOut");
      setTimeout(() => setFadeStatus("hidden"), 750);
      setTimeout(() => setRedirectURL("home"), 1000);
    }
  }

  if (redirectURL === "") {
    return (
      <div className={fadeStatus} onClick={clickLanding}>
        <div className="landing-height">
          <div className="type-container">
            <Typist
              avgTypingDelay={45}
              stdTypingDelay={5}
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 450 }}
            >
              Hello! I am <b>Zach Izzard</b>
              <Typist.Delay ms={200} />, a{" "}
              <span className="blue">programmer</span>,{" "}
              <span className="red">designer</span>,{" "}
              <span className="yellow">data nerd</span>, and{" "}
              <span className="green">music lover</span>, and I would like to
              welcome you to my website :)
            </Typist>
          </div>
          <div className="click-container">
            {displayClick ? (
              <Typist
                avgTypingDelay={40}
                stdTypingDelay={5}
                cursor={{ hideWhenDone: false }}
              >
                Click anywhere to continue...
              </Typist>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to={redirectURL} />;
  }
}

export default Landing;
