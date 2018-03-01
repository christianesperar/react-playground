import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { expect } from './../../setupChai';
import Home from './../../Pages/Home/Home';

it('should render without crashing', () => {
  mount((
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  ));
});

