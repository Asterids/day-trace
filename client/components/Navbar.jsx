import React from 'react';

export default class Navbar extends React.Component {
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
            Links to About, Signup, Login, and/or Logout
          </section>
        </div>
      </nav>
    )
  }
}
