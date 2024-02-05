import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import Activities from "./components/activities";
import Hobbies from "./components/hobbies";
import Projects from "./components/projects";
import { Analytics } from "@vercel/analytics/react";

class App extends Component {
  render() {
    return (
      <>
        <Analytics />
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
              <About></About>
              {/* <Hobbies></Hobbies> */}
              <Timeline></Timeline>
              {/* <Activities></Activities> */}
              {/* <Projects></Projects> */}
              {/* <Blog></Blog> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
