import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from '../store';
import Navbar from './Navbar';
import Home from './Home';
import SampleData from './SampleData';
import Login from './Login';
import Signup from './Signup';
// import About from './About';
// import Today from './Today';

// import { fetchActions } from '../reducers';

export default class Root extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // componentDidMount(){
  //   if (this.props.user) {
  //     this.props.fetchInitialData();
  //   }
  // }

  render () {
    return (
      <div id="root">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {/* <MyData /> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
