import "./App.css";
import "./animation.css";
import "./fonts.css";

import React from "react";

import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
              <Home />
            </div>
          </Route>

          <Route exact path="/about" key="about">
            <Header />
            <div className="fadeIn">
              <About />
            </div>
          </Route>

          <Route exact path="/portfolio" key="portfolio">
            <Header />
            <div className="fadeIn">
              <Portfolio />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
