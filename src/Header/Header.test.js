import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

it('should show the title', () => {
  const wrapper = mount(<Header title='Welcome to React Playground' />);
  const title = wrapper.find('h1').text();

  expect(title).toBe('Welcome to React Playground');
});
