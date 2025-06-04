import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle.jsx";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Introduction from "./components/introduction.jsx";
import About from "./components/about.jsx";
import Timeline from "./components/timeline.jsx";
import Activities from "./components/activities.jsx";
import Hobbies from "./components/hobbies.jsx";
import Projects from "./components/projects.jsx";
import DanielBaking from "./components/DanielBaking.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <Router>
      <Analytics />
      <SpeedInsights />
      <ThemeToggle />
      <div id="colorlib-page">
        <div id="container-wrap">
          <Routes>
            {/* Main Portfolio Route */}
            <Route
              path="/"
              element={
                <>
                  <Sidebar />
                  <div id="colorlib-main">
                    <Introduction />
                    <About />
                    <Timeline />
                    {/* Future sections - uncomment when ready */}
                    {/* <Hobbies />
                  <Activities />
                  <Projects /> */}
                  </div>
                </>
              }
            />

            {/* Daniel Baking Route */}
            <Route
              path="/danielbaking"
              element={
                <div id="colorlib-main" style={{ marginLeft: 0, width: "100%" }}>
                  <DanielBaking />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
