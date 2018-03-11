import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <nav>
        <div className="nav outer">
          <section id="nav-right" className="nav">
            <img id="logo" src="/images/sunflower.svg" width="70px" height="70px" />
            <h1 id="header">DayTrace</h1>
          </section>
          <section id="nav-left" className="nav">
              <ul className="navlinks">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
          </section>
        </div>
      </nav>
    )
  }
}
