import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="rp-header">
      <Link className="rp-header__link" to="/">
        <img
          className="rp-header__logo"
          src={logo}
          alt="logo"
        />
        <span
          className="rp-header__title"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <span
          className="rp-header__subtitle"
          dangerouslySetInnerHTML={{ __html: props.subtitle }}
        />
      </Link>
    </header>
  );
}

export default Header;
