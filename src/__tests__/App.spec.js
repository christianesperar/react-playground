import React from 'react';
import { mount } from 'enzyme';
import { expect } from './../setupChai';
import App from './../App';

it('should render without crashing', () => {
  mount(<App />);
});

it('should get the pages', () => {
  const pages = [
    {
      title: 'Mock',
      url: '/mock',
      component: 'MockComponent',
      path: './__mocks__/MockComponent',
    },
  ];

  const wrapper = mount(<App />);

  wrapper.instance().getPages(pages);

  expect(Object.keys(wrapper.instance().pages).length).to.be.equal(1);
  expect(Object.keys(wrapper.instance().pages)[0]).to.be.equal('MockComponent');
});
