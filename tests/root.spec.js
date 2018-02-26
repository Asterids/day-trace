import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Root from '../client/components/Root';

describe('<Root />', () => {
  const shallowRoot = shallow(<Root />);

  it('should initially render 1 <Header />, 1 <SingleHaiku />, and 1 <ImageList /> components', () => {
    expect(shallowRoot.find('Header')).to.have.length(1);
    expect(shallowRoot.find('SingleHaiku')).to.have.length(1);
    expect(shallowRoot.find('ImageList')).to.have.length(1);
  });

  it('has a state containing an object', () => {
    const rootState = shallowRoot.state();
    expect(rootState).to.be.an('object');
  });

});
