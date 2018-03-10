import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { sinon } from 'sinon';

import Root from '../../client/components/Root.jsx';
import Navbar from '../../client/components/Navbar.jsx';
import Home from '../../client/components/Home.jsx';
import Today from '../../client/components/Today.jsx';

describe('Components: ', () => {

  describe('<Root />', () => {
    const shallowRoot = shallow(<Root />);

    it('should initially render 1 <Navbar /> component', () => {
      expect(shallowRoot.find('Navbar')).to.have.length(1);
    });

    it('should wrap all content in a <div> with the id "root"', () => {
      expect(shallowRoot.find('#root')).to.have.length(1);
    });

    it('has an initial state that is an empty object', () => {
      const rootState = shallowRoot.state();
      expect(rootState).to.exist;
      expect(rootState).to.be.an('object');
    });

  });

  describe('<Navbar />', () => {
    const shallowNav = shallow(<Navbar />);

    it('renders the DayTrace logo as an <img> with an id of "logo"', () => {
      expect(shallowNav.find('#logo')).to.have.length(1);
    });

    xit('contains links to "About", "Signup", and "Login"', () => {
    });
  });

  describe('<Home />', () => {
    const shallowHome = shallow(<Home />);

    it('renders a <SampleData /> component', () => {
      expect(shallowHome.find('SampleData')).to.have.length(1);
    });

    xit('', () => {
    });
  });

  describe('<Today />', () => {

    xit('', () => {
      expect();
    });

    xit('', () => {
    });
  });

});
