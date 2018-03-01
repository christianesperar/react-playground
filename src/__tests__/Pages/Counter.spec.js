import React from 'react';
import { mount } from 'enzyme';
import { expect } from './../../setupChai';
import Counter from './../../Pages/Counter/Counter';

it('should render without crashing', () => {
  mount(<Counter />);
});

it('should start at 0', () => {
  const wrapper = mount(<Counter />);
  const counter = wrapper.find('span');

  expect(counter.text()).to.equal('0');
});

it('should add value to counter', () => {
  const wrapper = mount(<Counter />);
  const counter = wrapper.find('span');
  const add = wrapper.find('button').at(0);

  add.simulate('click');
  expect(counter.text()).to.equal('1');

  add.simulate('click');
  expect(counter.text()).to.equal('2');
});

it('should subtract value to counter', () => {
  const wrapper = mount(<Counter />);
  const counter = wrapper.find('span');
  const subtract = wrapper.find('button').at(1);

  subtract.simulate('click');
  expect(counter.text()).to.equal('-1');

  subtract.simulate('click');
  expect(counter.text()).to.equal('-2');
});

it('should return correct value if click multiples times', () => {
  const wrapper = mount(<Counter />);
  const counter = wrapper.find('span');
  const add = wrapper.find('button').at(0);
  const subtract = wrapper.find('button').at(1);

  add.simulate('click');
  subtract.simulate('click');
  subtract.simulate('click');
  add.simulate('click');
  add.simulate('click');
  subtract.simulate('click');
  subtract.simulate('click');

  expect(counter.text()).to.equal('-1');
});
