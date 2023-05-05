import React from 'react';
import './Summary.css';
import logo from './html-css.png';
import pdf from './html-css-basics-summary.pdf';

function Amir2() {
  return (
    <div>
      <header>
        <h1>HTML & CSS Basics Summary</h1>
        <img src={logo} alt="HTML and CSS logos" />
      </header>
      <main>
        <section>
          <h2>HTML Summary</h2>
          <p>
            HTML (HyperText Markup Language) is used to define our page
            content,structure and meaning. You <strong>don't</strong> use it for
            styling purposes. Use CSS for that instead!
          </p>
          <ul id="html-list">
            <li className="extra-important">
              HTML uses "elements" to describe (annotate) content
            </li>
            <li>
              HTML elements typically have an opening tag, content and then a
              closing tag
            </li>
            <li className="extra-important">
              You can also have void (empty) elements like images
            </li>
            <li className="extra-important">
              You can also configure elements with attributes
            </li>
            <li>
              There's a long list of available elements but you'll gain
              experience over time, no worries.
            </li>
          </ul>
          <p>
            Learn more about all available HTML elements on
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
              the MDN HTML element reference
            </a>
            .
          </p>
        </section>

        <section>
          <h2>CSS Summary</h2>
          <p>
            CSS (Cascading Style Sheets) is used for styling your page content.
          </p>
          <ul id="css-list">
            <li>Styles are assigned via property-value pairs</li>
            <li>You can assign styles via the "style" attribute</li>
            <li className="extra-important">
              To avoid code duplication, you typically use global styles (e.g.
              via the "style" element) instead
            </li>
            <li>
              Alternatively, you can work with external stylesheet files which
              you "link" to
            </li>
            <li className="extra-important">
              When working with CSS, concepts like "inheritance", "specificity"
              and the "box model" should be understood.
            </li>
          </ul>
          <p>
            Learn more about all available CSS properties and values on
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">
              the MDN CSS property reference
            </a>
            .
          </p>
        </section>
      </main>
      <footer>
        <a href={pdf}>Download PDF Summary</a>
        <p>(c) Academind GmbH</p>
      </footer>
    </div>
  );
}

export default Amir2;
