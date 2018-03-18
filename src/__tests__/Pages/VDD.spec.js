import React from 'react';
import { mount } from 'enzyme';
import VDD from './../../Pages/VDD/VDD';

it('should render without crashing', () => {
  mount(<VDD />);
});
