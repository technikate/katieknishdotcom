import React from 'react';
import Navbar from './Navbar';

export default function Projects() {
  return (
    <div>
      <div className="navbar-parent ">
        <Navbar />
      </div>
      <div className="container component content">
        <h1 className="component">Things I've Built</h1>
        <div className="row">
          <div>
            <ul>
              <li>
                <h2>
                  <a href="https://katieknish.com">KatieKnish.com</a>
                </h2>
                This website was my first proper project. I made it from scratch
                using JavaScript, React, HTML, CSS, and Bootstrap. Welcome!
              </li>
              <br />
              <li>
                <h2>
                  <a href="https://katieknish.com/pigLatinTranslator.html">
                    Pig Latin Translator
                  </a>
                </h2>
                An expansion of a freeCodeCamp project, this simple translator
                takes English input and returns it in Pig Latin. I made it in
                JavaScript, HTML, and CSS.
              </li>
              <br />
              <li>
                <h2>
                  <a
                    href="https://github.com/2006-samus-samurai/jobbird"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jobBird
                  </a>
                </h2>
                Created in a team as our final project at Fullstack Academy,
                jobBird is an app whose purpose is to help users organize their
                job search. My contributions were to front-end design and
                organization, as well as site and database architecture. We
                built it with JavaScript, CSS, Bootstrap, Axios, Sequelize, and
                the GitHub Jobs API.
              </li>
              <br />
              <li>
                <h2>
                  <a
                    href="https://github.com/technikate/widgetaday"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A Widget a Day
                  </a>
                </h2>
                A Widget a Day is an ongoing personal project wherein I
                challenge myself to build one small front-end widget a day. My
                goal is to expand my skills and learn to incorporate
                accessibility best practices. I'll be using JavaScript, HTML,
                CSS, React, Bootstrap, and ARIA, with occasional data
                visualization work done in R and Python.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// className Projects extends React.Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <div className="container component">
//           <h1>Things I've Built</h1>
//           <div className="row">
//             <div>
//               <p>
//                 <a href="https://katieknish.com">KatieKnish.com</a> <br />
//                 This website is my first proper project. I made it from scratch.
//                 Welcome!
//               </p>
//               <p>
//                 <a href="https://katieknish.com/pigLatinTranslator.html">
//                   Pig Latin Translator
//                 </a>
//                 <br />
//                 An expansion of a freeCodeCamp project, this simple translator
//                 takes English input and returns it in Pig Latin. I made it in
//                 JavaScript, HTML, and CSS.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Projects;
