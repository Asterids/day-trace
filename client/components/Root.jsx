import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ImageList from './ImageList';
import Header from './Header';
import SingleHaiku from './SingleHaiku';
import store from '../store';

export default class Root extends Component {
  constructor() {
    super();
    this.state = store.getState().selectedHaiku; // this.state = {line1: '...', line2: '...', line3: '...'}
  }
  //
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <br />
          <SingleHaiku line1={this.state.line1} line2={this.state.line2} line3={this.state.line3} />
          <ImageList />
        </div>
      </Router>
    )
  }
}
