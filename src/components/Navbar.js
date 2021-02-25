import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar-container ">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#myNavbar"
              aria-controls="myNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="navbarButton"
            >
              <img
                id="burger"
                src="burger.png"
                alt="Icon for accessing navigation links"
              />
            </button>

            <div className="navbar collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="resume">
                    R&eacute;sum&eacute;
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://linkedin.com/in/katieknish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/technikate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// className Navbar extends React.Component {
//   render() {
//     return (
//       <nav className="navbar ">
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="index.html">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="projects.html">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="resume.html">
//                 Résumé
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="https://linkedin.com/in/katieknish">
//                 LinkedIn
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="https://github.com/technikate">
//                 GitHub
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;
