import React from 'react';
import { Link } from 'react-router-dom';
import SampleData from './SampleData';

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
          Learn more
        </section>
      </div>
    </div>
  )
}
