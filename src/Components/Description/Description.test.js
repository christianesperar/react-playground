import React from 'react';
import { mount } from 'enzyme';
import { expect } from './../../setupChai';
import Description from './Description';

it('should show the description', () => {
  const wrapper = mount(<Description description="My personal playground while learning React" />);
  const title = wrapper.find('p').text();

  expect(title).to.equal('My personal playground while learning React');
});
