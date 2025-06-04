const Sidebar = () => {
  // ✅ Get the actual deployment/build date - automatically set during build!
  const getDeploymentDate = () => {
    try {
      // __BUILD_DATE__ is injected by Vite at build time
      const buildDate = new Date(__BUILD_DATE__);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${monthNames[buildDate.getMonth()]} ${buildDate.getFullYear()}`;
    } catch (error) {
      // Fallback for development mode
      console.log("Using fallback date in development mode");
      const fallbackDate = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${monthNames[fallbackDate.getMonth()]} ${fallbackDate.getFullYear()}`;
    }
  };

  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{ backgroundImage: "url(images/about.jpg)" }} />
            <h1 id="colorlib-logo">
              <a href="index.html">Maria Shapiro</a>
            </h1>
            <span className="email">
              <i className="icon-mail"></i> resumesite[@]kora.anonaddy.me
            </span>
            <br />
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                <li>
                  <a href="#timeline" data-nav-section="timeline">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu"></nav>
          <div className="colorlib-footer">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/maria-shapiro/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mar.shapiro/" target="_blank" rel="noopener noreferrer">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/mariashapiro" target="_blank" rel="noopener noreferrer">
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>

            {/* New Daniel Baking Project Link */}
            <div style={{ marginTop: "20px", marginBottom: "15px" }}>
              <a
                href="https://marias.dev/danielbaking"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: "var(--bg-accent)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "var(--active-bg)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "var(--bg-accent)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                🍰 Daniel Baking
              </a>
            </div>

            <p>
              <small>Last updated {getDeploymentDate()}</small>
            </p>
            <p>
              <small>
                Made with <i className="icon-heart" aria-hidden="true" /> and electronic music<br></br>
                {/* Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration  */}
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
