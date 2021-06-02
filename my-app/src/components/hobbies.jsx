import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Hobbies</span>
              <h2 className="colorlib-heading">Where does my time go?</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>Placeholder </h3>
                  <p>Placeholder</p>
                  <div
                    class="ldBar"
                    
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Placeholder</h3>
                  <p>Placeholder</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Placeholder</h3>
                  <p>Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}