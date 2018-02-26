import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { sinon } from 'sinon';

import SingleIcon from '../client/components/SingleIcon';

describe('<SingleIcon />', () => {
  beforeEach('setHaiku spy', () => {
    let mockSetHaiku = spy();
    let icon = shallow(<SingleIcon onClick={mockSetHaiku} />)
  });

  it('calls setHaiku', () => {
    icon.simulate('setHaiku', {});
    expect(mockSetHaiku.calledOnce).to.be.true;
  });

  it('sets a haiku on the root state', () => {

  });
});
