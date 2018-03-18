import React from 'react';
import { mount } from 'enzyme';
import { expect } from './../../setupChai';
import Description from './../../Components/Description/Description';

it('should have correct element value', () => {
  const wrapper = mount((
    <Description
      header="React Playground"
      content="My personal playground while learning React"
    />
  ));
  const header = wrapper.find('.rp-description__header').hostNodes().text();
  const description = wrapper.find('.rp-description__content').hostNodes().text();

  expect(header).to.equal('React Playground');
  expect(description).to.equal('My personal playground while learning React');
});
