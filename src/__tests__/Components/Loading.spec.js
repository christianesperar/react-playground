import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from './../../setupChai';
import Loading from './../../Components/Loading/Loading';

it('should have correct text', () => {
  const wrapper = mount(<Loading text="Please wait" />);

  const text = wrapper.find('.rp-loading__text').hostNodes().text();

  expect(text).to.equal('Please wait');
});

it('should have correct loading animation behaviour', () => {
  const clock = sinon.useFakeTimers();
  const wrapper = mount(<Loading text="Please wait" />);
  const bullet = wrapper.find('.rp-loading__bullet').hostNodes();

  expect(bullet.text()).to.equal('•');

  clock.tick(300);
  expect(bullet.text()).to.equal('••');

  clock.tick(300);
  expect(bullet.text()).to.equal('•••');

  clock.tick(300);
  expect(bullet.text()).to.equal('•');
});
