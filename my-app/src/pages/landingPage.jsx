import React, { Component } from "react";
import About from "../components/about";
import Introduction from "../components/introduction";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

class LandingPage extends Component {
  render() {
    return (
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
    );
  }
}

export default LandingPage;
