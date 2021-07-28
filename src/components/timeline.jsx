import React from 'react'

const Timeline = () => {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>51 Degrees Ltd <span>Jan 2021 - Present</span></h2>
                        <p>Integrating React App with google APIs</p>
                        <p>Adding functionalities to existing software applications</p>
                        <p>Developing python scripts that automate posting/fetching data to/from remote server</p>
                        <p>Administering company's web app</p>
                        <p>Mentoring Intern</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Major League Hacking (MLH) <span>09/2020 - 12/2020</span></h2>
                        <p>In remote Agile team, I built the UI for LearnForFree, an app that fetches free courses from various online learning platforms such as edX, Coursera, FutureLearn</p>
                        <p>Participated in webinars held by engineers from Facebook, Github, Twilio etc, about the challenges they face and how I can be part of the solution </p>
                        <p>I also built interface for AskFlow, a CLI tool that fetches answers from StackOverflow. We queried stackExchange API. I also published the tool as pip package in PyPI </p>
                        <p> See linkedIn profile for details </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Andela & Facebook Developer Circles <span>04/2020 - 07/2020</span></h2>
                        <p>Designed and developed Novelty COVID-19 infections impact estimator</p>
                        <p>Lead a team of 6 in designing and developing web app that can help double income and productivity of small scale farmers </p>
                        <p>Worked in agile teams to build real-world, locally and relevant solutions focused on the Sustainable Development Goals(SDGs) </p>
                        <p>See linkedIn profile for details </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Timeline;