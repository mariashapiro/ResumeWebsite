import React, { Component } from 'react'

export default class Activities extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-progress-bar-stripped" data-section="progress">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="progress-bar">
                      <span className="heading-meta">Hobbies</span>
                      <h2 className="colorlib-heading">Where does my time go?</h2>
                      <p>test p</p>
                      <progress-bar-animated>test and tester and test </progress-bar-animated>
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