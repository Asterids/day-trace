import React from 'react';
import { Link } from 'react-router-dom';
import MyData from './MyData';

export default function Home () {
  return (
    <div id="home">
      <div className="welcome">
        <section>
          <h1>Welcome to DayTrace</h1>
        </section>
        <section>
          <MyData />
        </section>
        <br />
        <section>
          <h3>Visualize data about your everyday</h3>
          Learn more
        </section>
      </div>
    </div>
  )
}
