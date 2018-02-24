import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="rp-header">
        <img src={logo} className="rp-header-logo" alt="logo" />
        <h1 className="rp-header-title">{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
