import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import MyData from './MyData';
// import store from '../store';


export default class Root extends Component {
  constructor() {
    super();
    this.state = "I am a string"; // this.state = {line1: '...', line2: '...', line3: '...'}
  }
  // componentDidMount(){
  //   if (this.props.user) {
  //     this.props.fetchInitialData();
  //   }
  // }

  render () {
    return (
      <div id="root">
        <Navbar />
        <Home />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
        <MyData />
      </div>
    )
  }
}
