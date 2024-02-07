import React, { Component } from "react";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullText: false,
    };
    this.toggleFullText = this.toggleFullText.bind(this);
  }

  toggleFullText() {
    this.setState((prevState) => ({
      showFullText: !prevState.showFullText,
    }));
  }

  render() {
    const { showFullText } = this.state;
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Timeline</span>
                <h2 className="colorlib-heading animate-box">experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer @ Microsoft <span>August 2022 — now</span>
                        </h2>
                        <p>
                          Developer for the Xbox Family and Safety team. Focusing primarily in front end engineering, I have developed for a
                          variety of Xbox clients to deliver features to gamers, parents, and children, with the overarching goal of keeping
                          the Xbox ecosystem safe and healthy. My highlighted projects are with Xbox Family Settings App, Voice Reporting on
                          the Xbox console, and Ask-A-Parent Add Friend on xCloud. <br />
                          XFS App: Currently, my efforts are focused on the Xbox Family Settings App with a highlight on iOS and Android
                          development. While the project
                          {showFullText && (
                            <span>
                              details are confidential, I have been employing skills in React and TypeScript to quickly implement design and
                              PM requests. Concurrently, I am also working with Azure Notification Hub to migrate our notification
                              architecture to accommodate a Firebase version upgrade. <br />
                              Voice Reporting on Console: Before XFSA, I developed the user interface for Voice Reporting on the Xbox
                              console. Before Voice Reporting, gamers could make in-game reports, but many were unactionable by moderators
                              due to lack of evidence. With our new feature, we are able to save on expensive moderation costs while also
                              curtailing hate and toxicity in games. I developed the UX/UI for the reporting flow using React, TypeScript,
                              UWP, C#, and C++. AAP
                              <br />
                              Add Friend on xCloud: Here I worked on the xCloud platform to add a tool for parents to better protect their
                              children online. Using React, I used existing packages to implement a way for children to ask their parents
                              for permission to add a friend. I also support the service engineers in incident management and keeping up
                              with the maintenance and upkeep of our services via oncall.
                            </span>
                          )}
                          <button onClick={this.toggleFullText}>{showFullText ? "Collapse" : "Read more"}</button>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          SWE Intern @ Microsoft <span>Summer 2021</span>
                        </h2>
                        <p>
                          • Developed friends and followers list for Xbox Mobile App using <b>React</b>
                        </p>
                        <p>• Implemented a favorite star on the profile page to promote consistency throughout the app </p>
                        <p>
                          • Collaborated with a multitude of teams, including my PM, design, accessibility and contributed to the
                          respoisitory shared by Xbox App, Family Settings App, Game Pass App, and xCloud
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Cyber Security Analyst @ Georgia Tech Office of Information Technology <span>Fall 2020 - Present</span>
                        </h2>
                        <p>
                          • Monitored security alerts on Georgia Tech's network of <b>12,000</b> institute-owned endpoints and isolated and
                          resolved any incoming security attacks
                        </p>
                        <p>
                          • Reviewed and remediated vulnerability reports using security tools such as <b>Splunk, FireEye,</b> and{" "}
                          <b>ServiceNow</b>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Explore Intern @ Microsoft <span>Summer 2020</span>
                        </h2>
                        <p>
                          • Utilized <b>React Native for Windows, UWP, and C++</b> to implement Jump List and Badging
                        </p>
                        <p>
                          • Delivered a full feature from design to PR on the Xbox App for PC, which has over <b>2 million</b> monthly
                          active users
                        </p>
                        <img
                          src="my-app\src\components\GarrisonJumpList.png"
                          alt="contextual menu for xbox app for pc"
                          width="254"
                          height="509"
                        ></img>
                        <p>• Led initiative for Xbox branded facial coverings for the intern class</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Residental IT Specialist @ Georgia Tech Office of Information Technology <span>Fall 2019 - Fall 2020</span>
                        </h2>
                        <p>• Responsible for all Georgia Tech affiliated accounts for password control and account permissions</p>
                        <p>
                          • Provide networking support for 3 networks and over <b>6000 Access Points</b> for <b>15,000 devices</b>
                        </p>
                        <p>• Perform cabling for resident’s rooms including punching ethernet ports and evaluating data closets</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Launch and Change Co-Op Intern Rotation 2 @ BMW <span>Spring 2020</span>
                        </h2>
                        <p>
                          • Devised a <b>Java</b> and <b>VBA</b> program to compare BoM and Software to catch errors before the cars were on
                          assembly
                        </p>
                        <p>
                          • Encouraged the program to be utilized by <b>3 international plants</b> and it is gathering traction by all BMW
                          plants
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Launch and Change Co-Op Intern Rotation 1 @ BMW <span>Summer 2019</span>
                        </h2>
                        <p>
                          • Automated daily tedious tasks from <b>2 hours to 15 minutes</b> using <b>Batch</b> files and <b>Java</b>
                        </p>
                        <p>
                          • Utilized SAP, legacy systems, and VisView to assess the feasibility of engineering changes on the assembly line
                        </p>
                        <p>
                          • Began developing a change matrix using <b>SQL</b> and <b>Python</b> for engine and exhaust parts
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Computer Science @ Georgia Tech <span> Fall 2018 - Spring 2022</span>
                        </h2>
                        <p>
                          Attempting to get my <b>Bachelor of Science</b> in <b>Computer Science</b> from Georgia Tech! As of December 2020,
                          I am a third year and I plan to graduate in 3.5 years (I co-oped for two semesters!). My concentrations are{" "}
                          <b>Info-Networks</b> and <b>People</b>.
                        </p>
                        <p> </p>
                        <p>
                          <i>
                            Most recent relevant courses: CS3790 Intro to Cognitive Science • CS4235 Intro to Information Security • CS2200
                            Systems and Networks • CS3510 Design and Analysis of Algorithms • CS1332 Data Structures and Algorithms • CS2110
                            Computer Organization and Programming • CS2340 Object Oriented Principles and Design
                          </i>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Innovative Technologies Intern @ The World Bank <span>Summer 2018</span>
                        </h2>
                        <p>
                          • Researched <b>blockchain</b> and <b>artificial intelligence</b> solutions for use cases spanning worldwide
                        </p>
                        <p>• Assisted making simplified Solidity sandbox for clients to test and learn about basic smart contracts</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Founder @ English and Programming <span>Fall 2014 - Summer 2018</span>
                        </h2>
                        <p>
                          Check out an article about E&P in the Washingtonian{" "}
                          <a
                            href={"https://www.washingtonian.com/2018/03/22/student-teaches-kids-to-code/"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            here
                          </a>
                          !
                        </p>
                        <p>
                          • Founded organization that <b>taught STEM</b> skills in 2 Polish schools and 9 U.S. schools to close the
                          opportunity gap
                        </p>
                        <p>
                          • Developed curriculum containing skills in <b>Java, robotics, cybersecurity, Arduino, 3D printing, drones,</b>{" "}
                          and more
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Programming Counselor @ TIC <span>Summer 2017</span>
                        </h2>
                        <p>
                          Summer camp encouraging students to excel in technology and programming while also emphasizing a balance in
                          athletics and cooperation. Check out their website{" "}
                          <a href={" http://ticcamp.com/"} target="_blank" rel="noopener noreferrer">
                            here
                          </a>
                          .
                        </p>
                        <p>
                          • Supervised and <b>instructed 32 students</b>, 2nd – 8th grade in an all-day camp during 4-2-week rotations
                        </p>
                        <p>• Developed curriculum and project for each student, customized to their skills and interests</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Financial Analyst Intern @ B7 <span>Summer 2016</span>
                        </h2>
                        <p>
                          B7 is a venture Capital firm <b>investing</b> in <b>start-up technology</b> companies in the US, with a particular
                          interest in data management, platforms, communications, and networking software for government solutions. I
                          learned key indicators to look for to value a start-up tech company. Check out their website{" "}
                          <a href={"https://www.b7inc.com/"} target="_blank" rel="noopener noreferrer">
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInUp">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Apprentice @ KID Museum <span>Fall 2015 & Spring 2016</span>
                        </h2>
                        <p>
                          I served as a subject-matter expert for <b>STEM</b> curriculum and activities for <b>elementary schoolers</b>{" "}
                          during this after school job in high school. Check out their website{" "}
                          <a href={"https://kid-museum.org/"} target="_blank" rel="noopener noreferrer">
                            here
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
