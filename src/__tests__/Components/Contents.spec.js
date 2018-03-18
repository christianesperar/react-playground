import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { expect } from './../../setupChai';
import Contents from './../../Components/Contents/Contents';

it('should have the correct data if path', () => {
  const routes = [
    {
      title: 'Counter',
      url: '/counter',
      component: 'Counter',
      path: './Pages/Counter',
    },
  ];

  const wrapper = mount((
    <MemoryRouter>
      <Contents routes={routes} />
    </MemoryRouter>
  ));

  const link = wrapper.find('.rp-contents__link').hostNodes();

  expect(link.text()).to.equal('Counter');
  expect(link.prop('href')).to.equal('/counter');
});

it('should have the correct data if href', () => {
  const routes = [
    {
      title: 'ReactJS Tutorial For Beginners 2017 From Scratch',
      url: 'https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/',
    },
  ];

  const wrapper = mount(<Contents routes={routes} />);
  const link = wrapper.find('.rp-contents__link').hostNodes();

  expect(link.text()).to.equal('ReactJS Tutorial For Beginners 2017 From Scratch');
  expect(link.prop('href')).to.equal('https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/');
});

it('should have correct data for combined path and href', () => {
  const routes = [
    {
      title: 'Counter',
      url: '/counter',
      component: 'Counter',
      path: './Pages/Counter',
    },
    {
      title: 'ReactJS Tutorial For Beginners 2017 From Scratch',
      url: 'https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/',
    },
  ];

  const wrapper = mount((
    <MemoryRouter>
      <Contents routes={routes} />
    </MemoryRouter>
  ));
  const links = wrapper.find('.rp-contents__link').hostNodes();
  const path = links.at(0);
  const link = links.at(1);

  expect(links).to.have.length(2);

  expect(path.text()).to.equal('Counter');
  expect(path.prop('href')).to.equal('/counter');

  expect(link.text()).to.equal('ReactJS Tutorial For Beginners 2017 From Scratch');
  expect(link.prop('href')).to.equal('https://appdividend.com/2017/08/22/reactjs-tutorial-beginners-2017/');
});
