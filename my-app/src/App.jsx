import ThemeToggle from "./components/ThemeToggle.jsx";
import "./App.css";
import Sidebar from "./components/sidebar.jsx";
import Introduction from "./components/introduction.jsx";
import About from "./components/about.jsx";
import Timeline from "./components/timeline.jsx";
import Activities from "./components/activities.jsx";
import Hobbies from "./components/hobbies.jsx";
import Projects from "./components/projects.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ThemeToggle />
      <div id="colorlib-page">
        <div id="container-wrap">
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
        </div>
      </div>
    </>
  );
};

export default App;
