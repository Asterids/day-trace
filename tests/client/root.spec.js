import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Root from '../../client/components/Root.jsx';

describe('<Root />', () => {
  const shallowRoot = shallow(<Root />);

  it('should initially render 1 <Navbar /> component and 1 <Home /> component', () => {
    expect(shallowRoot.find('Navbar')).to.have.length(1);
    expect(shallowRoot.find('Home')).to.have.length(1);
  });

  xit('has a state of some sort...', () => {
    const rootState = shallowRoot.state();
    expect(rootState).to.be.a('string');
  });

});
