import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { expect } from './../../setupChai';
import Content from './Contents';

it('should render router', () => {
  const routes = [
    {
      title: 'Counter',
      path: '/counter',
      component: 'Counter',
    },
  ];

  const wrapper = mount((
    <MemoryRouter>
      <Content routes={routes} />
    </MemoryRouter>
  ));

  const link = wrapper.find('li a');

  expect(link.text()).to.equal('Counter');
  expect(link.prop('href')).to.equal('/counter');
});

it('should render href', () => {
  const routes = [
    {
      title: 'ReactJS Tutorial For Beginners 2017 From Scratch',
      url: 'https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/',
    },
  ];

  const wrapper = mount(<Content routes={routes} />);
  const link = wrapper.find('li a');

  expect(link.text()).to.equal('ReactJS Tutorial For Beginners 2017 From Scratch');
  expect(link.prop('href')).to.equal('https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/');
});

it('should have 2 links', () => {
  const routes = [
    {
      title: 'Counter',
      path: '/counter',
      component: 'Counter',
    },
    {
      title: 'ReactJS Tutorial For Beginners 2017 From Scratch',
      url: 'https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/',
    },
  ];

  const wrapper = mount((
    <MemoryRouter>
      <Content routes={routes} />
    </MemoryRouter>
  ));

  expect(wrapper.find('li')).to.have.length(2);
});
