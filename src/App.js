import "./App.css";
import "./animation.css";
import "./fonts.css";

import React, { useState, useLayoutEffect } from "react";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  let body_class = "body";
  if (width <= 1000) {
    body_class = "body no_padding_top";
  }

  return (
    <div className="App">
      <Router key="root">
        <Switch>
          <Route exact path="/" key="landing">
            <Landing />
          </Route>

          <Route exact path="/home" key="home">
            <Header />
            <div className="fadeIn">
              <div className="body">
                <Home />
              </div>
            </div>
          </Route>

          <Route exact path="/about" key="about">
            <Header />
            <div className="fadeIn">
              <div className={body_class}>
                <About />
              </div>
            </div>
          </Route>

          <Route exact path="/portfolio" key="portfolio">
            <Header />
            <div className="fadeIn">
              <div className={body_class}>
                <Portfolio />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
