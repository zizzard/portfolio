import "./App.css";
import "./animation.css";
import "./fonts.css";

import React from "react";
import Landing from "./components/Landing/Landing";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router key="root">
      <Switch>
        <Route exact path="/" key="landing">
          <div className="App">
            <Landing timeout={7000} />
          </div>
        </Route>
        <Route exact path="/home" key="home">
          <div className="App">
            <div className="fadeIn">
              <div className="center">WElCOME HOME</div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
