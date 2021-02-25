import React from 'react';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
      <div className="navbar-parent ">
        <Navbar />
      </div>

      <div className="container">
        <div id="selfieContainer">
          <img
            id="selfie"
            src="katie.jpg"
            class="float-right"
            alt="A photo of Katie, a smiling 31-year-old woman with wavy brown hair and glasses."
          />
        </div>
        <h1>Oh hello!</h1>

        <p>
          My name is Katie Knish, and I'm a junior front-end developer looking
          for my first dev role.
        </p>
        <p>
          I'm passionate about accessibility and UX. I believe that websites,
          apps, and software should serve all their users and that accessibility
          best practices benefit us all.
        </p>
        <p>
          I'm proficient in JavaScript, React, CSS, and HTML, and I'm learning
          more every day about using Python and R for data visualization.
        </p>
        <p>
          If your team could use a junior developer who's kind, communicative,
          accessibility-obsessed and tenacious, feel free to reach out!
        </p>
      </div>
    </div>
  );
}
