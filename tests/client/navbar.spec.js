import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { sinon } from 'sinon';

import Navbar from '../../client/components/Navbar.jsx';

describe('<Navbar />', () => {
  beforeEach('some action spy', () => {
    let mockSetHaiku = spy();
    let icon = shallow(<SingleIcon onClick={mockSetHaiku} />)
  });

  xit('calls some action', () => {
    icon.simulate('setHaiku', {});
    expect(mockSetHaiku.calledOnce).to.be.true;
  });

  xit('does something specific', () => {

  });
});
