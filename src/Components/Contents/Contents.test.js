import React from 'react';
import { mount } from 'enzyme';
import { expect } from './../../utils/chai';
import { MemoryRouter } from 'react-router-dom';
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

  const title = wrapper.find('li a').text();
  const href = wrapper.find('li a').prop('href');

  expect(title).to.equal('Counter');
  expect(href).to.equal('/counter');
});

it('should render href', () => {
  const routes = [
    {
      title: 'ReactJS Tutorial For Beginners 2017 From Scratch',
      url: 'https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/',
    },
  ];

  const wrapper = mount(<Content routes={routes} />);
  const title = wrapper.find('li a').text();
  const href = wrapper.find('li a').prop('href');

  expect(title).to.equal('ReactJS Tutorial For Beginners 2017 From Scratch');
  expect(href).to.equal('https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/');
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
