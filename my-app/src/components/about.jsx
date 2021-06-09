import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>I am an undergraduate student at Georgia Institute of Technology studying Computer Science with threads in Info Networks and People. Right now, I am deciding between pursuing a traditional software engineering role versus a program mananger role.
                        The plan is to graduate in Spring 2022, but before that I plan to study abroad in Fall 2021 in Seoul, South Korea at Yonsei University.</p>
                      <p>I am originally from Maryland, super close to the DC border, and I am an absolute fiend for Fall weather, anything with wheels (manual cars! longboarding! quad-skating!) and plants <i className="icon-heart" aria-hidden="true" /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}