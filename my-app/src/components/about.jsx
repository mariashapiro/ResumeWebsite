import React, { Component } from "react";

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
                      <p>
                        I'm currently a Technical Program Manager (TPM) at Microsoft, working on moderation for Xbox and Xbox-owned studios
                        to curtail toxicity and keep our gaming communities safer. I was a Software Engineer before that, but you can see
                        more in the timeline section below! I received my BS in Computer Science from Georgia Tech with a brief stretch in
                        Seoul to study abroad at Yonsei University, ultimately focusing on Cybersecurity, but have since pivoted. <br />
                        <br />
                        I love collecting hobbies, which also means their infatuation period could last awhile, or just for a short time.
                        Currently I'm infatuated with ice hockey, playing 2-3 times per week for the Kraken Hockey League, and cycling!
                        <i className="icon-heart" aria-hidden="true" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
