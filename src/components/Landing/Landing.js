import "./Landing.css";

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Typist from "react-typist";

function Landing({ timeout }) {
  const [displayClick, setDisplayClick] = useState(false);
  const [fadeStatus, setFadeStatus] = useState("landing");
  const [redirectURL, setRedirectURL] = useState("");

  setTimeout(() => setDisplayClick(true), timeout);

  function clickLanding() {
    if (displayClick) {
      setFadeStatus("landing fadeOut");
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
              <Typist.Delay ms={200} />, a <span className="blue">student</span>
              , <span className="red">programmer</span>,{" "}
              <span className="yellow">designer</span>, and{" "}
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
