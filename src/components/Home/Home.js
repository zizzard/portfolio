import "./Home.css";

import React from "react";
import Hr from "../Hr/Hr";
import AboutText from "../AboutText/AboutText";

function Home() {
  return (
    <>
      <div className="body">
        <div className="title">WELCOME HOME</div>
        <Hr />
        <AboutText />
        <Hr />
      </div>
    </>
  );
}

export default Home;
