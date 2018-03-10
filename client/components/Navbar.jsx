import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import About from './About'
import Login from './Login'
import Signup from './Signup'

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
            <Router>
              <ul className="navlinks">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </ul>
              {/* <Switch>
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch> */}
            </Router>
          </section>
        </div>
      </nav>
    )
  }
}
