import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="rp-header">
        <Link className="rp-header__link" to="/">
          <img className="rp-header__logo" src={logo} alt="logo" />
          <h1 className="rp-header__title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
          <span className="rp-header__subtitle" dangerouslySetInnerHTML={{ __html: this.props.description }} />
        </Link>
      </header>
    );
  }
}

export default Header;
