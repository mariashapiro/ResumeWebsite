import ThemeToggle from "./components/ThemeToggle.jsx";
import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Introduction from "./components/introduction.jsx";
import About from "./components/about.jsx";
import Timeline from "./components/timeline.jsx";
import Activities from "./components/activities.jsx";
import Hobbies from "./components/hobbies.jsx";
import Projects from "./components/projects.jsx";
import { Analytics } from "@vercel/analytics/react";

class App extends Component {
  render() {
    return (
      <>
        <ThemeToggle />
        <Analytics />
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <About></About>
              <Timeline></Timeline>
              {/* <Hobbies></Hobbies> 
              <Activities></Activities>
              <Projects></Projects>*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
