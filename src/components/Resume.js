import React from 'react';
import Navbar from './Navbar';

export default function Resume() {
  return (
    <div>
      <div className="navbar-parent ">
        <Navbar />
      </div>
      <div className="container component ">
        <div className=" component ">
          <h1 className="h1resume row">Katie Knish</h1>
          <div className="small row">
            accessibility-focused front-end developer
          </div>
        </div>
        <div className="row">
          <div className="leftColumn">
            <div id="projectsSection">
              <h2>Projects</h2>
              <h3>A Widget a Day</h3>
              <ul>
                <li className="liResume">
                  &nbsp;An ongoing personal project wherein I challenge myself
                  to build one small front-end widget a day to expand my skills
                  and learn to incorporate accessibility best practices.
                </li>
                <li className="liResume">
                  &nbsp;Technologies used: JavaScript, HTML, CSS, React,
                  Bootstrap, ARIA.
                </li>
                <li className="liResume">
                  &nbsp;GitHub link:&nbsp;
                  <a href="http://github.com/technikate/widgetaday">
                    github.com/technikate/widgetaday
                  </a>
                </li>
              </ul>
              <h3>jobBird</h3>
              <ul>
                <li className="liResume">
                  &nbsp;Created in a team as our final project at Fullstack
                  Academy, jobBird is an app whose purpose is to help users
                  organize their job search. My contributions were to front-end
                  design and organization, as well as site and database
                  architecture.
                </li>
                <li className="liResume">
                  &nbsp;Technologies used: JavaScript, CSS, Bootstrap, Axios,
                  Sequelize, GitHub Jobs API.
                </li>
                <li className="liResume">
                  &nbsp;GitHub link:&nbsp;
                  <a href="http://github.com/2006-samus-samurai/jobbird">
                    github.com/2006-samus-samurai/jobbird
                  </a>
                </li>
              </ul>
            </div>

            <div id="experienceSection">
              <h2>Work Experience</h2>
              <h3>Freelance Technical Editor</h3>
              <div className="small">January 2012 – present</div>
              <ul>
                <li className="liResume">
                  &nbsp;Previous clients and employers include Indiana
                  University Press, Havas WW Chicago, and Gallagher.
                </li>
                <li className="liResume">
                  &nbsp;Complete technical editing projects in areas such as
                  medicine, software, and climatology in the publishing,
                  technology, medical communications, and advertising
                  industries.
                </li>
                <li className="liResume">
                  &nbsp;Help create content alongside SMEs and other writers and
                  editors, communicating complex concepts in an accessible and
                  concise manner for audiences ranging from children to
                  physicians.
                </li>
                <li className="liResume">
                  &nbsp;Compile, organize, and maintain editorial style guides.
                </li>
              </ul>
              <h3>Medical Content Editor</h3>
              <div className="small">
                Patient Experience Project/EVERSANA
                <br />
                June 2018 – June 2019
              </div>
              <h3>Proofreader</h3>
              <div className="small">
                Blue Chip Marketing/Continuum Clinical
                <br />
                April 2017 – June 2018
              </div>
            </div>
          </div>
          <div className="rightColumn">
            <div id="descriptionThing">
              <h2>Say Hi</h2>
              <ul>
                <li className="liResume">&nbsp;katie.knish.42@gmail.com</li>
                <li className="liResume">
                  &nbsp;
                  <a
                    href="http://linkedin.com/in/katieknish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/katieknish
                  </a>
                </li>

                <li className="liResume">
                  &nbsp;
                  <a
                    href="https://katieknish.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    katieknish.com
                  </a>
                </li>
                <li className="liResume">
                  &nbsp;
                  <a
                    href="http://github.com/technikate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/technikate
                  </a>
                </li>
              </ul>
            </div>
            <div id="skillsSection">
              <h2>Skills</h2>
              <ul className="skills">
                <li className="skills">JavaScript, React</li>
                <li>CSS, HTML, Bootstrap</li>
                <li>Sequelize, PostgreSQL</li>
                <li>Express, Axios, Node</li>
                <li>Git, GitHub</li>
                <li>WCAG, ARIA</li>
                <li>Python, R</li>
                <li>Babel, Webpack</li>
                <li>English, French</li>
              </ul>
            </div>
            <div id="educationSection">
              <h2>Education</h2>
              <h3>Fullstack Academy</h3>
              <ul>
                <li>
                  Web development. Certificate completed in September 2020.
                </li>
              </ul>
              <h3>Indiana University</h3>
              <ul>
                <li>
                  French BA, Mathematics minor, Jewish Studies certificate.
                  Degree completed in May 2011.
                </li>
              </ul>
            </div>
            <div id="interestsSection">
              <h2>Interests</h2>
              accessibility | astronomy | books | data visualization | history |
              libraries | linguistics | sustainability | ukulele | UX design
              &amp; research
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
