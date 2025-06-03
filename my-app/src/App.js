import React, { Component } from "react";
//import "./App.css";
import LandingPage from "./pages/landingPage";
import DanielCorner from "./pages/danielCorner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact component={LandingPage} />
          <Route path="/daniel" component={DanielCorner} />
        </Routes>
      </Router>
    );
  }
}

export default App;
