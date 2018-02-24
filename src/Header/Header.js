import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="jsf-header">
        <img src={logo} className="jsf-header-logo" alt="logo" />
        <h1 className="jsf-header-title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
