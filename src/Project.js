import React from 'react';
import './shared.css';
import './styles.css';
import logo1 from './images/places/barcelona.jpg';
import logo2 from './images/places/miami.jpg';
import logo3 from './images/places/munich.jpg';

function Project() {
  return (
    <div>
      <header>
        <div id="page-logo">
          <a href="#">Travel Goals</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <div id="hero-content">
            <h1>Joe's Travel Page</h1>
            <p>Let's explore the world together!</p>
            <a href="#">Discover places</a>
          </div>
        </section>
        <section id="highlights">
          <h2>Highlights</h2>
          <ul id="destinations">
            <li className="destination">
              <img src={logo2} alt="Miami streets on sunny day" />
              <p>
                Miami <strong>USA</strong>
              </p>
            </li>
            <li className="destination">
              <img src={logo3} alt="Munich stadium in winter" />
              <p>
                Munich <strong>Germany</strong>
              </p>
            </li>
            <li className="destination">
              <img src={logo1} alt="Palm beach in Barcelona" />
              <p>
                Barcelona <strong>Spain</strong>
              </p>
            </li>
          </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Project;
