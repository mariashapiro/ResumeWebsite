import React, { Component } from 'react'

export default class Sidebar extends Component {

  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Maria Shapiro</a></h1>
              <span className="email"><i className="icon-mail"></i> mariasalternate@gmail.com</span>
              <span className="number"><i className="icon-phone"></i>‪(202) 455-0595‬</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              
            </nav>
            <div className="colorlib-footer">
            <ul>
                <li><a href="https://www.linkedin.com/in/maria-shapiro/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://www.instagram.com/mar.shapiro/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://github.com/mariashapiro" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            <p><small>
                Updated December 2020
              </small></p>
              <p><small>
                Made with <i className="icon-heart" aria-hidden="true" /> and electronic music<br></br>
                {/* Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration  */}
              </small></p>
              
            </div>
          </aside>
        </div>
      </div>
    )
  }
}