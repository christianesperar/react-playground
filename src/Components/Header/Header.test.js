import React from 'react';
import { mount } from 'enzyme';
import { expect } from './../../setupChai';
import Header from './Header';

it('should show the title', () => {
  const wrapper = mount(<Header title='Welcome to React Playground' />);
  const title = wrapper.find('h1').text();

  expect(title).to.equal('Welcome to React Playground');
});
