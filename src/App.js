import React from 'react';
import './App.css';
import logo from './pascal.jpg';

function App() {
  const style1 = {
    fontFamily: 'Oswald, sans-serif',
    color: 'rgb(83, 75, 75)',
    fontSize: '3.125rem',
    margin: '3rem 0',
  };

  const style2 = {
    fontFamily: 'Oswald, sans-serif',
    color: 'rgb(170, 96, 83)',
    fontSize: '1.875rem',
    padding: '2.1875rem 2.5rem',
  };

  const style3 = {
    backgroundColor: 'rgb(167, 1, 78)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    fontSize: '1.125rem',
    padding: '0.375rem',
    margin: '0.6875rem',
  };

  const style4 = {
    color: 'red',
    width: '21.875rem',
    margin: '1.875rem auto 0 auto',
    padding: '0',
  };

  const style5 = {
    listStyle: 'none',
    border: '0.125rem solid yellow',
    borderRadius: '10px',
    backgroundColor: 'rgb(223, 136, 124)',
    margin: '1.875rem',
    padding: '0.625rem',
    boxShadow: '5px 5px 30px rgba(0, 0, 0, 1)',
  };

  const style6 = {
    width: '19.69rem',
    height: '12.5rem',
    borderRadius: '8.1rem',
  };

  return (
    <div>
      <header>
        <img src={logo} style={style6} alt="logo" />
        <h1 style={style1}>Max Challenge for wednesday, August 4th</h1>
      </header>
      <main>
        <section>
          <p style={style2}>
            Learn about basics of of <strong>web development</strong> -
            specifically dive into HTML & CSS.
          </p>
          <p style={style2}>
            I'll achieve this goal by diving into
            <a style={style3} href="https://www.google.com">
              {' '}
              more learning resources.
            </a>
          </p>
        </section>
        <section>
          <ol style={style4}>
            <li style={style5}>
              <h2 id="header1">Tuesday, April 2nd</h2>
              <p>Repeat what I learned about HTML & CSS</p>
            </li>
            <li style={style5}>
              <h2 className="header2">wednesday, April 3rd</h2>
              <p>Do the exercises on HTML & CSS</p>
            </li>
            <li style={style5}>
              <h2 className="header2">Thursday, April 4th</h2>
              <p>Dive deeper into HTML & CSS and build more complex websites</p>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
