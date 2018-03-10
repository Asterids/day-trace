import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import SampleData from './SampleData';
import About from './About';

export default function Home () {
  return (
    <div id="home">
      <div className="welcome">
        <section>
          <h1>Welcome to DayTrace</h1>
          <h3>Visualize data about your everyday</h3>
          <h5>Mouse over the bars in the example chart below to see more information</h5>
        </section>
        <section>
          <SampleData />
        </section>
        <br />
        <section>
          <Router>
            <Link to='/about'>Learn more</Link>
          </Router>
        </section>
      </div>
    </div>
  )
}
