import React from 'react';
import './button.css';

function Button() {
  return (
    <div>
      <header>
        <h1>Demo Form</h1>
      </header>
      <main>
        <form>
          <section>
            <h2>Account</h2>
            <ul>
              <li>
                <label for="username">Your Name</label>
                <input type="text" id="username" placeholder="Name" />
              </li>
            </ul>
            <ul>
              <li>
                <label for="useremail">Your email address</label>
                <input
                  type="Email"
                  id="useremail"
                  required
                  placeholder="Email"
                />
              </li>
            </ul>
          </section>
          <section>
            <h2>Personal</h2>
            <ul>
              <li>
                <label for="userage">Your age</label>
                <input type="number" step="2" id="userage" placeholder="Age" />
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <label for="userpassword">Your password</label>
                <input
                  type="password"
                  id="userpassword"
                  required
                  minLength="8"
                  placeholder="Password"
                />
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <label for="userbirthdate">Your birthdate</label>
                <input type="date" id="userbirthdate" />
              </li>
            </ul>
          </section>
          <section id="button-2">
            <button type="Reset">Reset</button>
            <button type="Submit">Submit</button>
          </section>
        </form>
      </main>
    </div>
  );
}

export default Button;
